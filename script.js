// aqui seleccionamos los elementos del HTML y los asignamos a sus respectivas variables para trabajarlos como elementos de JS y que sea mas facil reconocerlos
let titulo = document.querySelector(".header_content_title");
let manzanita = document.querySelector("#manzanita");
let main = document.querySelector("#main");

// titulo.innerHTML = "He sido modificado";
// console.log(titulo);
// let cambiarTexto = () => {
// 	titulo.innerHTML = "He sido modificado";
// };

// aqui agregamos un evento que escucha el click, y ejecuta una funcion anonima que lo que hace es cambiar el HTML del titulo y luego agregar la clase mostrar al listado de clases del main
manzanita.addEventListener("click", () => {
	titulo.innerHTML = "He sido modificado";
	// console.log(main.classList);
	main.classList.add("mostrar");
});
