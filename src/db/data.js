const MOCK_DATA = [
  {
    id: 1,
    name: 'Camiseta Algodón',
    img: 'url_de_imagen_camiseta.jpg',
    description: 'Camiseta de algodón suave en varios colores.',
    category: 'Ropa',
    price: 19.99,
    stock: 50,
  },
  {
    id: 2,
    name: 'Cafetera Eléctrica',
    img: 'url_de_imagen_cafetera.jpg',
    description: 'Cafetera eléctrica de alta capacidad con sistema de filtro.',
    category: 'Electrodomésticos',
    price: 79.99,
    stock: 30,
  },
  {
    id: 3,
    name: 'Libro de Cocina',
    img: 'url_de_imagen_libro.jpg',
    description: 'Libro de recetas de cocina internacional.',
    category: 'Libros',
    price: 24.99,
    stock: 100,
  },
  {
    id: 4,
    name: 'Smartphone 5G',
    img: 'url_de_imagen_smartphone.jpg',
    description: 'Smartphone de última generación con conexión 5G.',
    category: 'Electrónica',
    price: 499.99,
    stock: 20,
  },
  {
    id: 5,
    name: 'Bicicleta de Montaña',
    img: 'url_de_imagen_bicicleta.jpg',
    description: 'Bicicleta robusta para todo tipo de terrenos.',
    category: 'Deportes',
    price: 259.99,
    stock: 15,
  },
];

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 2000);
  });
};

export const filterCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA.filter((product) => product.category === category));
    }, 2000);
  });
};
