console.clear();
// -------------------------

import { Persona } from './models/persona';

let persona1: Persona = {
	nombre: {
		primerNombre: 'Juan',
		apellido: 'Aguirre',
	},
	edad: 26,
	tieneCarnet: true,
};

persona1 = {
	...persona1,
	// nombre: {
	// 	...persona1.nombre,
	// 	tercerNombre: 'Francisco',
	// },
	dni: 3412412,
};

console.log(
	`El nombre de la persona1 es ${persona1.nombre.primerNombre}${
		persona1.nombre.segundoNombre ? ` ${persona1.nombre.segundoNombre}` : ''
	} ${persona1.nombre.apellido}`
);
