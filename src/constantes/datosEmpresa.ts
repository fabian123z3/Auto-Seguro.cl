// Constantes centralizadas de Auto-Seguro.cl

export const DATOS_EMPRESA = {
  nombre: 'Auto-Seguro.cl',
  telefono: '+56 9 30006133',
  whatsappLink: 'https://wa.me/c/56930006133',
  direccion: 'Calle El Roble 130 - Chillán',
} as const;

export const CARACTERISTICAS_PRODUCTO = [
  {
    id: 1,
    titulo: 'Protección antirrobo automática',
    descripcion: 'Sistema inteligente que protege tu vehículo de manera automática',
    icono: '🛡️',
  },
  {
    id: 2,
    titulo: 'Se bloquea solo si el control se aleja',
    descripcion: 'Detecta automáticamente cuando el control se aleja del vehículo',
    icono: '📡',
  },
  {
    id: 3,
    titulo: 'Sin el control no arranca el motor',
    descripcion: 'Máxima seguridad: sin el control autorizado, el motor no se activa',
    icono: '🔒',
  },
] as const;

export const PLANES_PRECIO = [
  {
    id: 1,
    nombre: 'Instalación',
    precio: 50000,
    tipo: 'instalacion',
    badge: 'OFERTA LIMITADA',
    caracteristicas: [
      'Instalación en nuestro local',
      'Garantía de instalación',
      'Soporte técnico',
    ],
    destacado: false,
  },
  {
    id: 2,
    nombre: 'A Domicilio',
    precio: 65000,
    tipo: 'domicilio',
    badge: 'OFERTA LIMITADA',
    caracteristicas: [
      'Instalación en tu domicilio',
      'Garantía de instalación',
      'Soporte técnico prioritario',
    ],
    destacado: true,
  },
] as const;

export const BENEFICIOS = [
  'Instalación rápida y profesional',
  'Soporte técnico disponible',
  'Compatible con la mayoría de vehículos',
] as const;
