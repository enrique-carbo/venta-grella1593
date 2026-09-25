import { PropertyImage, PropertyFeature, Amenity, NearbyPoint, FaqItem, FloorPlanZone } from '../types';

import facadeImg from '../assets/images/Grella1593-mb1.jpeg';
import facadeImg1 from '../assets/images/Grella1593_exterior.jpg';
import facadeImg2 from '../assets/images/Grella1593_exterior1.jpg';
import commercialImg from '../assets/images/LocalComercial.jpg';
import livingImg from '../assets/images/living-amplio.jpg';
import kitchenImg from '../assets/images/Grella1593-Cocina.jpg';
import bedroomImg from '../assets/images/dormitorio-anterior.jpg';
import bedroomImg2 from '../assets/images/dormitorio-posterior1.jpg';
import bano from '../assets/images/bano.jpg';
import garagePatioImg from '../assets/images/Grella1593-CocheraInterior1.jpg';
import parrillaImg from '../assets/images/parrilla.jpg';
import comedorImg from '../assets/images/comedor.jpg';
import planoTerrenoImg from '../assets/images/plano_terreno.jpg';
import planoViviendaImg from '../assets/images/plano_vivienda_sm.jpg';

export const PROPERTY_INFO = {
  referenceCode: 'PROP-GRELLA-1593',
  title: 'Propiedad Mixta: Casa 2 Dormitorios + Cochera + Local Comercial',
  shortTitle: 'Casa 2 Dormitorios + Cochera + Local Comercial',
  subtitle: 'Oportunidad única para vivir y emprender o maximizar renta doble en una ubicación estratégica.',
  priceUsd: 'Consultar Precio',
  priceNote: 'Apto crédito hipotecario',
  status: 'Disponible para Venta Inmediata',
  totalArea: '199 m²',
  coveredArea: '170 m²',
  uncoveredArea: '29 m²',
  location: {
    address: 'Padre Grella 1593, casi Don Bosco',
    city: 'Paraná',
    googleMapsQuery: 'Zona Comercial y Residencial',
    zoneBadge: 'Zona de Alto Tránsito y Valorización',
  },
  contact: {
    whatsappNumber: '+5493434718183',
    whatsappFormatted: '+54 9 343 471-8183',
    email: 'simplex.parana@gmail.com',
    phoneFormatted: '(0343) 471-8183',
    realEstateAgent: 'Grella 1593 - Negocios Inmobiliarios',
    officeHours: 'Lunes a Viernes: 16:00 a 19:00 hs',
  }
};

