const goTopBtn = document.getElementById("goTopBtn");
const testimoniales = document.getElementById("testimoniales");
const info = document.getElementById("info");

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = () => {
  scrollTop > vh && scrollTop !== 0
    ? (goTopBtn.style.display = "flex")
    : (goTopBtn.style.display = "none");
};

window.onscroll = () => {
  if (
    document.documentElement.scrollTop >
    document.documentElement.clientHeight * 0.7
  ) {
    testimoniales.classList.add("effect2");
  }
  if (
    document.documentElement.scrollTop >
    document.documentElement.clientHeight * 1.5
  )
    info.classList.add("effect2");
};
