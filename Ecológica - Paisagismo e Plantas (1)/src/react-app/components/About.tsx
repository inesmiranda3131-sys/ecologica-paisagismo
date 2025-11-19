import { MapPin, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1200&auto=format&fit=crop"
                alt="Jardim paisagístico"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-emerald-500 text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">15+</p>
                  <p className="text-sm text-gray-600">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a Ecológica
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Com sede em Curitiba, a Ecológica Comércio de Plantas e Paisagismo é especializada em criar e manter espaços verdes que conectam pessoas à natureza.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa equipe de profissionais qualificados trabalha com paixão e dedicação para transformar jardins, áreas residenciais e comerciais em verdadeiros oásis urbanos, utilizando práticas sustentáveis e plantas adaptadas ao clima paranaense.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Localização</h3>
                  <p className="text-gray-600">R. Dr. Faivre, 750 - cj 1001</p>
                  <p className="text-gray-600">Centro, Curitiba - PR, 80060-140</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Equipe</h3>
                  <p className="text-gray-600">Profissionais Especializados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
