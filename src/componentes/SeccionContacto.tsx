import { DATOS_EMPRESA } from '../constantes/datosEmpresa';
import logoWhatsApp from '../assets/wsp.png';

export const SeccionContacto = () => {
  return (
    <section id="contacto" className="py-8 md:py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-auto-seguro-negro mb-3 md:mb-4">
            Contáctanos
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Estamos listos para ayudarte a proteger tu vehículo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {/* WhatsApp */}
          <a
            href={DATOS_EMPRESA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-auto-seguro-verde hover:bg-green-600 text-white p-4 md:p-8 rounded-xl text-center transform transition-all hover:scale-105 shadow-lg"
          >
            <img src={logoWhatsApp} alt="WhatsApp" className="w-16 md:w-20 h-16 md:h-20 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">WhatsApp</h3>
            <p className="text-lg">{DATOS_EMPRESA.telefono}</p>
            <p className="mt-4 text-sm opacity-90">Click para chatear</p>
          </a>

          {/* Ubicación */}
          <a
            href="https://maps.google.com/?q=Calle+El+Roble+130+Chillan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-auto-seguro-rojo hover:bg-red-700 text-white p-4 md:p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105 block"
          >
            <div className="text-4xl md:text-5xl mb-4">📍</div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Ubicación</h3>
            <p className="text-lg">{DATOS_EMPRESA.direccion}</p>
            <p className="mt-4 text-sm opacity-90">Presiona para ver nuestro local</p>
          </a>
        </div>

        {/* Llamado a la acción final */}
        <div className="mt-6 md:mt-16 bg-gradient-to-r from-auto-seguro-negro to-gray-800 text-white rounded-2xl p-6 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para proteger tu vehículo?
          </h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300">
            Contáctanos ahora y agenda tu instalación
          </p>
          <a
            href={DATOS_EMPRESA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-auto-seguro-rojo hover:bg-auto-seguro-rojo-claro text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold text-lg md:text-xl transition-colors"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
