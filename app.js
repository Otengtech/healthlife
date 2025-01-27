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

const balanceModalBtn = document.getElementById("balanceDiet");
const regularModalBtn = document.getElementById("regular");
const qualityModalBtn = document.getElementById("qualitySleep");
const stressModalBtn = document.getElementById("stress");
const balanceCloseModalBtn = document.getElementById("balanceModal");
const regularCloseModalBtn = document.getElementById("regularModal");
const qualityCloseModalBtn = document.getElementById("qualityModal");
const stressCloseModalBtn = document.getElementById("stressModal");
const balanceOverlay = document.getElementById("balanceOverlay");
const regularOverlay = document.getElementById("regularOverlay");
const qualityOverlay = document.getElementById("qualityOverlay");
const stressOverlay = document.getElementById("stressOverlay");
const body = document.body;

balanceModalBtn.addEventListener("click", () => {
  balanceOverlay.classList.remove("hidden"); // Show modal
  body.classList.add("overflow-hidden"); // Prevent scrolling
});

balanceCloseModalBtn.addEventListener("click", () => {
  balanceOverlay.classList.add("hidden"); // Hide modal
  body.classList.remove("overflow-hidden"); // Allow scrolling
});

regularModalBtn.addEventListener("click", () => {
  regularOverlay.classList.remove("hidden"); // Show modal
  body.classList.add("overflow-hidden"); // Prevent scrolling
});

regularCloseModalBtn.addEventListener("click", () => {
  regularOverlay.classList.add("hidden"); // Hide modal
  body.classList.remove("overflow-hidden"); // Allow scrolling
});

qualityModalBtn.addEventListener("click", () => {
  qualityOverlay.classList.remove("hidden"); // Show modal
  body.classList.add("overflow-hidden"); // Prevent scrolling
});

qualityCloseModalBtn.addEventListener("click", () => {
  qualityOverlay.classList.add("hidden"); // Hide modal
  body.classList.remove("overflow-hidden"); // Allow scrolling
});

stressModalBtn.addEventListener("click", () => {
  stressOverlay.classList.remove("hidden"); // Show modal
  body.classList.add("overflow-hidden"); // Prevent scrolling
});

stressCloseModalBtn.addEventListener("click", () => {
  stressOverlay.classList.add("hidden"); // Hide modal
  body.classList.remove("overflow-hidden"); // Allow scrolling
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

const aboutBtn = document.querySelector(".aboutBtn");
const aboutBtn1 = document.querySelector(".aboutBtn1");
const aboutSection = document.querySelector(".about-section");
const contactBtn = document.querySelector(".contactBtn");
const contactBtn1 = document.querySelector(".contactBtn1");
const homeBtn = document.querySelector(".homeBtn");
const homeBtn1 = document.querySelector(".homeBtn1");
const menuBtn = document.querySelector(".menuBtn");
const contactSection = document.querySelector(".contact-section");
const mobileSection = document.querySelector(".mobileMenu");
const donateSection = document.querySelector(".donate-section");

menuBtn.addEventListener("click", () => {
  // Hide contact section if it's visible

  contactSection.style.display = "none";
  donateSection.style.display = "none";
  aboutSection.style.display = "none";

  // Toggle about section visibility
  if (mobileSection.style.display === "none") {
    mobileSection.style.display = "flex";
  } else {
    mobileSection.style.display = "none";
  }
});
aboutBtn.addEventListener("click", () => {
  // Hide contact section if it's visible

  contactSection.style.display = "none";
  donateSection.style.display = "none";

  // Toggle about section visibility
  if (aboutSection.style.display === "none") {
    aboutSection.style.display = "block";
  } else {
    aboutSection.style.display = "block";
  }
});

aboutBtn1.addEventListener("click", () => {
  // Hide contact section if it's visible

  contactSection.style.display = "none";
  donateSection.style.display = "none";
  mobileSection.style.display = "none";

  // Toggle about section visibility
  if (aboutSection.style.display === "none") {
    aboutSection.style.display = "block";
  } else {
    aboutSection.style.display = "block";
  }
});

contactBtn.addEventListener("click", () => {
  // Hide about section if it's visible
  if (aboutSection.style.display === "block") {
    aboutSection.style.display = "none";
  }

  // Toggle contact section visibility
  if (contactSection.style.display === "none") {
    contactSection.style.display = "block";
  } else {
    contactSection.style.display = "block";
  }
});

contactBtn1.addEventListener("click", () => {
  // Hide about section if it's visible
  if (aboutSection.style.display === "block") {
    aboutSection.style.display = "none";
  }
  mobileSection.style.display = "none";

  // Toggle contact section visibility
  if (contactSection.style.display === "none") {
    contactSection.style.display = "block";
  } else {
    contactSection.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const donateBtn = document.querySelector(".donateBtn");
  const donateBtn1 = document.querySelector(".donateBtn1");
  const donateSection = document.querySelector(".donate-section");

  // Add event listener to the button
  donateBtn1.addEventListener("click", () => {
    contactSection.style.display = "none";
    aboutSection.style.display = "none";
    links.forEach((l) => l.classList.remove("a"));

    // Toggle donate section visibility
    if (donateSection.style.display === "none") {
      donateSection.style.display = "block";
    } else {
      donateSection.style.display = "none";
    }
    mobileSection.style.display = "none";
  });
  // Add event listener to the button
  donateBtn.addEventListener("click", () => {
    contactSection.style.display = "none";
    aboutSection.style.display = "none";
    links.forEach((l) => l.classList.remove("a"));

    // Toggle donate section visibility
    if (donateSection.style.display === "none") {
      donateSection.style.display = "block";
    } else {
      donateSection.style.display = "block";
    }
  });
});

homeBtn.addEventListener("click", () => {
  aboutSection.style.display = "none";
  contactSection.style.display = "none";
  donateSection.style.display = "none";
});

homeBtn1.addEventListener("click", () => {
  aboutSection.style.display = "none";
  contactSection.style.display = "none";
  donateSection.style.display = "none";
  mobileSection.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
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

updateText();
