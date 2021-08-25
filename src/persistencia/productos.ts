interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}
let elementos = [
  {
    title: 'mochila',
    price: 20,
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Backpack-256.png',
    id: 1,
  },
];

class Productos {
  // Metodo para leer mis productos
  leer(): Product[] {
    try {
      return elementos;
    } catch (error) {
      console.log('No hay productos en el listado');
      return [];
    }
  }

  // Metodo para agregar productos
  guardar(
    title: string,
    price: number,
    thumbnail: string
  ): Product | undefined {
    try {
      if (typeof title !== 'string')
        throw new Error('Titulo tiene que ser string');
      if (isNaN(price)) throw new Error('Price tiene que ser un nro');
      if (typeof thumbnail !== 'string')
        throw new Error('Thumbnail tiene que ser string de url');

      const elemento = {
        title: title,
        price: price,
        thumbnail: thumbnail,
        id: elementos.length + 1,
      };

      elementos.push(elemento);
      return elemento;
    } catch (error) {
      console.log('ERROR: No se pudo agregar un producto. ' + error.message);
    }
  }

  // Metodo para agregar uno
  leerUno(id: number): Product | undefined {
    try {
      const producto = elementos.find((aProduct) => aProduct.id === id);
      return producto;
    } catch (error) {
      console.log('Producto no encontrado');
    }
  }

  // Metodo para actualizar productos
  actualizar(
    id: number,
    title: string | null = null,
    price: number | null = null,
    thumbnail: string | null = null
  ): Product | undefined {
    try {
      if (typeof title !== 'string')
        throw new Error('Titulo tiene que ser string');
      if (typeof price !== 'number')
        throw new Error('Price tiene que ser un nro');
      if (typeof thumbnail !== 'string')
        throw new Error('Thumbnail tiene que ser string de url');

      const index = elementos.map((aProduct) => aProduct.id).indexOf(id);
      if (index === -1) {
        throw new Error('Producto no encontrado');
      }

      elementos[index].title = title;
      elementos[index].price = price;
      elementos[index].thumbnail = thumbnail;

      return elementos[index];
    } catch (error) {
      console.log(error.message);
    }
  }

  // Metodo para borrar un producto
  borrarUno(id: number): Product | undefined {
    try {
      const idBuscado = id;
      const productoEliminado = elementos.find(
        (aProduct) => aProduct.id === idBuscado
      );
      elementos = elementos.filter((aProduct) => aProduct.id !== idBuscado);

      return productoEliminado;
    } catch (error) {
      console.log(`Producto no encontrado`);
    }
  }
}

export const productsPersistencia = new Productos();
