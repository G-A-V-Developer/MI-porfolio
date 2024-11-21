// Configuración inicial del canvas
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Ajuste del tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Caracteres a mostrar
const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charArray = characters.split("");

// Tamaño de las columnas basado en el ancho del canvas
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array para almacenar la posición de las columnas
const drops = Array(Math.floor(columns)).fill(1);

// Función principal para dibujar la animación
function draw() {
  // Fondo translúcido para el efecto de desvanecimiento
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Estilo de fuente
  ctx.fillStyle = "#0a5"; // Color verde
  ctx.font = `${fontSize}px monospace`;

  // Dibujar caracteres
  drops.forEach((y, x) => {
    const text = charArray[Math.floor(Math.random() * charArray.length)];
    ctx.fillText(text, x * fontSize, y * fontSize);

    // Reiniciar las gotas al azar
    if (y * fontSize > canvas.height || Math.random() > 0.95) {
      drops[x] = 0;
    }

    // Mover las gotas hacia abajo
    drops[x]++;
  });
}

// Ejecutar la función de dibujo en un bucle
setInterval(draw, 100);

// Ajustar el canvas al cambiar el tamaño de la ventana
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Volver a calcular el número de columnas basado en el nuevo tamaño
  const columns = canvas.width / fontSize;
  drops.length = Math.floor(columns); // Ajustar la longitud del array de gotas
  drops.fill(1); // Reiniciar las gotas
});
