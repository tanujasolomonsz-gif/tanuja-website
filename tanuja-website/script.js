// Smooth reveal on scroll
const items = document.querySelectorAll(".fadeUp");

const reveal = () => {
  const trigger = window.innerHeight * 0.88;
  items.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("show");
  });
};
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Highlight active nav link
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navlinks a").forEach(a => {
  const href = a.getAttribute("href");
  if (href === current) {
    a.style.borderColor = "rgba(255,255,255,0.18)";
    a.style.background = "rgba(255,255,255,0.08)";
  }
});
