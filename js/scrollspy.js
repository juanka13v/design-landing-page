const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".links > li > a");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = `#${entry.target.dataset.section}`;

      const path = sectionId === "#home" ? "/" : sectionId;
      history.pushState({}, sectionId, path);

      navLinks.forEach((link) => {
        const linkHash = link.hash;
        const isActive = linkHash === sectionId || (sectionId === "#home" && linkHash === "");
        link.parentElement.classList.toggle("active", isActive);
      });
    }
  });
}, {
  threshold: 1,
  rootMargin: "0px",
});

sections.forEach((section) => {
  observer.observe(section);
});