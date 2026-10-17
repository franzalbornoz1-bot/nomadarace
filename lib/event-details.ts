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
  subtitle: "La ciudad se corre. Tu próxima meta empieza aquí.",
  dateLabel: "Domingo 18 de octubre de 2026",
  startIso: "2026-10-18T08:00:00-03:00",
  locationName: "Ñuñoa, Santiago",
  locationDescription: "Circuito oficial por las calles de la comuna de Ñuñoa.",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Ñuñoa%2C%20Santiago%2C%20Chile",
  distances: [
    { label: "10K", time: "08:00 hrs", description: "El desafío principal" },
    { label: "5K", time: "08:00 hrs", description: "Corre a tu propio ritmo" },
  ],
  description: "STGO10K es el circuito de running que pone a Santiago en movimiento. Una mañana para desafiar tus límites, compartir la ruta y formar parte de la comunidad runner más grande de la ciudad.",
  kitPickup: {
    date: "Sábado 17 de octubre",
    time: "11:00 a 19:00 hrs",
    location: "Plaza de las Artes – Pianista Valentín Trujillo",
    address: "Alcaldesa Balbina Vera 3526, Ñuñoa (detrás de la Municipalidad de Ñuñoa)",
    details: "Retira tu polera técnica, bolsa, dorsal con chip de tiempos y medalla de finisher. Lleva tu cédula o pasaporte; para retiros por terceros se solicita copia y autorización simple.",
  },
  officialUrl: "https://stgo10k.cl/",
};