export const PROPERTY_IMAGES: PropertyImage[] = [
  {
    id: 'img-1',
    title: 'Fachada',
    category: 'exterior',
    categoryLabel: 'Fachada y Exterior',
    url: facadeImg,
    alt: 'Fachada frontal completa de la propiedad en esquina',
    description: 'Frente con accesos independientes: entrada comercial a la calle y portón cochera.',
    isFeatured: true
  },
  {
    id: 'img-1.1',
    title: 'Fachada',
    category: 'exterior',
    categoryLabel: 'Fachada y Exterior',
    url: facadeImg1,
    alt: 'Fachada de la propiedad',
    description: 'Frente zona de portón cochera.',
  },{
    id: 'img-1.2',
    title: 'Fachada',
    category: 'exterior',
    categoryLabel: 'Fachada y Exterior',
    url: facadeImg2,
    alt: 'Fachada de la propiedad',
    description: 'Frente ingreso por puerta principal.',
  },
  {
    id: 'img-2',
    title: 'Local Comercial a la Calle',
    category: 'local',
    categoryLabel: 'Local Comercial',
    url: commercialImg,
    alt: 'Interior del local comercial con vidriera a la calle y baño',
    description: '50 m² con vidriera, pisos de cerámicos, iluminación LED y baño propio.',
    isFeatured: true
  },
  {
    id: 'img-3',
    title: 'Living Comedor Principal',
    category: 'casa',
    categoryLabel: 'Casa Residencial',
    url: livingImg,
    alt: 'Living comedor confortable con luz natural',
    description: 'Ambiente social cálido y espacioso, con excelente iluminación natural y ventilación cruzada.',
    isFeatured: true
  },
  {
    id: 'img-4',
    title: 'Cocina',
    category: 'casa',
    categoryLabel: 'Casa Residencial',
    url: kitchenImg,
    alt: 'Cocina con mesada de granito, alacenas y muebles bajo mesada',
    description: 'Muebles de alacena y bajo mesada a medida, mesada de granito.',
    isFeatured: true
  },
  {
    id: 'img-5',
    title: 'Dormitorio Principal',
    category: 'dormitorios',
    categoryLabel: 'Dormitorios',
    url: bedroomImg,
    alt: 'Dormitorio principal luminoso',
    description: 'Habitación principal con ventana a la calle.',
    isFeatured: true
  },
  {
    id: 'img-6',
    title: 'Cochera Cubierta & Patio con Parrilla',
    category: 'cochera',
    categoryLabel: 'Cochera y Patio',
    url: garagePatioImg,
    alt: 'Cochera techada con portón y patio seco con asador',
    description: 'Cochera cubierta y acceso directo a patio seco con parrilla.',
    isFeatured: true
  },
  {
    id: 'img-7',
    title: 'Segundo Dormitorio / Home Office',
    category: 'dormitorios',
    categoryLabel: 'Dormitorios',
    url: bedroomImg2,
    alt: 'Segundo dormitorio adaptable como dormitorio infantil o estudio home office',
    description: 'Ideal para niños, visitas o espacio de trabajo remoto con ventana a patio seco.',
  },
  {
    id: 'img-8',
    title: 'Baño Completo',
    category: 'casa',
    categoryLabel: 'Casa Residencial',
    url: bano,
    alt: 'Baño completo',
    description: 'Revestimiento cerámico, ducha, sanitarios.',
  },
  {
    id: 'img-9',
    title: 'Detalle de Patio & Churrasquera',
    category: 'cochera',
    categoryLabel: 'Cochera y Patio',
    url: parrillaImg,
    alt: 'Sector de parrilla',
    description: 'Patio seco con parrilla y sector de lavadero independiente.',
  },
  {
    id: 'img-10',
    title: 'Planos Terreno',
    category: 'planos',
    categoryLabel: 'Planos',
    url: planoTerrenoImg,
    alt: 'Planos terreno',
    description: 'Planos terreno FR2 199 m2.',
  },
  {
    id: 'img-11',
    title: 'Planos Vivienda',
    category: 'planos',
    categoryLabel: 'Planos',
    url: planoViviendaImg,
    alt: 'Planos Vivienda',
    description: 'Planos vivienda.',
  }
];

