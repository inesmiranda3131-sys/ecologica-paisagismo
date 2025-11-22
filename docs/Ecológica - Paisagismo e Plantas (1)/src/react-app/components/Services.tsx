import { Trees, Shovel, Armchair, Scissors, Waves, Flower } from 'lucide-react';

const services = [
  {
    icon: Armchair,
    title: 'Mobiliário de Jardim',
    description: 'Seleção e instalação de móveis e acessórios para compor e enriquecer seu espaço verde.',
  },
  {
    icon: Shovel,
    title: 'Manutenção de Jardins',
    description: 'Cuidados completos para seu jardim, incluindo poda, adubação, controle de pragas e doenças.',
  },
  {
    icon: Scissors,
    title: 'Poda e Amarração de Pinheiro Araucária',
    description: 'Serviços especializados para o cuidado e manutenção de pinheiros araucária, com segurança e técnica.',
  },
  {
    icon: Trees,
    title: 'Paisagismo',
    description: 'Projetos personalizados de paisagismo que transformam ambientes externos e internos em verdadeiros oásis.',
  },
  {
    icon: Waves,
    title: 'Cachoeiras e Lagos Ornamentais',
    description: 'Criação e instalação de cachoeiras e lagos que adicionam beleza, som relaxante e vida ao seu jardim.',
  },
  {
    icon: Flower,
    title: 'Vasos e Jardins Internos',
    description: 'Soluções criativas para ambientes internos, com vasos decorativos e jardins verticais que trazem a natureza para dentro de casa.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas em paisagismo e jardinagem para criar e manter espaços verdes excepcionais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
