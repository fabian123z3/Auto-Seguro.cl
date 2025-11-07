import { DATOS_EMPRESA } from '../constantes/datosEmpresa';
import imagenInmovilizador from '../assets/inmovilizador.png';

export const SeccionHero = () => {
  return (
    <section 
      id="inicio" 
      className="relative bg-auto-seguro-negro text-white pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-20 px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Elemento decorativo rojo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-auto-seguro-rojo opacity-20 transform skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Inmovilizador
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-auto-seguro-rojo rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✓</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Protección antirrobo automática</h3>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-auto-seguro-rojo rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✓</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Se bloquea solo si el control se aleja</h3>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-auto-seguro-rojo rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✓</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Sin el control no arranca el motor</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 pt-6">
            <a
              href={DATOS_EMPRESA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-auto-seguro-rojo hover:bg-auto-seguro-rojo-claro text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-colors text-center"
            >
              Consultar Ahora
            </a>
            <a
              href="#precios"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-auto-seguro-negro text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-colors text-center"
            >
              Ver Precios
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-auto-seguro-rojo to-auto-seguro-rojo-claro p-1 rounded-2xl">
            <div className="bg-auto-seguro-negro p-4 md:p-6 lg:p-8 rounded-2xl">
              <div className="aspect-square bg-gray-800 rounded-xl flex items-center justify-center p-4">
                <img 
                  src={imagenInmovilizador} 
                  alt="Inmovilizador 2.4 GHz" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
