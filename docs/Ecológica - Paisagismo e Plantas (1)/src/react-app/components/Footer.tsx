export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://mocha-cdn.com/019a9d41-ae78-7ea5-8073-023a1823704e/ecologica-logo-paisagismo.png" 
              alt="Ecológica Logo" 
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold text-white">Ecológica</h3>
              <p className="text-sm text-gray-400">Paisagismo Ltda.</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ecológica Comércio de Plantas e Paisagismo Ltda.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              R. Dr. Faivre, 750 - cj 1001 - Centro, Curitiba - PR, 80060-140
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
