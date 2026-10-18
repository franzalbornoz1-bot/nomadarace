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
  eyebrow: "STGO10K BY ASICS",
  title: "STGO10K",
  subtitle: "La ciudad se corre. Nosotros estaremos ahí para capturar tu próximo desafío.",
  dateLabel: "Domingo 18 de octubre de 2026",
  startIso: "2026-10-18T08:00:00-03:00",
  locationName: "Ñuñoa, Santiago",
  locationDescription: "Consulta el punto de encuentro y sigue la ruta por las calles de la comuna de Ñuñoa.",
  mapUrl: "https://maps.app.goo.gl/8tumukvqKoug8b8VA",
  distances: [
    { label: "10K", time: "08:00 hrs", description: "El desafío principal" },
    { label: "5K", time: "08:00 hrs", description: "Corre a tu propio ritmo" },
  ],
  description: "Encuentra aquí la información para planificar tu participación en STGO10K: horarios, distancias, ubicación y retiro de kit. Nómada Race acompañará la jornada con fotografía deportiva para que puedas volver a vivir cada kilómetro.",
  gallery: [
    { src: "/stock/SRC_8053_4306237_333466.jpg", alt: "Corredora celebrando durante una carrera urbana" },
    { src: "/stock/B58A2042_4306237_333466.jpg", alt: "Corredores avanzando juntos por la ruta" },
    { src: "/stock/DSC06004_4306237_332429.jpg", alt: "Grupo de runners disfrutando el recorrido" },
  ],
  photoStoreUrl: "https://nomadarace.fotop.com.br/",
  kitPickup: {
    date: "Sábado 17 de octubre",
    time: "11:00 a 19:00 hrs",
    location: "Plaza de las Artes – Pianista Valentín Trujillo",
    address: "Alcaldesa Balbina Vera 3526, Ñuñoa (detrás de la Municipalidad de Ñuñoa)",
    details: "Retira tu polera técnica, bolsa, dorsal con chip de tiempos y medalla de finisher. Lleva tu cédula o pasaporte; para retiros por terceros se solicita copia y autorización simple.",
  },
  officialUrl: "https://nomadarace.fotop.com.br/",
};
