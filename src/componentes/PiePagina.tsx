import { DATOS_EMPRESA } from '../constantes/datosEmpresa';
import logoAutoSeguro from '../assets/logo.png';
import logoWhatsApp from '../assets/wsp.png';

export const PiePagina = () => {
  const añoActual = new Date().getFullYear();

  return (
    <footer className="bg-auto-seguro-negro text-white py-6 md:py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4 md:gap-8 mb-4 md:mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={logoAutoSeguro} 
                alt="Auto-Seguro.cl Logo" 
                className="h-20 lg:h-32 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Protege tu vehículo con la mejor tecnología en sistemas de inmovilización. 
              Instalación profesional y garantizada.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-3 md:mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-auto-seguro-rojo transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="text-gray-400 hover:text-auto-seguro-rojo transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#precios" className="text-gray-400 hover:text-auto-seguro-rojo transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-auto-seguro-rojo transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-3 md:mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>{DATOS_EMPRESA.telefono}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{DATOS_EMPRESA.direccion}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {añoActual} {DATOS_EMPRESA.nombre}. Todos los derechos reservados.
            </p>
            <a
              href={DATOS_EMPRESA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-auto-seguro-verde hover:bg-green-600 text-white px-4 md:px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm md:text-base"
            >
              <img src={logoWhatsApp} alt="WhatsApp" className="w-5 h-5" />
              <span>Chatea con nosotros</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
