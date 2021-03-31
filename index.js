// ---------- JS ----------
// Mapear un nuevo array llamado articulosModificados donde se incremente el precio de venta y el costo de los articulos en un 10% (multiplicar el precio y el costo por 1.1) pero solamente para aquellos articulos que no tienen descuento (aquellos con la propiedad tieneDescuento en false). Tener en cuenta la estructura del objeto (con objetos anidados) para acceder correctamente a la propiedad deseada y modificarla correctamente
// Modificar en dicho array el numero de id agregandole dos ceros despues del numero que traen (si es 9 debe quedar 90)
// Mostrar por consola el array original y el array modificado
// Mostrar por consola un string por cada uno de los articulos, con la siguiente estructura (los items entre corchetes son el valor que se desea conocer de cada articulo): 'ID: [id] - Item: [descripcion] - Precio compra: [costo] - Precio Venta: [precio]

let articulos = [
	{
		id: 0,
		info: {
			descripcion: "Jabon de tocador x 6",
			precios: {
				costo: 120.5,
				precio: 200,
			},
			tieneDescuento: false,
		},
	},
	{
		id: 1,
		info: {
			descripcion: "Shampoo de manzanilla 800ml",
			precios: {
				costo: 200,
				precio: 350.47,
			},
			tieneDescuento: true,
		},
	},
	{
		id: 3,
		info: {
			descripcion: "Pasta de dientes 150ml",
			precios: {
				costo: 90,
				precio: 135.99,
			},
			tieneDescuento: false,
		},
	},
	{
		id: 4,
		info: {
			descripcion: "Afeitadoras x 3",
			precios: {
				costo: 240.33,
				precio: 499.99,
			},
			tieneDescuento: true,
		},
	},
	{
		id: 5,
		info: {
			descripcion: "Cepillo de dientes x 2",
			precios: {
				costo: 179.99,
				precio: 249,
			},
			tieneDescuento: false,
		},
	},
];
