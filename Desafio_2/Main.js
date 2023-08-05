import Product from "./class/Product.js";
import ProductManager from "./class/ProductManager.js";

const pManager = new ProductManager();

const productoNuevo1 = new Product(
  "New Style",
  "Vodka",
  900,
  "https://res.cloudinary.com/dxf8ebmi7/image/upload/v1679363369/vodkanewstyle_m9ldmn.webp",
  "ALC01",
  5
);
const productoNuevo2 = new Product(
  "Spped",
  "Bebida energizante",
  400,
  "https://res.cloudinary.com/dxf8ebmi7/image/upload/v1679363369/speed_hyctgz.jpg",
  "LAT01",
  33
);
const productoNuevo3 = new Product(
  "Queso Cremoso La Paulina",
  "500g de queso cremoso marca La Paulina",
  1000,
  "https://res.cloudinary.com/dxf8ebmi7/image/upload/v1679363369/quesocremoso_vwdrco.webp",
  "LAC01",
  27
);
const productoNuevo4 = new Product(
  "Queso cremoso La Paulina",
  "Bolsa de queso cremoso Marca La Paulina X 300g",
  800,
  "https://res.cloudinary.com/dxf8ebmi7/image/upload/v1679363369/ralladosancor_erwe3r.webp",
  "LAC02",
  20
);

pManager.addProduct(productoNuevo1);
/* pManager.addProduct(productoNuevo2); */
/* pManager.addProduct(productoNuevo3); */
/*  pManager.addProduct(productoNuevo4);   */

// obtener todos los productos
/* const allProducts = pManager.getProducts();
console.log("Todos los productos:", allProducts); */

/* // buscar producto por id
const productIdToFind = 1; // Reemplaza con el ID del producto que quieras buscar
const foundProduct = pManager.getProductById(productIdToFind);
console.log("Producto encontrado:", foundProduct);*/

/* // actualizar prodcuto
const productIdToUpdate = 2; // Reemplaza con el ID del producto que quieras actualizar
const updatedFields = {
  title: "Avengers",
  price: 11.99,
  stock: 10,
};
const updatedProduct = pManager.updateProduct(productIdToUpdate, updatedFields);
console.log("Producto actualizado:", updatedProduct); */

/* // Eliminar producto
const productIdToDelete = 1; // Reemplaza con el ID del producto que quieras eliminar
const remainingProducts = pManager.deleteProduct(productIdToDelete);
console.log("Productos restantes:", remainingProducts); */
