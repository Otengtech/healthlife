// links toggling
const links = document.querySelectorAll("#links");
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove the "a" class from all links
    links.forEach((l) => l.classList.remove("a"));

    // Add the "a" class to the clicked link
    link.classList.add("a");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menuBtn");
  const mobileMenu = document.querySelector(".mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

const images = document.querySelectorAll("#images");

images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "rotate(10deg)";
    image.style.transition = "transform 0.3s ease"; // Smooth animation
  });

  image.addEventListener("mouseout", () => {
    image.style.transform = "rotate(0deg)"; // Reset scale on mouse out
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animate-section"); // Target all elements with the class 'animate-section'

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"; // Make it fully visible
          entry.target.style.transform = "translateY(0)"; // Reset the position
        } else {
          // Reset animation when leaving the viewport
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateY(30px)";
        }
      });
    },
    {
      root: null, // Observe in the viewport
      rootMargin: "0px 0px -15% 0px", // Trigger when it's 25% from the bottom of the screen
      threshold: 0, // Trigger as soon as it intersects
    }
  );

  sections.forEach((section) => observer.observe(section)); // Observe each section
});

// only images
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animate-image"); // Target all elements with the class 'animate-section'

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"; // Make it fully visible
          entry.target.style.transform = "translateY(10px)"; // Reset the position
        } else {
          // Reset animation when leaving the viewport
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateY(50px)";
        }
      });
    },
    {
      root: null, // Observe in the viewport
      rootMargin: "0px 0px -2% 0px", // Trigger when it's 25% from the bottom of the screen
      threshold: 0, // Trigger as soon as it intersects
    }
  );

  sections.forEach((section) => observer.observe(section)); // Observe each section
});

// dealing with scrolling down

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to handle scroll behavior
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollToTopBtn.style.display = "flex"; // Show the button when scrolled down
  } else {
    scrollToTopBtn.style.display = "none"; // Hide the button when at the top
  }
});

// Function to scroll back to top
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
});

const reviewSpace = document.querySelector(".reviewSpace");
const nameInput = document.querySelector(".nameInput");
const emailInput = document.querySelector(".emailInput");
const textInput = document.querySelector(".textInput");
const reviewBtn = document.querySelector(".reviewBtn");

reviewBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Fetch the current input values
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const textValue = textInput.value.trim();

  if (!nameValue || !emailValue || !textValue) {
    alert("Fill in all inputs");
  } else {
    const r = document.createElement("div");
    r.className = "p-5 rounded-lg bg-gray-100 my-3"; // Add styling directly
    r.innerHTML = `
          <h1 class="text-orange-600 text-xl">${nameValue}</h1>
          <h1 class="text-orange-600 text-lg">${emailValue}</h1>
          <p class="my-4">${textValue}</p>
        `;
    reviewSpace.appendChild(r);

    // Clear input fields after submission
    nameInput.value = "";
    emailInput.value = "";
    textInput.value = "";
  }
});

let textArray = [
  { id: 1, first: "Welcome to better ", second: "health today" },
  { id: 2, first: "Your health, ", second: "our top priority" },
  { id: 3, first: "Compassionate care ", second: "starts right here" },
  { id: 4, first: "Empowering wellness, ", second: "every step forward" },
  { id: 5, first: "Discover care that ", second: "truly matters" },
  { id: 6, first: "Your wellness journey ", second: "starts now" },
];

const firstText = document.querySelector(".first-text");
const secondText = document.querySelector(".second-text");
let counter = 0;

function updateText() {
  firstText.innerHTML = `
      <p class="animateText text-3xl md:text-8xl mt-4 font-semibold text-orange-600">${textArray[counter].first}</p>
    `;
  secondText.innerHTML = `
      <p class="animateText text-2xl md:text-6xl mb-4 italic text-gray-600">${textArray[counter].second}</p>
    `;

  counter = (counter + 1) % textArray.length;

  setTimeout(() => {
    updateText();
  }, 10000);
}

// updateText();
updateText()
