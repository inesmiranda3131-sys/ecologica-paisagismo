import { Hono } from "hono";

const upload = new Hono<{ Bindings: Env }>();

// Upload a video file to R2
upload.post("/video", async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get("video") as File;
    
    if (!file) {
      return c.json({ error: "No video file provided" }, 400);
    }

    // Validate file type
    const validTypes = ["video/mp4", "video/webm", "video/ogg", "video/quicktime"];
    if (!validTypes.includes(file.type)) {
      return c.json({ 
        error: "Invalid file type. Please upload a video file (mp4, webm, ogg, or mov)" 
      }, 400);
    }

    // Generate a unique key for the video
    const timestamp = Date.now();
    const filename = `hero-background-${timestamp}.${file.type.split('/')[1]}`;
    const key = `videos/${filename}`;

    // Upload to R2
    await c.env.R2_BUCKET.put(key, file.stream(), {
      httpMetadata: {
        contentType: file.type,
      },
    });

    return c.json({ 
      success: true, 
      key,
      url: `/api/videos/${filename}`
    });
  } catch (error) {
    console.error("Video upload error:", error);
    return c.json({ error: "Failed to upload video" }, 500);
  }
});

// Get a video file from R2
upload.get("/:filename", async (c) => {
  try {
    const filename = c.req.param("filename");
    const key = `videos/${filename}`;
    
    const object = await c.env.R2_BUCKET.get(key);
    
    if (!object) {
      return c.json({ error: "Video not found" }, 404);
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);
    
    return c.body(object.body, { headers });
  } catch (error) {
    console.error("Video retrieval error:", error);
    return c.json({ error: "Failed to retrieve video" }, 500);
  }
});

export default upload;
