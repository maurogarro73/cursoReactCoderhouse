const terrenos_marte = [
  {
    id: 1,
    name: 'Valles Marineris',
    descriptionLong: 'El sistema de cañones más grande del sistema solar, extendiéndose por más de 4,000 km.',
    descriptionShort: 'Cañones gigantes',
    category: 'Geológico',
    price: 500000,
    stock: 5,
    imgUrl: 'img/',
  },
  {
    id: 2,
    name: 'Olympus Mons',
    descriptionLong: 'El volcán más alto conocido en el sistema solar, con una altura de 22 km.',
    descriptionShort: 'Volcán alto',
    category: 'Montañoso',
    price: 800000,
    stock: 3,
    imgUrl: 'img/',
  },
  {
    id: 3,
    name: 'Planitia Hellas',
    descriptionLong: 'Un impacto masivo que creó una cuenca en el hemisferio sur, notable por su tamaño.',
    descriptionShort: 'Cuenca de impacto',
    category: 'Cráter',
    price: 450000,
    stock: 7,
    imgUrl: 'img/',
  },
  {
    id: 4,
    name: 'Polo Norte Marciano',
    descriptionLong: 'Una región cubierta de hielo de agua y dióxido de carbono, cambiante con las estaciones.',
    descriptionShort: 'Hielo estacional',
    category: 'Polar',
    price: 600000,
    stock: 4,
    imgUrl: 'img/',
  },
  {
    id: 5,
    name: 'Acidalia Planitia',
    descriptionLong: "Una vasta llanura en el hemisferio norte de Marte, famosa por su mención en 'El Marciano'.",
    descriptionShort: 'Llanura extensa',
    category: 'Plana',
    price: 300000,
    stock: 8,
    imgUrl: 'img/',
  },
  {
    id: 6,
    name: 'Vista Deimos',
    descriptionLong: 'Un terreno con vistas únicas al satélite Deimos.',
    descriptionShort: 'Vistas a Deimos',
    category: 'Vista',
    price: 350000,
    stock: 6,
    imgUrl: 'img/',
  },
  {
    id: 7,
    name: 'Pico Fobos',
    descriptionLong: 'Cercano al satélite Fobos, ideal para observación.',
    descriptionShort: 'Cerca de Fobos',
    category: 'Vista',
    price: 375000,
    stock: 5,
    imgUrl: 'img/',
  },
  {
    id: 8,
    name: 'Tharsis Tholus',
    descriptionLong: 'Un terreno en una región volcánica prominente.',
    descriptionShort: 'Región volcánica',
    category: 'Montañoso',
    price: 420000,
    stock: 4,
    imgUrl: 'img/',
  },
  {
    id: 9,
    name: 'Planitia Elysium',
    descriptionLong: 'Llanuras tranquilas, ideales para asentamientos.',
    descriptionShort: 'Llanuras pacíficas',
    category: 'Plana',
    price: 280000,
    stock: 10,
    imgUrl: 'img/',
  },
  {
    id: 10,
    name: 'Planitia Arcadia',
    descriptionLong: 'Conocida por sus patrones de hielo subterráneo.',
    descriptionShort: 'Hielo subterráneo',
    category: 'Plana',
    price: 320000,
    stock: 9,
    imgUrl: 'img/',
  },
  {
    id: 11,
    name: 'Vastitas Borealis',
    descriptionLong: 'Una extensa llanura en el norte de Marte.',
    descriptionShort: 'Extensa llanura norte',
    category: 'Plana',
    price: 300000,
    stock: 8,
    imgUrl: 'img/',
  },
  {
    id: 12,
    name: 'Planum Meridiani',
    descriptionLong: 'Un terreno con historia de exploración de rovers.',
    descriptionShort: 'Historia de rovers',
    category: 'Histórico',
    price: 450000,
    stock: 7,
    imgUrl: 'img/',
  },
  {
    id: 13,
    name: 'Cráter Gale',
    descriptionLong: 'Hogar del rover Curiosity, con geología variada.',
    descriptionShort: 'Hogar de Curiosity',
    category: 'Histórico',
    price: 475000,
    stock: 6,
    imgUrl: 'img/',
  },
  {
    id: 14,
    name: 'Planitia Utopia',
    descriptionLong: 'Lugar de aterrizaje de la misión Viking 2.',
    descriptionShort: 'Aterrizaje Viking 2',
    category: 'Histórico',
    price: 430000,
    stock: 5,
    imgUrl: 'img/',
  },
  {
    id: 15,
    name: 'Terra Sabaea',
    descriptionLong: 'Una región con variada topografía y geología.',
    descriptionShort: 'Topografía variada',
    category: 'Geológico',
    price: 400000,
    stock: 6,
    imgUrl: 'img/',
  },
  {
    id: 16,
    name: 'Aeolis Mons',
    descriptionLong: 'También conocido como Mount Sharp, de gran interés científico.',
    descriptionShort: 'Interés científico',
    category: 'Científico',
    price: 550000,
    stock: 4,
    imgUrl: 'img/',
  },
  {
    id: 17,
    name: 'Noctis Labyrinthus',
    descriptionLong: 'Un sistema laberíntico de valles y cañones.',
    descriptionShort: 'Valles laberínticos',
    category: 'Geológico',
    price: 600000,
    stock: 3,
    imgUrl: 'img/',
  },
  {
    id: 18,
    name: 'Arabia Terra',
    descriptionLong: 'Una fascinante región con historia geológica antigua.',
    descriptionShort: 'Historia geológica',
    category: 'Geológico',
    price: 350000,
    stock: 7,
    imgUrl: 'img/',
  },
  {
    id: 19,
    name: 'Isidis Planitia',
    descriptionLong: 'Una de las cuencas de impacto más grandes de Marte.',
    descriptionShort: 'Gran cuenca de impacto',
    category: 'Cráter',
    price: 480000,
    stock: 5,
    imgUrl: 'img/',
  },
  {
    id: 20,
    name: 'Zephyria Planum',
    descriptionLong: 'Región marcada por vientos fuertes y formaciones únicas.',
    descriptionShort: 'Vientos y formaciones',
    category: 'Geológico',
    price: 410000,
    stock: 6,
    imgUrl: 'img/',
  },
];
