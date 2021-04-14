const contenido1 = document.getElementById("contenido1");
const contenido2 = document.getElementById("contenido2");
const contenido3 = document.getElementById("contenido3");

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

contenido1.classList.add("show");

link1.addEventListener("click", () => {
	contenido1.classList.add("show");
	contenido2.classList.remove("show");
	contenido3.classList.remove("show");
});

link2.addEventListener("click", () => {
	contenido2.classList.add("show");
	contenido1.classList.remove("show");
	contenido3.classList.remove("show");
});

link3.addEventListener("click", () => {
	contenido3.classList.add("show");
	contenido1.classList.remove("show");
	contenido2.classList.remove("show");
});

// --------------------------

const links = Array.from(document.getElementsByClassName("link"));
const contenidos = Array.from(document.getElementsByClassName("contenido"));

links.forEach((link, index) => {
	link.addEventListener("click", () => {
		contenidos.forEach((contenido) => {
			contenido.classList.remove("show");
		});
		contenidos[index].classList.add("show");
	});
});
