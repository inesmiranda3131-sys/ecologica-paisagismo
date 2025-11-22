import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Estamos prontos para transformar seu espaço verde. Fale conosco!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-full bg-emerald-500 text-white">
                <Phone className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Telefone</h3>
            <p className="text-emerald-100">(41) 3339-2454</p>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-full bg-emerald-500 text-white">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Endereço</h3>
            <p className="text-emerald-100">R. Dr. Faivre, 750 - cj 1001</p>
            <p className="text-emerald-100">Centro, Curitiba - PR, 80060-140</p>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-full bg-emerald-500 text-white">
                <Clock className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Horário</h3>
            <p className="text-emerald-100">Seg - Sex: 8h às 18h</p>
            <p className="text-emerald-100">Sáb e Dom: Fechado</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="tel:+554133392454"
            className="inline-block px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
