import { DATOS_EMPRESA } from '../constantes/datosEmpresa';
import logoAutoSeguro from '../assets/logo.png';
import logoWhatsApp from '../assets/wsp.png';

export const Encabezado = () => {
  return (
    <header className="bg-auto-seguro-negro text-white py-4 md:py-4 lg:py-8 px-4 md:px-6 lg:px-8 w-full shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3">
          <img 
            src={logoAutoSeguro} 
            alt="Auto-Seguro.cl Logo" 
            className="h-28 md:h-14 lg:h-36 w-auto"
          />
        </a>
        
        <nav className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base">
          <a 
            href="#inicio" 
            className="hover:text-auto-seguro-rojo transition-colors"
          >
            Inicio
          </a>
          <a 
            href="#caracteristicas" 
            className="hover:text-auto-seguro-rojo transition-colors"
          >
            Características
          </a>
          <a 
            href="#precios" 
            className="hover:text-auto-seguro-rojo transition-colors"
          >
            Precios
          </a>
          <a 
            href="#contacto" 
            className="hover:text-auto-seguro-rojo transition-colors"
          >
            Contacto
          </a>
        </nav>

        <a
          href={DATOS_EMPRESA.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-auto-seguro-verde hover:bg-green-600 text-white px-3 md:px-4 py-3 md:py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 md:gap-2 text-sm md:text-base"
        >
          <img src={logoWhatsApp} alt="WhatsApp" className="w-8 h-8 md:w-5 md:h-5" />
          <span className="hidden md:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
};
