// array de prueba

let personas = [
	{
		nombre: {
			primerNombre: "Juan",
			segundoNombre: "Francisco",
			apellido: "Aguirre",
		},
		edad: 26,
	},
	{
		nombre: {
			primerNombre: "Guido",
			segundoNombre: "",
			apellido: "Lo Pinto",
		},
		edad: 18,
	},
	{
		nombre: {
			primerNombre: "Valentin",
			segundoNombre: "",
			apellido: "Gonzalez",
		},
		edad: 22,
	},
	{
		nombre: {
			primerNombre: "Jose",
			segundoNombre: "Ricardo",
			apellido: "Luareano",
		},
		edad: 14,
	},
];

// utilizando for

for (let i = 0; i < personas.length; i++) {
	personas[i] = {
		...personas[i],
		esMayorDeEdad: null,
		hobbies: [],
	};
}

// utilizando forEach pasandole una funcion en lugar de expandir la funcion anonima adentro (como se ve a continuavion)

// forma vieja de escribir las funciones

function agregarMayoriaDeEdad(persona, i, array) {
	array[i] = {
		...persona,
		esMayorDeEdad: null,
	};
	console.log(array[i]);
}

// forma nueva de escribir las funciones (arrow function): se quita la palabra function, se quita el nombre de la funcion y se agrega una flecha

let agregarMayoriaDeEdadConArrowFunction = (persona, i, array) => {
	array[i] = {
		...persona,
		esMayorDeEdad: null,
	};
	console.log(array[i]);
};

let personas1 = personas.forEach(agregarMayoriaDeEdad);

// utilizando forEach con funcion anonima adentro

let personas2 = personas.forEach((persona, i, personas) => {
	personas[i] = {
		...persona,
		esMayorDeEdad: null,
	};
	persona = personas[i];
	console.log(persona);
});

// utilizando map

let personas3 = personas.map((persona) => {
	// usando if

	if (persona.edad > 18) {
		persona = {
			...persona,
			esMayorDeEdad: true,
		};
	} else {
		persona = {
			...persona,
			esMayorDeEdad: false,
		};
	}

	// usando operador ternario v1.0

	persona.edad >= 18
		? (persona = { ...persona, esMayorDeEdad: true })
		: (persona = { ...persona, esMayorDeEdad: false });

	// usando operador ternario v2.0

	persona = { ...persona, esMayorDeEdad: persona.edad >= 18 ? true : false };

	return persona;
});
