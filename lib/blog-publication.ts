export const blogPublicationDates = {
  "primeros-10k": { iso: "2026-07-01", label: "1 de julio de 2026" },
  "como-correr-mas-rapido": { iso: "2026-07-05", label: "5 de julio de 2026" },
  "ejercicios-fuerza-corredores": { iso: "2026-07-12", label: "12 de julio de 2026" },
  "alimentacion-para-corredores": { iso: "2026-07-19", label: "19 de julio de 2026" },
  "plan-para-correr-5k": { iso: "2026-07-22", label: "22 de julio de 2026" },
  "recuperacion-despues-de-correr": { iso: "2026-07-30", label: "30 de julio de 2026" },
  "hidratacion-para-corredores": { iso: "2026-08-03", label: "3 de agosto de 2026" },
  "tecnica-de-carrera-cadencia": { iso: "2026-08-08", label: "8 de agosto de 2026" },
  "semana-antes-de-una-carrera": { iso: "2026-08-14", label: "14 de agosto de 2026" },
  "media-maraton-primeriza": { iso: "2026-08-18", label: "18 de agosto de 2026" },
  "correr-con-calor": { iso: "2026-08-21", label: "21 de agosto de 2026" },
  "trail-running-principiantes": { iso: "2026-08-27", label: "27 de agosto de 2026" },
  "planificar-entrenamiento-semanal-running": { iso: "2026-08-29", label: "29 de agosto de 2026" },
  "series-cuestas-running-principiantes": { iso: "2026-09-01", label: "1 de septiembre de 2026" },
  "fuerza-pies-tobillos-corredores": { iso: "2026-09-03", label: "3 de septiembre de 2026" },
  "fuerza-core-corredores": { iso: "2026-09-06", label: "6 de septiembre de 2026" },
  "colaciones-para-corredores": { iso: "2026-09-08", label: "8 de septiembre de 2026" },
  "alimentacion-dia-carrera": { iso: "2026-09-09", label: "9 de septiembre de 2026" },
  "proteina-carbohidratos-running": { iso: "2026-09-11", label: "11 de septiembre de 2026" },
  "recuperacion-activa-descanso-running": { iso: "2026-09-12", label: "12 de septiembre de 2026" },
} as const;

export function getBlogPublicationDate(slug: string) {
  return blogPublicationDates[slug as keyof typeof blogPublicationDates] ?? {
    iso: "2026-09-12",
    label: "12 de septiembre de 2026",
  };
}
