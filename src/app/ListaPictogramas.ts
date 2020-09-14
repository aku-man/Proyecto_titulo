import { Aux } from './models/auxiliar.model';
import { Pictograma } from './models/pictograma.model';

/* export const ListaPictogramas: Aux[] = [{
    id: 1,
    pictogramas: [{
        nombre: 'Analisis',
        imagen: 'imagen1.jpg',
        idCat: 1
      },
      {
        idPicto: 2,
        nombre: 'Analisis de heces',
        imagen: 'imagen2.jpg',
        idCat: 1
      },
      {
        idPicto: 3,
        nombre: 'Analisis de orina',
        imagen: 'imagen3.jpg',
        idCat: 1
      },
      {
        idPicto: 4,
        nombre: 'Auscultar',
        imagen: 'imagen4.jpg',
        idCat: 1
      },
      {
        idPicto: 5,
        nombre: 'Citología',
        imagen: 'imagen5.jpg',
        idCat: 1
      },
      {
        idPicto: 6,
        nombre: 'Colonoscopía',
        imagen: 'imagen6.jpg',
        idCat: 1
      },
      {
        idPicto: 7,
        nombre: 'Curar',
        imagen: 'imagen7.jpg',
        idCat: 1
      },
      {
        idPicto: 8,
        nombre: 'Ecografía',
        imagen: 'imagen8.jpg',
        idCat: 1
      },
      {
        idPicto: 9,
        nombre: 'Electro',
        imagen: 'imagen9.jpg',
        idCat: 1
      },
      {
        idPicto: 10,
        nombre: 'Electrocardiograma',
        imagen: 'imagen10.jpg',
        idCat: 1
      },
      {
        idPicto: 11,
        nombre: 'Gastroscopía',
        imagen: 'imagen11.jpg',
        idCat: 1
      },
      {
        idPicto: 12,
        nombre: 'Mirar garganta',
        imagen: 'imagen12.jpg',
        idCat: 1
      },
      {
        idPicto: 13,
        nombre: 'Mirar oidos',
        imagen: 'imagen13.jpg',
        idCat: 1
      },
      {
        idPicto: 14,
        nombre: 'Mirar vista',
        imagen: 'imagen14.jpg',
        idCat: 1
      },
      {
        idPicto: 15,
        nombre: 'Operar',
        imagen: 'imagen15.jpg',
        idCat: 1
      },
      {
        idPicto: 16,
        nombre: 'Pinchar',
        imagen: 'imagen16.jpg',
        idCat: 1
      },
      {
        idPicto: 17,
        nombre: 'Prueba de alergia',
        imagen: 'imagen17.jpg',
        idCat: 1
      },
      {
        idPicto: 18,
        nombre: 'Prueba de glucosa',
        imagen: 'imagen18.jpg',
        idCat: 1
      },
      {
        idPicto: 19,
        nombre: 'Puntos',
        imagen: 'imagen19.jpg',
        idCat: 1
      },
      {
        idPicto: 20,
        nombre: 'Radiografía',
        imagen: 'imagen20.jpg',
        idCat: 1
      },
      {
        idPicto: 21,
        nombre: 'Resonancia',
        imagen: 'imagen21.jpg',
        idCat: 1
      },
      {
        idPicto: 22,
        nombre: 'Saturación de oxígeno',
        imagen: 'imagen22.jpg',
        idCat: 1
      },
      {
        idPicto: 23,
        nombre: 'Sonda',
        imagen: 'imagen23.jpg',
        idCat: 1
      },
      {
        idPicto: 24,
        nombre: 'Sonda nasogástrica',
        imagen: 'imagen24.jpg',
        idCat: 1
      },
      {
        idPicto: 25,
        nombre: 'Tacto rectal',
        imagen: 'imagen25.jpg',
        idCat: 1
      },
      {
        idPicto: 26,
        nombre: 'Termómetro',
        imagen: 'imagen26.jpg',
        idCat: 1
      },
      {
        idPicto: 27,
        nombre: 'Tomar la tensión',
        imagen: 'imagen27.jpg',
        idCat: 1
      },
      {
        idPicto: 28,
        nombre: 'Tomar pulso',
        imagen: 'imagen28.jpg',
        idCat: 1
      },
      {
        idPicto: 29,
        nombre: 'Vía',
        imagen: 'imagen29.jpg',
        idCat: 1
      }
    ]
  },
  {
    id: 2,
    pictogramas: [{
        idPicto: 1,
        nombre: 'Calor',
        imagen: 'imagen1.jpg',
        idCat: 2
      },
      {
        idPicto: 2,
        nombre: 'Corte',
        imagen: 'imagen2.jpg',
        idCat: 2
      },
      {
        idPicto: 3,
        nombre: 'Diarrea',
        imagen: 'imagen3.jpg',
        idCat: 2
      },
      {
        idPicto: 4,
        nombre: 'Dolor de brazo',
        imagen: 'imagen4.jpg',
        idCat: 2
      },
      {
        idPicto: 5,
        nombre: 'Dolor de cabeza',
        imagen: 'imagen5.jpg',
        idCat: 2
      },
      {
        idPicto: 6,
        nombre: 'Dolor de espalda',
        imagen: 'imagen6.jpg',
        idCat: 2
      },
      {
        idPicto: 7,
        nombre: 'Dolor de estomago',
        imagen: 'imagen7.jpg',
        idCat: 2
      },
      {
        idPicto: 8,
        nombre: 'Dolor de garganta',
        imagen: 'imagen8.jpg',
        idCat: 2
      },
      {
        idPicto: 9,
        nombre: 'Dolor de muelas',
        imagen: 'imagen9.jpg',
        idCat: 2
      },
      {
        idPicto: 10,
        nombre: 'Dolor de oidos',
        imagen: 'imagen10.jpg',
        idCat: 2
      },
      {
        idPicto: 11,
        nombre: 'Dolor de ovarios',
        imagen: 'imagen11.jpg',
        idCat: 2
      },
      {
        idPicto: 12,
        nombre: 'Escozor al orinar',
        imagen: 'imagen12.jpg',
        idCat: 2
      },
      {
        idPicto: 13,
        nombre: 'Escozor al orinar',
        imagen: 'imagen13.jpg',
        idCat: 2
      },
      {
        idPicto: 14,
        nombre: 'Estornudo',
        imagen: 'imagen14.jpg',
        idCat: 2
      },
      {
        idPicto: 15,
        nombre: 'Estreñimiento',
        imagen: 'imagen15.jpg',
        idCat: 2
      },
      {
        idPicto: 16,
        nombre: 'Fiebre',
        imagen: 'imagen16.jpg',
        idCat: 2
      },
      {
        idPicto: 17,
        nombre: 'Frio',
        imagen: 'imagen17.jpg',
        idCat: 2
      },
      {
        idPicto: 18,
        nombre: 'Gases',
        imagen: 'imagen18.jpg',
        idCat: 2
      },
      {
        idPicto: 19,
        nombre: 'Insomnio',
        imagen: 'imagen19.jpg',
        idCat: 2
      },
      {
        idPicto: 20,
        nombre: 'Mareado',
        imagen: 'imagen20.jpg',
        idCat: 2
      },
      {
        idPicto: 21,
        nombre: 'Mocos',
        imagen: 'imagen21.jpg',
        idCat: 2
      },
      {
        idPicto: 22,
        nombre: 'Nervioso',
        imagen: 'imagen22.jpg',
        idCat: 2
      },
      {
        idPicto: 23,
        nombre: 'Picadura',
        imagen: 'imagen23.jpg',
        idCat: 2
      },
      {
        idPicto: 24,
        nombre: 'Picor',
        imagen: 'imagen24.jpg',
        idCat: 2
      },
      {
        idPicto: 25,
        nombre: 'Picor genital',
        imagen: 'imagen25.jpg',
        idCat: 2
      },
      {
        idPicto: 26,
        nombre: 'Picor genital',
        imagen: 'imagen26.jpg',
        idCat: 2
      },
      {
        idPicto: 27,
        nombre: 'Quemadura',
        imagen: 'imagen27.jpg',
        idCat: 2
      },
      {
        idPicto: 28,
        nombre: 'Quemadura solar',
        imagen: 'imagen28.jpg',
        idCat: 2
      },
      {
        idPicto: 29,
        nombre: 'Sudores',
        imagen: 'imagen29.jpg',
        idCat: 2
      },
      {
        idPicto: 30,
        nombre: 'Sueño',
        imagen: 'imagen30.jpg',
        idCat: 2
      },
      {
        idPicto: 31,
        nombre: 'Tos',
        imagen: 'imagen31.jpg',
        idCat: 2
      },
      {
        idPicto: 32,
        nombre: 'Vómitos',
        imagen: 'imagen32.jpg',
        idCat: 2
      }
    ]
  },
  {
    id: 3,
    pictogramas: [{
        idPicto: 1,
        nombre: 'Acompañamiento',
        imagen: 'imagen1.jpg',
        idCat: 3
      },
      {
        idPicto: 2,
        nombre: 'Ambulancia',
        imagen: 'imagen2.jpg',
        idCat: 3
      },
      {
        idPicto: 3,
        nombre: 'Centro de salud',
        imagen: 'imagen3.jpg',
        idCat: 3
      },
      {
        idPicto: 4,
        nombre: 'Cita previa',
        imagen: 'imagen4.jpg',
        idCat: 3
      },
      {
        idPicto: 5,
        nombre: 'Curar',
        imagen: 'imagen5.jpg',
        idCat: 3
      },
      {
        idPicto: 6,
        nombre: 'Emergencias',
        imagen: 'imagen6.jpg',
        idCat: 3
      },
      {
        idPicto: 7,
        nombre: 'Farmacia',
        imagen: 'imagen7.jpg',
        idCat: 3
      },
      {
        idPicto: 8,
        nombre: 'Hospital',
        imagen: 'imagen8.jpg',
        idCat: 3
      },
      {
        idPicto: 9,
        nombre: 'Informe Médico',
        imagen: 'imagen9.jpg',
        idCat: 3
      },
      {
        idPicto: 10,
        nombre: 'Medicación',
        imagen: 'imagen10.jpg',
        idCat: 3
      },
      {
        idPicto: 11,
        nombre: 'Pastillero',
        imagen: 'imagen11.jpg',
        idCat: 3
      },
      {
        idPicto: 12,
        nombre: 'Receta',
        imagen: 'imagen12.jpg',
        idCat: 3
      },
      {
        idPicto: 13,
        nombre: 'Tarjeta sanitaria',
        imagen: 'imagen13.jpg',
        idCat: 3
      },
      {
        idPicto: 14,
        nombre: 'Termómetro',
        imagen: 'imagen14.jpg',
        idCat: 3
      },
      {
        idPicto: 15,
        nombre: 'Tirita',
        imagen: 'imagen15.jpg',
        idCat: 3
      },
      {
        idPicto: 16,
        nombre: 'Venda',
        imagen: 'imagen16.jpg',
        idCat: 3
      }
    ]
  },
  {
    id: 4,
    pictogramas: [{
        idPicto: 1,
        nombre: 'Alergóloga',
        imagen: 'imagen1.jpg',
        idCat: 4
      },
      {
        idPicto: 2,
        nombre: 'Anestesista',
        imagen: 'imagen2.jpg',
        idCat: 4
      },
      {
        idPicto: 3,
        nombre: 'Cardiólogo',
        imagen: 'imagen3.jpg',
        idCat: 4
      },
      {
        idPicto: 4,
        nombre: 'Cirujana',
        imagen: 'imagen4.jpg',
        idCat: 4
      },
      {
        idPicto: 5,
        nombre: 'Dentista',
        imagen: 'imagen5.jpg',
        idCat: 4
      },
      {
        idPicto: 6,
        nombre: 'Dermatóloga',
        imagen: 'imagen6.jpg',
        idCat: 4
      },
      {
        idPicto: 7,
        nombre: 'Digestivo',
        imagen: 'imagen7.jpg',
        idCat: 4
      },
      {
        idPicto: 8,
        nombre: 'Endocrino',
        imagen: 'imagen8.jpg',
        idCat: 4
      },
      {
        idPicto: 9,
        nombre: 'Enfermera',
        imagen: 'imagen9.jpg',
        idCat: 4
      },
      {
        idPicto: 10,
        nombre: 'Fisioterapeuta',
        imagen: 'imagen10.jpg',
        idCat: 4
      },
      {
        idPicto: 11,
        nombre: 'Ginecóloga',
        imagen: 'imagen11.jpg',
        idCat: 4
      },
      {
        idPicto: 12,
        nombre: 'Médico',
        imagen: 'imagen12.jpg',
        idCat: 4
      },
      {
        idPicto: 13,
        nombre: 'Nefrólogo',
        imagen: 'imagen13.jpg',
        idCat: 4
      },
      {
        idPicto: 14,
        nombre: 'Neumóloga',
        imagen: 'imagen14.jpg',
        idCat: 4
      },
      {
        idPicto: 15,
        nombre: 'Neuróloga',
        imagen: 'imagen15.jpg',
        idCat: 4
      },
      {
        idPicto: 16,
        nombre: 'Oftalmóloga',
        imagen: 'imagen16.jpg',
        idCat: 4
      },
      {
        idPicto: 17,
        nombre: 'Oncóloga',
        imagen: 'imagen17.jpg',
        idCat: 4
      },
      {
        idPicto: 18,
        nombre: 'Otorrino',
        imagen: 'imagen18.jpg',
        idCat: 4
      },
      {
        idPicto: 19,
        nombre: 'Podólogo',
        imagen: 'imagen19.jpg',
        idCat: 4
      },
      {
        idPicto: 20,
        nombre: 'Psicóloga',
        imagen: 'imagen20.jpg',
        idCat: 4
      },
      {
        idPicto: 21,
        nombre: 'Psiquiatra',
        imagen: 'imagen21.jpg',
        idCat: 4
      },
      {
        idPicto: 22,
        nombre: 'Rehabilitador',
        imagen: 'imagen22.jpg',
        idCat: 4
      },
      {
        idPicto: 23,
        nombre: 'Traumatóloga',
        imagen: 'imagen23.jpg',
        idCat: 4
      },
      {
        idPicto: 24,
        nombre: 'Urólogo',
        imagen: 'imagen24.jpg',
        idCat: 4
      }
    ]
  },
  {
    id: 5,
    pictogramas: [{
        idPicto: 1,
        nombre: 'Alergias',
        imagen: 'imagen1.jpg',
        idCat: 5
      },
      {
        idPicto: 2,
        nombre: 'Anginas',
        imagen: 'imagen2.jpg',
        idCat: 5
      },
      {
        idPicto: 3,
        nombre: 'Asma',
        imagen: 'imagen3.jpg',
        idCat: 5
      },
      {
        idPicto: 4,
        nombre: 'Caries',
        imagen: 'imagen4.jpg',
        idCat: 5
      },
      {
        idPicto: 5,
        nombre: 'Conjuntivitis',
        imagen: 'imagen5.jpg',
        idCat: 5
      },
      {
        idPicto: 6,
        nombre: 'Diabetes',
        imagen: 'imagen6.jpg',
        idCat: 5
      },
      {
        idPicto: 7,
        nombre: 'Esguince',
        imagen: 'imagen7.jpg',
        idCat: 5
      },
      {
        idPicto: 8,
        nombre: 'Fractura',
        imagen: 'imagen8.jpg',
        idCat: 5
      },
      {
        idPicto: 9,
        nombre: 'Gastritis',
        imagen: 'imagen9.jpg',
        idCat: 5
      },
      {
        idPicto: 10,
        nombre: 'Gripe',
        imagen: 'imagen10.jpg',
        idCat: 5
      },
      {
        idPicto: 11,
        nombre: 'Hepatitis',
        imagen: 'imagen11.jpg',
        idCat: 5
      },
      {
        idPicto: 12,
        nombre: 'Hipertensión',
        imagen: 'imagen12.jpg',
        idCat: 5
      },
      {
        idPicto: 13,
        nombre: 'Hongos',
        imagen: 'imagen13.jpg',
        idCat: 5
      },
      {
        idPicto: 14,
        nombre: 'Infección urinaria',
        imagen: 'imagen14.jpg',
        idCat: 5
      },
      {
        idPicto: 15,
        nombre: 'Lumbalgia',
        imagen: 'imagen15.jpg',
        idCat: 5
      },
      {
        idPicto: 16,
        nombre: 'Otitis',
        imagen: 'imagen16.jpg',
        idCat: 5
      }
    ]
  },
  {
    id: 6,
    pictogramas: [{
        idPicto: 1,
        nombre: 'Audifono',
        imagen: 'imagen1.jpg',
        idCat: 6
      },
      {
        idPicto: 2,
        nombre: 'Cabestrillo',
        imagen: 'imagen2.jpg',
        idCat: 6
      },
      {
        idPicto: 3,
        nombre: 'Calor local',
        imagen: 'imagen3.jpg',
        idCat: 6
      },
      {
        idPicto: 4,
        nombre: 'Colirio',
        imagen: 'imagen4.jpg',
        idCat: 6
      },
      {
        idPicto: 5,
        nombre: 'Dieta',
        imagen: 'imagen5.jpg',
        idCat: 6
      },
      {
        idPicto: 6,
        nombre: 'Escayola',
        imagen: 'imagen6.jpg',
        idCat: 6
      },
      {
        idPicto: 7,
        nombre: 'Frio local',
        imagen: 'imagen7.jpg',
        idCat: 6
      },
      {
        idPicto: 8,
        nombre: 'Gafas',
        imagen: 'imagen8.jpg',
        idCat: 6
      },
      {
        idPicto: 9,
        nombre: 'Gotas',
        imagen: 'imagen9.jpg',
        idCat: 6
      },
      {
        idPicto: 10,
        nombre: 'Gotas oido',
        imagen: 'imagen10.jpg',
        idCat: 6
      },
      {
        idPicto: 11,
        nombre: 'Hacer gargaras',
        imagen: 'imagen11.jpg',
        idCat: 6
      },
      {
        idPicto: 12,
        nombre: 'Inhalador',
        imagen: 'imagen12.jpg',
        idCat: 6
      },
      {
        idPicto: 13,
        nombre: 'Insulina',
        imagen: 'imagen13.jpg',
        idCat: 6
      },
      {
        idPicto: 14,
        nombre: 'Inyección',
        imagen: 'imagen14.jpg',
        idCat: 6
      },
      {
        idPicto: 15,
        nombre: 'Jarabe',
        imagen: 'imagen15.jpg',
        idCat: 6
      },
      {
        idPicto: 16,
        nombre: 'Maquina CPAP',
        imagen: 'imagen16.jpg',
        idCat: 6
      },
      {
        idPicto: 17,
        nombre: 'Medias compresión',
        imagen: 'imagen17.jpg',
        idCat: 6
      },
      {
        idPicto: 18,
        nombre: 'Muñequera',
        imagen: 'imagen18.jpg',
        idCat: 6
      },
      {
        idPicto: 19,
        nombre: 'Oxígeno',
        imagen: 'imagen19.jpg',
        idCat: 6
      },
      {
        idPicto: 20,
        nombre: 'Parches',
        imagen: 'imagen20.jpg',
        idCat: 6
      },
      {
        idPicto: 21,
        nombre: 'Pastillas',
        imagen: 'imagen21.jpg',
        idCat: 6
      },
      {
        idPicto: 22,
        nombre: 'Pies en alto',
        imagen: 'imagen22.jpg',
        idCat: 6
      },
      {
        idPicto: 23,
        nombre: 'Pomada',
        imagen: 'imagen23.jpg',
        idCat: 6
      },
      {
        idPicto: 24,
        nombre: 'Reposo',
        imagen: 'imagen24.jpg',
        idCat: 6
      },
      {
        idPicto: 25,
        nombre: 'Sobres',
        imagen: 'imagen25.jpg',
        idCat: 6
      },
      {
        idPicto: 26,
        nombre: 'Spray nasal',
        imagen: 'imagen26.jpg',
        idCat: 6
      },
      {
        idPicto: 27,
        nombre: 'Supositorio',
        imagen: 'imagen27.jpg',
        idCat: 6
      },
      {
        idPicto: 28,
        nombre: 'Tapones',
        imagen: 'imagen28.jpg',
        idCat: 6
      },
      {
        idPicto: 29,
        nombre: 'Tobillera',
        imagen: 'imagen29.jpg',
        idCat: 6
      }
    ]
  },
  {
    id: 7,
    pictogramas: [{
        idPicto: 1,
        nombre: 'Bata',
        imagen: 'imagen1.jpg',
        idCat: 7
      },
      {
        idPicto: 2,
        nombre: 'DNI',
        imagen: 'imagen2.jpg',
        idCat: 7
      },
      {
        idPicto: 3,
        nombre: 'Informe médico',
        imagen: 'imagen3.jpg',
        idCat: 7
      },
      {
        idPicto: 4,
        nombre: 'Objetos personales',
        imagen: 'imagen4.jpg',
        idCat: 7
      },
      {
        idPicto: 5,
        nombre: 'Ropa interior',
        imagen: 'imagen5.jpg',
        idCat: 7
      },
      {
        idPicto: 6,
        nombre: 'Tarifa sanitaria',
        imagen: 'imagen6.jpg',
        idCat: 7
      },
      {
        idPicto: 7,
        nombre: 'Utiles de aseo',
        imagen: 'imagen7.jpg',
        idCat: 7
      },
      {
        idPicto: 8,
        nombre: 'Zapatillas',
        imagen: 'imagen8.jpg',
        idCat: 7
      }
    ]
  },
  {
    id: 8,
    pictogramas: [{
        idPicto: 1,
        nombre: 'Amigos',
        imagen: 'imagen1.jpg',
        idCat: 8
      },
      {
        idPicto: 2,
        nombre: 'Auxiliar de enfermera',
        imagen: 'imagen2.jpg',
        idCat: 8
      },
      {
        idPicto: 3,
        nombre: 'Celador',
        imagen: 'imagen3.jpg',
        idCat: 8
      },
      {
        idPicto: 4,
        nombre: 'Centro',
        imagen: 'imagen4.jpg',
        idCat: 8
      },
      {
        idPicto: 5,
        nombre: 'Enfermera',
        imagen: 'imagen5.jpg',
        idCat: 8
      },
      {
        idPicto: 6,
        nombre: 'Familia',
        imagen: 'imagen6.jpg',
        idCat: 8
      },
      {
        idPicto: 7,
        nombre: 'Médico',
        imagen: 'imagen7.jpg',
        idCat: 8
      },
      {
        idPicto: 8,
        nombre: 'Religioso',
        imagen: 'imagen8.jpg',
        idCat: 8
      }
    ]
  },
  {
    id: 9,
    pictogramas: [{
        idPicto: 1,
        nombre: 'Acompañada',
        imagen: 'imagen1.jpg',
        idCat: 9
      },
      {
        idPicto: 2,
        nombre: 'Apagar la televisión',
        imagen: 'imagen2.jpg',
        idCat: 9
      },
      {
        idPicto: 3,
        nombre: 'Cambiar de canal',
        imagen: 'imagen3.jpg',
        idCat: 9
      },
      {
        idPicto: 4,
        nombre: 'Cargar el móvil',
        imagen: 'imagen4.jpg',
        idCat: 9
      },
      {
        idPicto: 5,
        nombre: 'Dormir',
        imagen: 'imagen5.jpg',
        idCat: 9
      },
      {
        idPicto: 6,
        nombre: 'Escuchar la radio',
        imagen: 'imagen6.jpg',
        idCat: 9
      },
      {
        idPicto: 7,
        nombre: 'Estar solo',
        imagen: 'imagen7.jpg',
        idCat: 9
      },
      {
        idPicto: 8,
        nombre: 'Hacer pasatiempos',
        imagen: 'imagen8.jpg',
        idCat: 9
      },
      {
        idPicto: 9,
        nombre: 'Leer',
        imagen: 'imagen9.jpg',
        idCat: 9
      },
      {
        idPicto: 10,
        nombre: 'Pasear',
        imagen: 'imagen10.jpg',
        idCat: 9
      },
      {
        idPicto: 11,
        nombre: 'Pintar',
        imagen: 'imagen11.jpg',
        idCat: 9
      },
      {
        idPicto: 12,
        nombre: 'Usar el móvil',
        imagen: 'imagen12.jpg',
        idCat: 9
      },
      {
        idPicto: 13,
        nombre: 'Ver la prensa',
        imagen: 'imagen13.jpg',
        idCat: 9
      },
      {
        idPicto: 14,
        nombre: 'Ver la televisión',
        imagen: 'imagen14.jpg',
        idCat: 9
      }
    ]
  },
  {
    id: 10,
    pictogramas: [{
        idPicto: 1,
        nombre: 'Afeitado',
        imagen: 'imagen1.jpg',
        idCat: 10
      },
      {
        idPicto: 2,
        nombre: 'Avisar',
        imagen: 'imagen2.jpg',
        idCat: 10
      },
      {
        idPicto: 3,
        nombre: 'Baño',
        imagen: 'imagen3.jpg',
        idCat: 10
      },
      {
        idPicto: 4,
        nombre: 'Beber agua',
        imagen: 'imagen4.jpg',
        idCat: 10
      },
      {
        idPicto: 5,
        nombre: 'Cama',
        imagen: 'imagen5.jpg',
        idCat: 10
      },
      {
        idPicto: 6,
        nombre: 'Cambio postural',
        imagen: 'imagen6.jpg',
        idCat: 10
      },
      {
        idPicto: 7,
        nombre: 'Compresa',
        imagen: 'imagen7.jpg',
        idCat: 10
      },
      {
        idPicto: 8,
        nombre: 'Cortar uñas',
        imagen: 'imagen8.jpg',
        idCat: 10
      },
      {
        idPicto: 9,
        nombre: 'Cuña',
        imagen: 'imagen9.jpg',
        idCat: 10
      },
      {
        idPicto: 10,
        nombre: 'Ducha',
        imagen: 'imagen10.jpg',
        idCat: 10
      },
      {
        idPicto: 11,
        nombre: 'Enjuagar boca',
        imagen: 'imagen11.jpg',
        idCat: 10
      },
      {
        idPicto: 12,
        nombre: 'Escupir',
        imagen: 'imagen12.jpg',
        idCat: 10
      },
      {
        idPicto: 13,
        nombre: 'Estar recto',
        imagen: 'imagen13.jpg',
        idCat: 10
      },
      {
        idPicto: 14,
        nombre: 'Lavar la cara',
        imagen: 'imagen14.jpg',
        idCat: 10
      },
      {
        idPicto: 15,
        nombre: 'Lavar los dientes',
        imagen: 'imagen15.jpg',
        idCat: 10
      },
      {
        idPicto: 16,
        nombre: 'Lavarse las manos',
        imagen: 'imagen16.jpg',
        idCat: 10
      },
      {
        idPicto: 17,
        nombre: 'Pañal',
        imagen: 'imagen17.jpg',
        idCat: 10
      },
      {
        idPicto: 18,
        nombre: 'Peinarse',
        imagen: 'imagen18.jpg',
        idCat: 10
      },
      {
        idPicto: 19,
        nombre: 'Sillón',
        imagen: 'imagen19.jpg',
        idCat: 10
      },
      {
        idPicto: 20,
        nombre: 'Sonarse la nariz',
        imagen: 'imagen20.jpg',
        idCat: 10
      },
      {
        idPicto: 21,
        nombre: 'Subir la cabeza',
        imagen: 'imagen21.jpg',
        idCat: 10
      },
      {
        idPicto: 22,
        nombre: 'Subir los pies',
        imagen: 'imagen22.jpg',
        idCat: 10
      },
      {
        idPicto: 23,
        nombre: 'Tampón',
        imagen: 'imagen23.jpg',
        idCat: 10
      },
      {
        idPicto: 24,
        nombre: 'Vomitar',
        imagen: 'imagen24.jpg',
        idCat: 10
      }
    ]
  },
  {
    id: 11,
    pictogramas: [{
        idPicto: 1,
        nombre: 'Admisión',
        imagen: 'imagen1.jpg',
        idCat: 11
      },
      {
        idPicto: 2,
        nombre: 'Casa',
        imagen: 'imagen2.jpg',
        idCat: 11
      },
      {
        idPicto: 3,
        nombre: 'Habitación de hospital',
        imagen: 'imagen3.jpg',
        idCat: 11
      },
      {
        idPicto: 4,
        nombre: 'Pruebas',
        imagen: 'imagen4.jpg',
        idCat: 11
      },
      {
        idPicto: 5,
        nombre: 'Pulsera hospitalaria',
        imagen: 'imagen5.jpg',
        idCat: 11
      },
      {
        idPicto: 6,
        nombre: 'Sala de espera',
        imagen: 'imagen6.jpg',
        idCat: 11
      },
      {
        idPicto: 7,
        nombre: 'Tarifa sanitaria',
        imagen: 'imagen7.jpg',
        idCat: 11
      },
      {
        idPicto: 8,
        nombre: 'Tratamiento',
        imagen: 'imagen8.jpg',
        idCat: 11
      }
    ]
  }
];
 */