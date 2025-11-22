const images = [
  {
    url: 'https://mocha-cdn.com/019a9d41-ae78-7ea5-8073-023a1823704e/image.png_1368.png',
    title: 'Projeto Residencial',
  },
  {
    url: 'https://mocha-cdn.com/019a9d41-ae78-7ea5-8073-023a1823704e/image.png_1761.png',
    title: 'Floreira Vertical',
  },
  {
    url: 'https://mocha-cdn.com/019a9d41-ae78-7ea5-8073-023a1823704e/image.png_2903.png',
    title: 'Jardim Externo',
  },
  {
    url: 'https://mocha-cdn.com/019a9d41-ae78-7ea5-8073-023a1823704e/image.png_2252.png',
    title: 'Cachoeira Ornamental',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos de paisagismo e jardinagem em Curitiba e Pinhais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  filter: 'brightness(1.1) saturate(1.15) contrast(1.08)',
                }}
              />
              
              {/* Subtle vignette for professional look */}
              <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{
                background: 'radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.15) 100%)',
              }} />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
