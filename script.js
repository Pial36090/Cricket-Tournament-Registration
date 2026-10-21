const form = document.querySelector("#registration-form");
const status = document.querySelector("#form-status");
const successPanel = document.querySelector("#success-panel");
const teamPreference = document.querySelector("#team-preference");
const teamNameField = document.querySelector("#team-name-field");
const teamNameInput = document.querySelector("#team-name");
const registerAnotherButton = document.querySelector("#register-another");
const ownerForm = document.querySelector("#owner-registration-form");
const ownerFormStatus = document.querySelector("#owner-form-status");
const ownerSuccess = document.querySelector("#owner-success");
const heroVisual = document.querySelector(".hero-visual");
const revealItems = document.querySelectorAll("[data-reveal]");
const storageKey = "boundaryCupDemoRegistrations";
const ownerStorageKey = "boundaryCupDemoOwnerRegistrations";

function updateTeamField() {
  if (!teamPreference || !teamNameField || !teamNameInput) return;

  const hasExistingTeam = teamPreference.value === "existing-team";
  teamNameField.hidden = !hasExistingTeam;
  teamNameInput.required = hasExistingTeam;
  if (!hasExistingTeam) teamNameInput.value = "";
}

function readRegistrations(key = storageKey) {
  try {
    const saved = sessionStorage.getItem(key);
    const registrations = saved ? JSON.parse(saved) : [];
    return Array.isArray(registrations) ? registrations : [];
  } catch {
    return [];
  }
}

if (teamPreference) {
  teamPreference.addEventListener("change", updateTeamField);
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "";

    if (!form.reportValidity()) return;

    const registration = Object.fromEntries(new FormData(form).entries());
    registration.submittedAt = new Date().toISOString();
    const registrations = readRegistrations();
    registrations.push(registration);

    try {
      sessionStorage.setItem(storageKey, JSON.stringify(registrations));
    } catch {
      status.textContent = "This browser could not save the demo entry. Please try another browser tab.";
      return;
    }

    form.hidden = true;
    successPanel.hidden = false;
    successPanel.querySelector("h3").focus({ preventScroll: true });
  });
}

if (registerAnotherButton) {
  registerAnotherButton.addEventListener("click", () => {
    form.reset();
    updateTeamField();
    form.hidden = false;
    successPanel.hidden = true;
    status.textContent = "";
    document.querySelector("#full-name").focus();
  });
}

if (ownerForm) {
  ownerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    ownerFormStatus.textContent = "";

    if (!ownerForm.reportValidity()) return;

    const registration = Object.fromEntries(new FormData(ownerForm).entries());
    registration.submittedAt = new Date().toISOString();
    const registrations = readRegistrations(ownerStorageKey);
    registrations.push(registration);

    try {
      sessionStorage.setItem(ownerStorageKey, JSON.stringify(registrations));
    } catch {
      ownerFormStatus.textContent = "This browser could not save the demo entry. Please try another browser tab.";
      return;
    }

    ownerForm.hidden = true;
    ownerSuccess.hidden = false;
    ownerSuccess.focus({ preventScroll: true });
  });
}

if (revealItems.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));
}

if (heroVisual) {
  const updateParallax = () => {
    const offset = window.scrollY * 0.12;
    heroVisual.style.transform = `translateY(${offset}px)`;
  };

  window.addEventListener("scroll", updateParallax, { passive: true });
  updateParallax();
}

updateTeamField();
