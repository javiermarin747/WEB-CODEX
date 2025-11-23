// Configura aquí las credenciales por defecto.
const credentials = {
  username: "admin",
  password: "1234",
};

const loginForm = document.getElementById("login-form");
const loginCard = document.getElementById("login-card");
const landing = document.getElementById("landing");
const errorLabel = document.getElementById("login-error");
const logoutBtn = document.getElementById("logout-btn");

function showLanding(username) {
  loginCard.hidden = true;
  landing.hidden = false;
  errorLabel.textContent = "";
  landing.querySelector(".eyebrow").textContent = `Hola, ${username}`;
}

function showLogin() {
  loginCard.hidden = false;
  landing.hidden = true;
  loginForm.reset();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginForm.username.value.trim();
  const password = loginForm.password.value.trim();

  if (username === credentials.username && password === credentials.password) {
    showLanding(username);
  } else {
    errorLabel.textContent = "Usuario o contraseña incorrectos";
  }
});

logoutBtn.addEventListener("click", () => {
  showLogin();
});

// Ejemplo de cómo se podría inicializar mqtt.js más adelante:
// import mqtt from "mqtt";
// const client = mqtt.connect("wss://tu-broker:8083");
// client.on("connect", () => client.subscribe("/dispositivos/status"));
// client.on("message", (topic, payload) => {
//   document.getElementById("temp-value").textContent = `${payload.toString()} ºC`;
// });
// document.querySelector(".pill").addEventListener("click", () => {
//   client.publish("/dispositivos/cmd", "ON");
// });
