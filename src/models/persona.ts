export interface Persona {
	nombre: {
		primerNombre: string;
		segundoNombre?: string;
		apellido: string;
	};
	edad: number;
	tieneCarnet?: boolean;
	dni?: number;
}
