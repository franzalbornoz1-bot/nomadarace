export type EventStatus = "Próximamente" | "Preventa" | "Fotos listas";

export type RaceEvent = {
  id: string;
  slug: string;
  name: string;
  city: string;
  place: string;
  date: string;
  shortDate: string;
  status: EventStatus;
  description: string;
  cover: string;
  photos: number;
  assigned: number;
  color: string;
};

export const events: RaceEvent[] = [
  {
    id: "EV-2027-001", slug: "maraton-santiago-2027", name: "Maratón Santiago 2027", city: "Santiago", place: "Parque Bicentenario", date: "11 de abril, 2027", shortDate: "11 ABR", status: "Preventa", photos: 0, assigned: 4,
    description: "Una ciudad que corre sin pausa. Vive cada kilómetro de la edición más esperada del año.", cover: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=85", color: "from-rose-500/80 via-orange-500/20 to-transparent",
  },
  {
    id: "EV-2026-034", slug: "media-maraton-vina", name: "Media Maratón de Viña", city: "Viña del Mar", place: "Avenida Perú", date: "24 de octubre, 2026", shortDate: "24 OCT", status: "Fotos listas", photos: 12840, assigned: 3,
    description: "El mar como testigo, tu esfuerzo como historia. Encuentra todos tus momentos junto a la costa.", cover: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=85", color: "from-sky-600/80 via-cyan-500/15 to-transparent",
  },
  {
    id: "EV-2026-029", slug: "10k-santiago", name: "10K Santiago", city: "Santiago", place: "Parque O'Higgins", date: "17 de septiembre, 2026", shortDate: "17 SEP", status: "Fotos listas", photos: 9420, assigned: 2,
    description: "Diez kilómetros para romper tus límites. Revive el pulso de las calles de Santiago.", cover: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85", color: "from-violet-600/80 via-fuchsia-500/10 to-transparent",
  },
  {
    id: "EV-2026-041", slug: "trail-andes", name: "Trail Andes 30K", city: "San José de Maipo", place: "Cajón del Maipo", date: "8 de noviembre, 2026", shortDate: "08 NOV", status: "Próximamente", photos: 0, assigned: 5,
    description: "Altura, piedra y cordillera. Una aventura para corredores que buscan lo indomable.", cover: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=85", color: "from-emerald-700/80 via-lime-500/10 to-transparent",
  },
  {
    id: "EV-2026-018", slug: "corrida-nocturna-valparaiso", name: "Corrida Nocturna Valparaíso", city: "Valparaíso", place: "Plaza Sotomayor", date: "12 de agosto, 2026", shortDate: "12 AGO", status: "Fotos listas", photos: 7760, assigned: 3,
    description: "Las luces del puerto y miles de zancadas. Una noche que se corre y se recuerda.", cover: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1400&q=85", color: "from-indigo-700/85 via-blue-600/15 to-transparent",
  },
];

export const photographers = [
  { name: "Camila Rojas", email: "camila@nomadarace.cl", initials: "CR", status: "Activa", events: 8, photos: 28440, specialty: "Running & retrato", color: "bg-orange-400" },
  { name: "Diego Morales", email: "diego@nomadarace.cl", initials: "DM", status: "Activo", events: 6, photos: 21380, specialty: "Trail & montaña", color: "bg-sky-400" },
  { name: "Valentina Cruz", email: "vale@nomadarace.cl", initials: "VC", status: "Activa", events: 5, photos: 19800, specialty: "Running urbano", color: "bg-violet-400" },
  { name: "Martín Silva", email: "martin@nomadarace.cl", initials: "MS", status: "Activo", events: 4, photos: 15420, specialty: "Ciclismo", color: "bg-lime-400" },
  { name: "Antonia Pérez", email: "antonia@nomadarace.cl", initials: "AP", status: "Pausada", events: 3, photos: 8720, specialty: "Eventos masivos", color: "bg-pink-400" },
  { name: "Ignacio Soto", email: "ignacio@nomadarace.cl", initials: "IS", status: "Activo", events: 5, photos: 16700, specialty: "Running & acción", color: "bg-amber-400" },
  { name: "Josefa Vidal", email: "josefa@nomadarace.cl", initials: "JV", status: "Activa", events: 7, photos: 25120, specialty: "Retrato deportivo", color: "bg-teal-400" },
  { name: "Raimundo Lagos", email: "raimundo@nomadarace.cl", initials: "RL", status: "Activo", events: 4, photos: 14390, specialty: "Trail & outdoor", color: "bg-red-400" },
  { name: "Sofía Ortega", email: "sofia@nomadarace.cl", initials: "SO", status: "Activo", events: 3, photos: 11800, specialty: "Running urbano", color: "bg-blue-400" },
  { name: "Tomás Reyes", email: "tomas@nomadarace.cl", initials: "TR", status: "Activo", events: 2, photos: 6740, specialty: "Ciclismo", color: "bg-emerald-400" },
];

