import { CARACTERISTICAS_PRODUCTO, BENEFICIOS } from '../constantes/datosEmpresa';

export const SeccionCaracteristicas = () => {
  return (
    <section id="caracteristicas" className="py-8 md:py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-auto-seguro-negro mb-3 md:mb-4">
            ¿Por qué elegir nuestro Inmovilizador?
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología de última generación para la protección de tu vehículo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          {CARACTERISTICAS_PRODUCTO.map((caracteristica) => (
            <div 
              key={caracteristica.id}
              className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-xl transition-shadow border-2 border-transparent hover:border-auto-seguro-rojo"
            >
              <div className="text-4xl md:text-5xl mb-4">{caracteristica.icono}</div>
              <h3 className="text-lg md:text-2xl font-bold text-auto-seguro-negro mb-2 md:mb-3">
                {caracteristica.titulo}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {caracteristica.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-auto-seguro-negro text-white rounded-2xl p-6 md:p-12">
          <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-center">
            Beneficios Adicionales
          </h3>
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-3 md:gap-8">
            {BENEFICIOS.map((beneficio, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 md:flex-none"
              >
                <div className="w-6 h-6 bg-auto-seguro-rojo rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-base md:text-lg">{beneficio}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
