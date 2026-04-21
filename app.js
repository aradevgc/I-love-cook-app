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

function toggleSection(id) {
    const seccion = document.getElementById(id);
    
    // Si está oculta, la mostramos. Si no, la ocultamos.
    if (seccion.style.display === "block") {
        seccion.style.display = "none";
    } else {
        // Opcional: Ocultar las otras antes de abrir esta
        // document.querySelectorAll('.content-box').forEach(el => el.style.display = 'none');
        
        seccion.style.display = "block";
    }
}

