/**
 * Calendario 2027 de carreras de Chile.
 * Datos informativos sujetos a modificaciones de los organizadores.
 * "Por confirmar" indica que el dato aún no está definido.
 * La inclusión en el calendario no equivale a cobertura fotográfica confirmada.
 */
export type CalendarRace2027 = {
  date: string;
  name: string;
  city: string;
  distances: string;
  note?: string;
};

export const calendarRaces2027: CalendarRace2027[] = [
  {"date":"2027-01-09","name":"Pilolcura Trail","city":"Valdivia","distances":"3, 11, 21 y 30 km"},
  {"date":"2027-01-09","name":"Selva Costera Trail 10 Años","city":"San Juan de la Costa","distances":"2 a 50 km"},
  {"date":"2027-01-14","name":"Huilo Huilo Outdoor Experience","city":"Panguipulli","distances":"7, 15 y 30 km"},
  {"date":"2027-01-16","name":"Kutralkura Trail","city":"Vilcún","distances":"2 a 50 km"},
  {"date":"2027-01-16","name":"Pan de Azúcar Trail","city":"Chañaral","distances":"3, 10 y 21 km"},
  {"date":"2027-01-16","name":"Ruta del Cóndor","city":"Ancud","distances":"12 km"},
  {"date":"2027-01-17","name":"Media Maratón del Calle Calle","city":"Valdivia","distances":"5, 10 y 21 km"},
  {"date":"2027-01-17","name":"Barbie Run","city":"Santiago Centro","distances":"2 y 5 km"},
  {"date":"2027-01-23","name":"Trail Peumayén","city":"Río Bueno","distances":"2.5, 7, 12 y 25 km","note":"Por confirmar"},
  {"date":"2027-01-23","name":"Backyard Ultra Linares","city":"Linares","distances":"Distancia variable"},
  {"date":"2027-01-24","name":"21K Puerto Montt","city":"Puerto Montt","distances":"3, 10 y 21 km"},
  {"date":"2027-01-24","name":"Navarino Trail","city":"Cabo de Hornos","distances":"25 y 50 km"},
  {"date":"2027-01-30","name":"La Serena Trail Marathon","city":"La Serena","distances":"3 a 42 km"},
  {"date":"2027-02-06","name":"Futangue Challenge by ASICS","city":"Lago Ranco","distances":"2 a 42 km"},
  {"date":"2027-02-06","name":"Desafío Extremo Chiloé","city":"Ancud","distances":"10, 21 y 50 km"},
  {"date":"2027-02-07","name":"Night Run Energy","city":"Coquimbo","distances":"3 y 5 km"},
  {"date":"2027-02-07","name":"Trail Ojetivo Pangal","city":"Maullín","distances":"3, 8 y 21 km"},
  {"date":"2027-02-13","name":"Desafío Chiloé: La Ruta del Ermitaño","city":"Ancud","distances":"10, 15, 21 y 42 km"},
  {"date":"2027-02-13","name":"Guanaco Trail Running","city":"Timaukel","distances":"3, 15 y 35 km"},
  {"date":"2027-02-14","name":"Corrida Santa María del Mar","city":"Santo Domingo","distances":"1, 6 y 12 km"},
  {"date":"2027-02-14","name":"Media Maratón Ruta de Los Ulmos","city":"Los Muermos","distances":"1.5, 5, 10 y 21 km"},
  {"date":"2027-02-14","name":"Media Maratón Montaña Activa","city":"Teno","distances":"Por confirmar"},
  {"date":"2027-02-14","name":"New Balance Race Series","city":"Frutillar","distances":"5, 10 y 15 km","note":"Inscripciones"},
  {"date":"2027-02-21","name":"Maratón de Valdivia","city":"Valdivia","distances":"3, 10, 21 y 42 km"},
  {"date":"2027-02-21","name":"Trail Duhatao","city":"Ancud","distances":"13 km"},
  {"date":"2027-02-21","name":"Trail Running por los Miradores del Río La Manga","city":"Puerto Montt","distances":"3, 6 y 10 km"},
  {"date":"2027-02-27","name":"Puesco Trail","city":"Curarrehue","distances":"Por confirmar"},
  {"date":"2027-02-27","name":"Media Maratón por Tierras Mapuches","city":"Cholchol","distances":"2, 5, 10 y 21 km"},
  {"date":"2027-03-06","name":"Merrell Andes Mountain Sky Race","city":"Santiago, Lo Barnechea","distances":"2, 10, 18 y 36 km"},
  {"date":"2027-03-06","name":"Climbing Tour","city":"Por confirmar","distances":"Por confirmar"},
  {"date":"2027-03-07","name":"Medio Maratón de Concepción","city":"Concepción","distances":"5, 10 y 21 km"},
  {"date":"2027-03-07","name":"Corrida de la Mujer Osorno","city":"Osorno","distances":"4 km","note":"Por confirmar"},
  {"date":"2027-03-14","name":"Corrida de Peñalolén","city":"Santiago, Peñalolén","distances":"6, 10 y 15 km","note":"Actualizado"},
  {"date":"2027-03-14","name":"Corramos Juntas - Cáncer de Mamas","city":"Frutillar","distances":"5 y 10 km"},
  {"date":"2027-03-14","name":"Desafío Alto Concepción / Verano","city":"Concepción","distances":"10, 16 y 21 km","note":"Por confirmar"},
  {"date":"2027-03-21","name":"Maratón de Temuco","city":"Temuco","distances":"10, 21 y 42 km"},
  {"date":"2027-03-21","name":"New Balance Race Series","city":"Santiago","distances":"7.5 y 15 km","note":"Nuevo"},
  {"date":"2027-04-03","name":"Cochrane Patagonia Trail","city":"Cochrane","distances":"10, 21, 35 y 45 km"},
  {"date":"2027-04-03","name":"Yareta Ultratrail","city":"Ovalle","distances":"3 a 100 km"},
  {"date":"2027-04-03","name":"Columbia Trail Challenge Pucón","city":"Pucón","distances":"2 a 32 km"},
  {"date":"2027-04-04","name":"Itaú Medio Maratón de Viña del Mar","city":"Viña del Mar","distances":"5 y 21 km"},
  {"date":"2027-04-04","name":"STGO21K by ASICS","city":"Santiago, Ñuñoa","distances":"10 y 21 km"},
  {"date":"2027-04-10","name":"Trail Malalcahuello by Corralco","city":"Curacautín","distances":"8, 16 y 32 km"},
  {"date":"2027-04-11","name":"Run Frutillar","city":"Frutillar","distances":"5, 10 y 21 km"},
  {"date":"2027-04-11","name":"Desafío Trail Running","city":"Santiago, Providencia","distances":"5, 10 y 23 km"},
  {"date":"2027-04-11","name":"Media Maratón de Santa Cruz","city":"Lolol","distances":"10.5, 15.8 y 21 km"},
  {"date":"2027-04-18","name":"Media Maratón Reinaldo Martin","city":"Osorno","distances":"5, 10 y 21 km"},
  {"date":"2027-04-18","name":"Corrida Carabineros de Chile 100 Años","city":"Santiago, Providencia","distances":"5, 10 y 21 km"},
  {"date":"2027-04-18","name":"Running Sin Barreras","city":"Santiago","distances":"3, 5 y 10 km","note":"Por confirmar"},
  {"date":"2027-04-24","name":"Patagonia Running Festival","city":"Punta Arenas","distances":"5 a 50 km"},
  {"date":"2027-04-24","name":"Climbing Tour","city":"Por confirmar","distances":"Por confirmar"},
  {"date":"2027-04-25","name":"Control 30K by ASICS-Garmin","city":"Melipilla","distances":"5, 10, 21 y 30 km"},
  {"date":"2027-04-25","name":"New Balance Race Series","city":"Viña del Mar","distances":"10, 21 y 30 km","note":"Nuevo"},
  {"date":"2027-05-02","name":"Corramos Juntas - Cáncer de Mamas","city":"Santiago, Puente Alto","distances":"Por confirmar"},
  {"date":"2027-05-08","name":"Credelio Pet Run (mascotas)","city":"Santiago","distances":"Por confirmar","note":"Por confirmar"},
  {"date":"2027-05-16","name":"Maratón de Santiago","city":"Santiago Centro","distances":"10, 21 y 42 km"},
  {"date":"2027-05-23","name":"Mapocho Río Arriba","city":"Santiago, Providencia","distances":"Por confirmar","note":"Por confirmar"},
  {"date":"2027-05-29","name":"Santiago Trail Race","city":"Santiago, Las Condes","distances":"3, 12, 21 y 30 km"},
  {"date":"2027-06-12","name":"Climbing Tour","city":"Por confirmar","distances":"Por confirmar"},
  {"date":"2027-06-13","name":"Desafío Trail Running - Pichidangui","city":"Los Vilos","distances":"5, 13 y 25 km"},
  {"date":"2027-06-27","name":"Volcano Marathon","city":"Rapa Nui","distances":"21 y 42 km"},
  {"date":"2027-06-27","name":"New Balance Race Series","city":"La Serena","distances":"5, 10 y 21 km","note":"Nuevo"},
  {"date":"2027-08-15","name":"New Balance Race Series","city":"Concepción","distances":"7.5 y 15 km","note":"Nuevo"},
  {"date":"2027-08-29","name":"Itaú Medio Maratón de Santiago (mujeres)","city":"Santiago","distances":"7 y 21 km"},
  {"date":"2027-08-29","name":"STGO21K by ASICS","city":"Santiago","distances":"10 y 21 km"},
  {"date":"2027-09-04","name":"Patagonian International Marathon","city":"Torres del Paine","distances":"10 a 42 km"},
  {"date":"2027-09-05","name":"Corrida Glorias del Ejército","city":"Santiago, Las Condes","distances":"Por confirmar"},
  {"date":"2027-09-25","name":"Ultra Paine","city":"Torres del Paine","distances":"14, 21, 35 y 50 km"},
  {"date":"2027-09-25","name":"Dog Race","city":"Santiago","distances":"Por confirmar","note":"Por confirmar"},
  {"date":"2027-10-02","name":"Climbing Tour","city":"Por confirmar","distances":"Por confirmar"},
  {"date":"2027-10-10","name":"Trail by Canteras","city":"Angol","distances":"Por confirmar","note":"Por confirmar"},
  {"date":"2027-10-16","name":"Laguna Trail Colchagua","city":"San Fernando","distances":"5, 10, 15 y 21 km"},
  {"date":"2027-10-17","name":"Corramos Juntas - Cáncer de Mamas","city":"Santiago, La Reina","distances":"Por confirmar"},
  {"date":"2027-11-13","name":"Desafío Trail Running - Santa Martina Sunset","city":"Santiago, Lo Barnechea","distances":"5, 13 y 25 km"},
  {"date":"2027-11-14","name":"Running Festival","city":"Santiago","distances":"Por confirmar","note":"Por confirmar"},
  {"date":"2027-11-14","name":"New Balance Race Series","city":"Temuco","distances":"7.5, 15 y 25 km","note":"Nuevo"},
  {"date":"2027-11-20","name":"Climbing Tour","city":"Por confirmar","distances":"Por confirmar"},
  {"date":"2027-12-19","name":"Desafío Trail Running","city":"Santiago, Providencia","distances":"5, 10 y 23 km"},
];

export const CALENDAR_2027_MONTHS = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"] as const;

