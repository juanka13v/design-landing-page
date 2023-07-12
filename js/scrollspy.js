const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".links > li > a");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let section = `#${entry.target.dataset.section}`;
        history.pushState({}, section, section);

        navLinks.forEach((link) => {
          if (section === link.hash) {
            link.parentElement.classList.add("active");
            return;
          }

          if (section === "#home") {
            link.parentElement.classList.remove("active");
            return;
          }

          link.parentElement.classList.remove("active");
        });
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "0px",
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
