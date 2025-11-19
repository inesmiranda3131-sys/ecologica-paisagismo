import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Load Google Font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Delay text animations so video plays first
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://mocha-cdn.com/019a9d41-ae78-7ea5-8073-023a1823704e/IMG_6115.jpg"
        onLoadedData={handleVideoLoaded}
        onCanPlay={handleVideoLoaded}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ willChange: 'opacity' }}
      >
        <source src="https://cdn.coverr.co/videos/coverr-lush-green-garden-with-tropical-plants-9483/1080p.mp4" type="video/mp4" />
      </video>
      
      {/* Poster image overlay that fades out */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          backgroundImage: 'url(https://mocha-cdn.com/019a9d41-ae78-7ea5-8073-023a1823704e/IMG_6115.jpg)',
          willChange: 'opacity'
        }}
      />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      
      {/* Fallback background (if video fails to load) */}
      <div className="absolute inset-0 bg-black -z-10" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className={`inline-flex items-center justify-center mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <img 
            src="https://mocha-cdn.com/019a9d41-ae78-7ea5-8073-023a1823704e/ecologica-logo-paisagismo.png" 
            alt="Ecológica Logo" 
            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl rounded-full"
          />
        </div>
        
        <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Ecológica
        </h1>
        
        <p className={`text-xl md:text-2xl text-white mb-4 font-light transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Comércio de Plantas e Paisagismo
        </p>
        
        <p className={`text-lg md:text-xl text-white mb-12 font-light transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Transformando espaços em ambientes naturais
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#servicos"
            className="px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Nossos Serviços
          </a>
          <a
            href="#contato"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