const photoImages = [
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=480&q=65",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=480&q=65",
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=480&q=65",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=480&q=65",
  "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=480&q=65",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=480&q=65",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=480&q=65",
  "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=480&q=65",
];

export const photoCards = Array.from({ length: 50 }, (_, index) => ({
  id: `IMG-${String(index + 1).padStart(4, "0")}`,
  src: photoImages[index % photoImages.length],
  number: 340 + ((index * 7) % 50),
  photographer: photographers[index % 4].name,
}));

export const orders = [
  ["#NR-10084", "Isidora Muñoz", "Media Maratón de Viña", "Pack 12 fotos", "$18.990", "Pagado"],
  ["#NR-10083", "Felipe Torres", "10K Santiago", "Foto individual", "$3.490", "Pagado"],
  ["#NR-10082", "Antonia Vega", "Media Maratón de Viña", "Pack 6 fotos", "$11.990", "Pagado"],
  ["#NR-10081", "Lucas Rojas", "Corrida Nocturna", "Pack 12 fotos", "$18.990", "Pendiente"],
  ["#NR-10080", "María Paz Ríos", "10K Santiago", "Foto individual", "$3.490", "Pagado"],
  ["#NR-10079", "Benjamín Araya", "Media Maratón de Viña", "Preventa", "$9.990", "Pagado"],
  ["#NR-10078", "Carolina Díaz", "Corrida Nocturna", "Pack 6 fotos", "$11.990", "Reembolsado"],
  ["#NR-10077", "José Campos", "10K Santiago", "Foto individual", "$3.490", "Pagado"],
  ["#NR-10076", "Francisca Lara", "Media Maratón de Viña", "Pack 12 fotos", "$18.990", "Pagado"],
  ["#NR-10075", "Pablo Castillo", "10K Santiago", "Pack 6 fotos", "$11.990", "Pagado"],
  ["#NR-10074", "Verónica Fuentes", "Corrida Nocturna", "Foto individual", "$3.490", "Pendiente"],
  ["#NR-10073", "Matías Bravo", "Media Maratón de Viña", "Pack 6 fotos", "$11.990", "Pagado"],
  ["#NR-10072", "Constanza Soto", "10K Santiago", "Pack 12 fotos", "$18.990", "Pagado"],
  ["#NR-10071", "Nicolás Guerra", "Corrida Nocturna", "Foto individual", "$3.490", "Pagado"],
  ["#NR-10070", "Daniela Acuña", "Media Maratón de Viña", "Preventa", "$9.990", "Pagado"],
  ["#NR-10069", "Javiera Núñez", "10K Santiago", "Pack 6 fotos", "$11.990", "Pagado"],
  ["#NR-10068", "Sebastián Ruiz", "Corrida Nocturna", "Foto individual", "$3.490", "Pagado"],
  ["#NR-10067", "Natalia Flores", "Media Maratón de Viña", "Pack 12 fotos", "$18.990", "Pagado"],
  ["#NR-10066", "Rodrigo Pino", "10K Santiago", "Foto individual", "$3.490", "Pendiente"],
  ["#NR-10065", "Claudia Barría", "Corrida Nocturna", "Pack 6 fotos", "$11.990", "Pagado"],
];

export const clients = ["Isidora Muñoz", "Felipe Torres", "Antonia Vega", "Lucas Rojas", "María Paz Ríos", "Benjamín Araya", "Carolina Díaz", "José Campos", "Francisca Lara", "Pablo Castillo"].map((name, index) => ({ name, email: `${name.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/ /g, ".")}@correo.cl`, orders: (index % 4) + 1, total: `$${((index + 1) * 8490).toLocaleString("es-CL")}` }));
