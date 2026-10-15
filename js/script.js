const themeButton = document.getElementById("themeButton");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalDescription = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");

const projects = {
  "still-there": {
    title: "Still There",
    type: "3D modeling · Rigging · Simulation",
    image: "assets/images/PROJECT1POSTER.jpg",
    description:
      "A 3D animation project about a sock that falls under a wardrobe and discovers a tiny world made from lost objects.",
    link:
      "https://drive.google.com/file/d/141JjTFT_afgucggyBv8oJeOX9gKGxBpx/view?usp=drivesdk"
  },

  "one-more-patient": {
    title: "One More Patient",
    type: "Game design · Environment · Narrative",
    image: "assets/images/PROJECT2POSTER.png",
    description:
      "A psychological horror game about a medical student who breaks down and begins performing procedures inside an abandoned hospital.",
    link:
      "https://drive.google.com/file/d/1KaW46VAl-xt3brUbHg2pryFDOLL1Srtg/view?usp=drivesdk"
  },

  "decorator-crab": {
    title: "Decorator Crab",
    type: "Product design · 3D modeling · Crafts",
    image: "assets/images/PROJECT3POSTER.png",
    description:
      "A marine-inspired jewelry organizer based on the decorator crab, combining 3D modeling, crafts, and hands-on making.",
    link: ""
  }
};

document.querySelectorAll(".project-link").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];

    modalImage.src = project.image;
    modalImage.alt = `${project.title} project poster`;
    modalTitle.textContent = project.title;
    modalType.textContent = project.type;
    modalDescription.textContent = project.description;

    if (project.link) {
      modalLink.href = project.link;
      modalLink.style.display = "inline-block";
    } else {
      modalLink.style.display = "none";
    }

    modal.classList.add("active");
  });
});

function closeModal() {
  modal.classList.remove("active");
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeButton.innerHTML = "☾ <span>Dark mode</span>";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const darkMode = document.body.classList.contains("dark-mode");

  themeButton.innerHTML = darkMode
    ? "☾ <span>Dark mode</span>"
    : "☼ <span>Light mode</span>";

  localStorage.setItem("theme", darkMode ? "dark" : "light");
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message || !email.includes("@")) {
    formMessage.textContent =
      "Please complete all fields with a valid email.";
    formMessage.style.color = "#d94736";
    return;
  }

  formMessage.textContent =
    `Thanks, ${name}! Your message has been received.`;

  formMessage.style.color = "#3b8c62";
  contactForm.reset();
});