export type EventDetailConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  dateLabel: string;
  startIso: string;
  locationName: string;
  locationDescription: string;
  mapUrl: string;
  distances: { label: string; time: string; description: string }[];
  description: string;
  gallery: { src: string; alt: string }[];
  photoStoreUrl: string;
  kitPickup: { date: string; time: string; location: string; address: string; details: string };
  officialUrl: string;
};

/**
 * Contenido editable de la landing reutilizable /eventos/detalles.
 * Para el próximo evento basta reemplazar este objeto: la ruta y el diseño se mantienen.
 */
export const activeEventDetail: EventDetailConfig = {
  eyebrow: "DOGCIAL RUN 3 · INFORMACIÓN DEL EVENTO",
  title: "DOGCIAL RUN 3",
  subtitle: "Una jornada de 3K a ritmo social. Nómada Race estará fotografiando el recorrido para que encuentres tus fotos después.",
  dateLabel: "Sábado 31 de octubre de 2026 · 10:00 AM",
  startIso: "2026-10-31T10:00:00-03:00",
  locationName: "Canil Parque Juan Pablo II, Las Condes",
  locationDescription: "El punto de encuentro es el Canil Parque Juan Pablo II, en Las Condes. Una ruta de 3 km a ritmo social, amable y conversado.",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Canil+Parque+Juan+Pablo+II+Las+Condes",
  distances: [
    { label: "3K", time: "10:00 AM", description: "Trote social solidario" },
  ],
  description: "DOGCIAL RUN 3 es un social run solidario difundido por Fundación APAÑA para apoyar el rescate canino. La inscripción es 100% gratuita y contempla un aporte voluntario de alimento, juguetes, ropa o insumos de curación para los perritos rescatados. El #Desafío50Patitas busca llegar a 50 inscritos para activar donaciones de Doggy Snacks, Milteo y La loca de las mantequillas. La información de la ruta indica la participación de Colmillo Canirun y Je Uribe, fitness coach de Here & Now. Nómada Race estará registrando fotográficamente la jornada; las fotos de DOGCIAL RUN 3 se encontrarán en nuestra galería cuando estén disponibles.",
  gallery: [
    { src: "/stock/SRC_8053_4306237_333466.jpg", alt: "Corredora disfrutando un social run" },
    { src: "/stock/B58A2042_4306237_333466.jpg", alt: "Corredores compartiendo un recorrido" },
    { src: "/stock/DSC06004_4306237_332429.jpg", alt: "Comunidad runner conectando en la ruta" },
  ],
  photoStoreUrl: "https://nomadarace.fotop.com/",
  kitPickup: {
    date: "Sábado 31 de octubre",
    time: "10:00 AM",
    location: "Canil Parque Juan Pablo II",
    address: "Las Condes, Santiago",
    details: "La inscripción es gratuita. Si quieres ayudar, lleva alimento, juguetes, ropa o insumos de curación para los perritos rescatados por Fundación APAÑA. Revisa las indicaciones de la organización del evento antes de asistir. Nómada Race estará tomando fotografías durante el recorrido y avisará cuando la galería esté disponible.",
  },
  officialUrl: "https://www.instagram.com/fundacionapana/",
};