export const PROPERTY_UNITS: PropertyFeature[] = [
  {
    id: 'unit-house',
    title: 'Casa para Vivienda Familiar',
    subtitle: 'Confort, privacidad y luminosidad en 2 dormitorios',
    surface: '60 m² cubiertos',
    badge: 'Vivienda Familiar',
    description: 'Diseñada para una vida familiar cómoda e independiente.',
    highlights: [
      '2 Dormitorios',
      'Living-comedor amplio con ventana a la cochera y patio',
      'Cocina equipada con mesada de granito',
      'Baño principal completo con artefactos y grifería',
      'Instalación para aire acondicionado split y calefacción gas natural',
      'Entrada independiente de la zona comercial'
    ],
    imageUrl: livingImg,
    iconName: 'Home'
  },
  {
    id: 'unit-commercial',
    title: 'Local Comercial a la Calle',
    subtitle: 'Frente de comercial con vidriera',
    surface: '50 m² cubiertos',
    badge: 'Renta Comercial / Negocio Propio',
    description: 'Espacio comercial totalmente independiente con vidriera de seguridad sobre calle de alto tránsito vehicular y peatonal. Ideal para comercio, consultorios, oficinas, showroom o renta inmediata.',
    highlights: [
      'Vidriera de cristal templado de 2 metros de frente',
      'Pisos de cerámico',
      'Baño privado para personal',
      'Tablero eléctrico independiente',
      'Rejas en el frente',
      'Alarma y cámaras de seguridad'
    ],
    imageUrl: commercialImg,
    iconName: 'Store'
  },
  {
    id: 'unit-garage',
    title: 'Cochera Cubierta & Patio Privado',
    subtitle: 'Seguridad para tu vehículo y espacio de disfrute al aire libre',
    surface: '45 m² (25 m² cochera + 20 m² patio)',
    badge: 'Comodidad & Seguridad',
    description: 'Cochera techada con acceso directo hacia la vivienda y patio trasero con parrilla para compartir con familia y amigos.',
    highlights: [
      'Portón plegable',
      'Capacidad para vehículo grande (camioneta / SUV) + moto o bicis',
      'Patio seco con asador / churrasquera de material',
      'Lavadero semicubierto independiente',
      'Alarma'
    ],
    imageUrl: garagePatioImg,
    iconName: 'Car'
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'amenity-1',
    title: 'Todos los Servicios Conectados',
    description: 'Agua corriente, gas natural, electricidad, cloacas y fibra óptica (internet).',
    icon: 'Zap',
    tag: '100% Funcional'
  },
  {
    id: 'amenity-2',
    title: 'Escritura & Título Perfecto',
    description: 'Documentación al día, lista para escriturar y apta para crédito bancario hipotecario.',
    icon: 'FileCheck',
    tag: 'Apto Crédito'
  },
  {
    id: 'amenity-3',
    title: 'Doble Fuente de Ingresos',
    description: 'Opción de habitar la casa y alquilar el local o alquilar ambas unidades por separado.',
    icon: 'TrendingUp',
    tag: 'Inversión Inteligente'
  },
  {
    id: 'amenity-4',
    title: 'Seguridad & Cerramientos',
    description: 'Ventanas con persianas, portón plegable, alarma instalada y cámaras.',
    icon: 'ShieldCheck',
    tag: 'Máxima Seguridad'
  },
  {
    id: 'amenity-5',
    title: 'Construcción Tradicional',
    description: 'Construcción tradicional, techos de losa con opción de ampliar hacia arriba, techos impermeabilizados y pisos de cerámicos.',
    icon: 'Layers',
    tag: 'Estructura Sólida'
  },
  {
    id: 'amenity-6',
    title: 'Bajo Mantenimiento & Expensas $0',
    description: 'Propiedad en lote propio sin gastos de expensas ni comisiones consorciales.',
    icon: 'PiggyBank',
    tag: 'Cero Expensas'
  }
];

export const NEARBY_POINTS: NearbyPoint[] = [
  {
    id: 'point-1',
    category: 'transit',
    name: 'Transporte Público',
    distance: '50 metros',
    time: '2 min a pie',
    description: 'Líneas de colectivos que pasan por la zona son la F, G y L.',
    icon: 'Bus'
  },
  {
    id: 'point-2',
    category: 'commercial',
    name: 'Comercios y supermercados',
    distance: '100 metros',
    time: '5 min a pie',
    description: 'Carrefour Maxi, ferreterias, gimnasios y polirubros.',
    icon: 'ShoppingBag'
  },
  {
    id: 'point-3',
    category: 'education',
    name: 'Colegios',
    distance: '150 metros',
    time: '8 min a pie',
    description: 'Escuelas primarias y secundarias que comparten el Complejo Escuela Hogar.',
    icon: 'GraduationCap'
  },
  {
    id: 'point-4',
    category: 'health',
    name: 'Salud',
    distance: '200 metros',
    time: '10 min a pie',
    description: 'Hospital geriátrico Pascual Palma, cuenta con consultorios externos, estudios complementarios e internación.',
    icon: 'Stethoscope'
  },
  {
    id: 'point-5',
    category: 'leisure',
    name: 'Clubes & Recreación',
    distance: '150 metros',
    time: '8 min a pie',
    description: 'El club Don Bosco, Patronato y varios gimnasios invitan a no quedarse quieeto.',
    icon: 'Trees'
  },
  {
    id: 'point-6',
    category: 'transit',
    name: 'Acceso Rápido a Autopista / Circunvalación',
    distance: '1.2 km',
    time: '4 min en auto',
    description: 'Conectividad fluida hacia accesos interurbanos.',
    icon: 'Navigation'
  }
];

