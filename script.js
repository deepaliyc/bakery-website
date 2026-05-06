const header = document.querySelector(".site-header");
const form = document.querySelector(".order-form");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  button.textContent = "Request sent";
  button.disabled = true;
  setTimeout(() => {
    button.textContent = "Request order";
    button.disabled = false;
  }, 2200);
});
