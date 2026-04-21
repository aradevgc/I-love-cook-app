const setupScreen = document.getElementById("setupScreen");
const appScreen = document.getElementById("appScreen");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

// 🔥 Init app
window.onload = () => {
  const savedName = localStorage.getItem("username");

  if (!savedName) {
    showSetup();
  } else {
    showApp(savedName);
  }
};

// 🟡 Mostrar setup (primera vez)
function showSetup() {
  setupScreen.classList.remove("hidden");
  appScreen.classList.add("hidden");
}

// 🟢 Mostrar app normal
function showApp(name) {
  setupScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");

  greeting.textContent = `Hola, ${name} 👋`;
}

// 💾 Guardar nombre (tipo login)
function saveName() {
  const name = nameInput.value.trim();

  if (!name) return;

  localStorage.setItem("username", name);

  showApp(name);
}