export const FLOOR_PLAN_ZONES: FloorPlanZone[] = [
  {
    id: 'fp-local',
    name: 'Local Comercial con Vidriera',
    category: 'local',
    area: '50 m²',
    dimensions: '4m x 12m',
    details: 'Frente vidriado sobre calle Grella, área de atención al público y baño privado.',
    xPercent: 30,
    yPercent: 10,
    image: commercialImg
  },
  {
    id: 'fp-garage',
    name: 'Cochera Cubierta',
    category: 'cochera',
    area: '24 m²',
    dimensions: '3m x 8m',
    details: 'Portón, espacio para vehículo grande y motos, con paso directo a patio y vivienda.',
    xPercent: 30,
    yPercent: 30,
    image: garagePatioImg
  },
  {
    id: 'fp-living',
    name: 'Living',
    category: 'casa',
    area: '18 m²',
    dimensions: '3m x 6m',
    details: 'Ambiente amplio, integrador con cocina.',
    xPercent: 30,
    yPercent: 50,
    image: livingImg
  },
  {
    id: 'fp-kitchen',
    name: 'Cocina',
    category: 'casa',
    area: '9 m²',
    dimensions: '3m x 3m',
    details: 'Alacenas y bajo mesada, mesada de granito.',
    xPercent: 50,
    yPercent: 50,
    image: kitchenImg
  },{
    id: 'fp-bano',
    name: 'Baño',
    category: 'casa',
    area: '4.5 m²',
    dimensions: '3m x 1.5m',
    details: 'Alacenas, mesada.',
    xPercent: 70,
    yPercent: 50,
    image: bano
  },
  {
    id: 'fp-comedor',
    name: 'Comedor',
    category: 'casa',
    area: '9 m²',
    dimensions: '3m x 3m',
    details: 'Comedor con ventana y ventilación cruzada.',
    xPercent: 50,
    yPercent: 70,
    image: comedorImg
  },
  {
    id: 'fp-bedroom1',
    name: 'Dormitorio Principal',
    category: 'casa',
    area: '11 m²',
    dimensions: '3.2m x 3.4m',
    details: 'Orientación norte este, ventana al este.',
    xPercent: 30,
    yPercent: 70,
    image: bedroomImg
  },
  {
    id: 'fp-bedroom2',
    name: 'Segundo Dormitorio',
    category: 'casa',
    area: '9 m²',
    dimensions: '3m x 3m',
    details: 'Dormitorio secundario al patio.',
    xPercent: 70,
    yPercent: 70,
    image: bedroomImg2
  },
  {
    id: 'fp-patio',
    name: 'Patio & Asador',
    category: 'patio',
    area: '20 m²',
    dimensions: '2m x 10m',
    details: 'Parrilla de material, lavadero semi cubierto.',
    xPercent: 85,
    yPercent: 30,
    image: parrillaImg
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'legal',
    question: '¿La propiedad posee escritura al día y planos aprobados?',
    answer: 'Sí, la propiedad cuenta con título perfecto, libre de gravámenes, inhibiciones o deudas. Permite una transferencia inmediata y sin complicaciones.'
  },
  {
    id: 'faq-2',
    category: 'payment',
    question: '¿Es apta para crédito hipotecario bancario?',
    answer: 'Totalmente. Al tener escritura pública en orden, califica para las líneas de crédito hipotecario vigentes (UVA, Procrear, bancos privados y públicos).'
  },
  {
    id: 'faq-3',
    category: 'payment',
    question: '¿Se aceptan permutas o vehículos en parte de pago?',
    answer: 'No se aceptan permutas o vehículos en parte de pago.'
  },
  {
    id: 'faq-4',
    category: 'commercial',
    question: '¿Qué tipo de actividades comerciales se pueden habilitar en el local?',
    answer: 'La zonificación permite una amplia gama de usos comerciales y profesionales: estética/peluquería, cafetería al paso, librería, consultorio, estudio contable o jurídico, showroom de indumentaria, entre otros. Posee baño propio independiente.'
  },
  {
    id: 'faq-5',
    category: 'commercial',
    question: '¿El local y la casa tienen servicios eléctricos independientes?',
    answer: 'Sí, la instalación electrica cuenta con tableros y medidores independientes para que puedas tener consumos separados.'
  },
  {
    id: 'faq-6',
    category: 'house',
    question: '¿En qué estado general de conservación se encuentra la casa?',
    answer: 'Es una propiedad de 4 décadas de antigüedad aproximadamente. Se encuentra en buen estado de conservación, lista para habitar de inmediato sin requerir obras estructurales de importancia. Pintura reciente, e impermeabilización de amplio sector del techo.'
  },
  {
    id: 'faq-7',
    category: 'visits',
    question: '¿Cómo se coordinan las visitas a la propiedad?',
    answer: 'Las visitas se coordinan de forma personalizada de Lunes a Viernes previa cita por WhatsApp.'
  }
];
