import { PLANES_PRECIO, DATOS_EMPRESA } from '../constantes/datosEmpresa';

const formatearPrecio = (precio: number): string => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(precio);
};

export const SeccionPrecios = () => {
  return (
    <section id="precios" className="py-8 md:py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-auto-seguro-negro mb-3 md:mb-4">
            Planes de Instalación
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Elige la opción que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {PLANES_PRECIO.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 ${
                plan.destacado ? 'ring-4 ring-auto-seguro-rojo' : ''
              }`}
            >
              {/* Badge de oferta */}
              <div className="absolute top-4 right-4">
                <div className="bg-auto-seguro-amarillo text-auto-seguro-negro px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <span>⭐</span>
                  {plan.badge}
                </div>
              </div>

              <div className="p-4 md:p-8">
                <h3 className="text-xl md:text-3xl font-bold text-auto-seguro-negro mb-2">
                  {plan.nombre}
                </h3>
                
                <div className="mb-6">
                  <span className="text-3xl md:text-5xl font-bold text-auto-seguro-rojo">
                    {formatearPrecio(plan.precio)}
                  </span>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.caracteristicas.map((caracteristica, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-auto-seguro-rojo rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{caracteristica}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={DATOS_EMPRESA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 md:py-4 px-6 rounded-lg font-bold text-center text-base md:text-lg transition-colors ${
                    plan.destacado
                      ? 'bg-auto-seguro-rojo hover:bg-auto-seguro-rojo-claro text-white'
                      : 'bg-auto-seguro-negro hover:bg-gray-800 text-white'
                  }`}
                >
                  Contratar Ahora
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-base md:text-lg">
            💳 Aceptamos todos los medios de pago • 📅 Agenda tu instalación hoy mismo
          </p>
        </div>
      </div>
    </section>
  );
};
