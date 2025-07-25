document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");

  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    menuIcon.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        navLinks.classList.toggle("active");
      }
    });
  }

const aboutHeroBtn = document.getElementById("aboutMeHeroBtn");
const aboutNavBtn = document.getElementById("aboutMeNavBtn");
const contactBtn = document.getElementById("contactBtn");
const projectBtn = document.getElementById("projectBtn")

const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contactSection");
const projectSection = document.getElementById("projectSection") 

// ✅ Toggle function with fade animation
function toggleSections(sectionsToToggle, scrollToSection) {
  const isVisible = sectionsToToggle.every(
    (section) => section.style.display === "block"
  );

  sectionsToToggle.forEach((section) => {
    if (section) {
      if (isVisible) {
        section.style.opacity = 0;
        setTimeout(() => {
          section.style.display = "none";
        }, 300);
      } else {
        section.style.display = "block";
        setTimeout(() => {
          section.style.opacity = 1;
        }, 10);
      }
    }
  });

  // Only scroll if we're showing them
  if (!isVisible && scrollToSection) {
    setTimeout(() => {
      scrollToSection.scrollIntoView({ behavior: "smooth" });
    }, 350);
  }
}

// Event listeners
if (aboutHeroBtn) {
  aboutHeroBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleSections([aboutSection, contactSection, projectSection], aboutSection);
  });
}

if (aboutNavBtn) {
  aboutNavBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleSections([aboutSection, contactSection, projectSection], aboutSection);
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleSections([contactSection], contactSection);
  });
}

if (projectBtn) {
  projectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleSections([projectSection], projectSection)
  })
}


// ================================================================================ 

// About Me Section - all tab contents with fade transition
function openTab(evt, tabName) {
  const tabcontents = document.getElementsByClassName("tab-contents");
  const tablinks = document.getElementsByClassName("tab-links");

// Hide all tab contents
for (let i = 0; i < tabcontents.length; i++) {
  tabcontents[i].style.opacity = 0;
  setTimeout(() => {
    tabcontents[i].style.display = "none";
    tabcontents[i].classList.remove("active-tab");
  }, 300);
  }

// Remove active class from all tab links
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

// Show current tab and highlight link with fade-in
  setTimeout(() => {
    const currentTab = document.getElementById(tabName);
    currentTab.style.display = "block";
    currentTab.classList.add("active-tab");
    currentTab.style.opacity = 1;
    evt.currentTarget.classList.add("active-link");
  }, 300);
  }

// ================================================================================ 

  // Function to open a certificate image
  function toggleImage(link) {
    const imgId = link.getAttribute("data-target");
    const img = document.getElementById(imgId);
    if (img.style.display === "none") {
      img.style.display = "block";
      link.textContent = "Hide Certificate";
    } else {
      img.style.opacity = 0;
      setTimeout(() => {
        img.style.display = "none";
        link.textContent = "View Certificate";
      }, 300);
    }
  }
});

// Make openTab globally accessible for inline HTML onclick
window.openTab = function(evt, tabName) {
  const tabcontents = document.getElementsByClassName("tab-contents");
  const tablinks = document.getElementsByClassName("tab-links");

  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.opacity = 0;
    setTimeout(() => {
      tabcontents[i].style.display = "none";
      tabcontents[i].classList.remove("active-tab");
    }, 300);
  }
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }
  setTimeout(() => {
    const currentTab = document.getElementById(tabName);
    currentTab.style.display = "block";
    currentTab.classList.add("active-tab");
    currentTab.style.opacity = 1;
    evt.currentTarget.classList.add("active-link");
  }, 300);
};

// Make toggleImage globally accessible for inline HTML onclick
window.toggleImage = function(link) {
  const imgId = link.getAttribute("data-target");
  const img = document.getElementById(imgId);
  if (img.style.display === "none" || img.style.display === "") {
    img.style.display = "block";
    img.style.opacity = 1;
    link.textContent = "Hide Certificate";
  } else {
    img.style.opacity = 0;
    setTimeout(() => {
      img.style.display = "none";
      link.textContent = "View Certificate";
    }, 300);
  }
};

// Show the first tab by default
document.addEventListener("DOMContentLoaded", () => {
  const firstTab = document.querySelector(".tab-links");
  if (firstTab) {
    firstTab.click();
  }
});

// ================================================================================ 


  document.querySelector(".form-group").addEventListener("submit", async function (e) {
    e.preventDefault(); // stop default form submission

    const form = e.target;

    // Get form data
    const formData = new FormData(form);

    // Send form via FormSubmit
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showPopup("✅ Message sent successfully!");
        form.reset();
      } else {
        showPopup("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      showPopup("❌ Network error. Please try again.");
    }
  });

  function showPopup(message) {
    const popup = document.createElement("div");
    popup.textContent = message;
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.right = "20px";
    popup.style.padding = "15px 20px";
    popup.style.background = "#333";
    popup.style.color = "#fff";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    popup.style.zIndex = "9999";
    popup.style.fontSize = "16px";
    popup.style.transition = "opacity 0.3s ease";
    popup.style.opacity = "1";

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.style.opacity = "0";
      setTimeout(() => popup.remove(), 500);
    }, 3000);
  }

// ======================== Symposium / Hello World Open&Closed Image ======================== 

   function openProject(img) {
  const overlay = document.getElementById("imageOverlay");
  const overlayImg = document.getElementById("overlayImage");
  overlay.style.display = "flex";
  overlayImg.src = img.src;
  document.body.classList.add("blurred");
}

function closedProject() {
  const overlay = document.getElementById("imageOverlay");
  overlay.style.display = "none";
  document.body.classList.remove("blurred");
}
