import { Hono } from "hono";
import upload from "./routes/upload";

const app = new Hono<{ Bindings: Env }>();

app.route("/api/upload", upload);
app.route("/api/videos", upload);

export default app;
