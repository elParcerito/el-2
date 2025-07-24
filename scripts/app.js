// Guardar solicitud del pasajero
const form = document.getElementById("viajeForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;

    localStorage.setItem("viaje", JSON.stringify({ origen, destino }));
    alert("Solicitud enviada");
    window.location.href = "index.html";
  });
}

// Mostrar solicitud al conductor
const solicitudDiv = document.getElementById("solicitud");
if (solicitudDiv) {
  const viaje = JSON.parse(localStorage.getItem("viaje"));
  if (viaje) {
    solicitudDiv.innerHTML = `
      <p><strong>Desde:</strong> ${viaje.origen}</p>
      <p><strong>Hasta:</strong> ${viaje.destino}</p>
      <button onclick="aceptarViaje('${viaje.destino}')">Aceptar y abrir en Waze</button>
    `;
  } else {
    solicitudDiv.innerHTML = "<p>No hay solicitudes disponibles</p>";
  }
}

// Función para abrir Waze
function aceptarViaje(destino) {
  const destinoEncoded = encodeURIComponent(destino);
  const url = `https://waze.com/ul?q=${destinoEncoded}&navigate=yes`;
  window.location.href = url;
}
