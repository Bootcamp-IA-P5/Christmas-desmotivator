// Selectores de Elementos
const platoInput = document.getElementById('plato-principal');
const postreInput = document.getElementById('postre');
const generarBtn = document.getElementById('generar-btn');
const outputSection = document.getElementById('output-section');
const villancicoOutput = document.getElementById('villancico-output');
const compartirBtn = document.getElementById('compartir-btn');

// Frases Predefinidas del Grinch
// Usamos arrays para seleccionar frases de forma aleatoria.

const aperturas = [
    "Que nadie hable de paz ni felicidad,",
    "Otra noche horrible, con parientes sin parar,",
    "No hay nada que celebrar, solo gastar y fingir,",
    "El pavo ya está seco, el ánimo fatal,"
];

const criticas = [
    "¡Oh, qué horror de plato, es pura falsedad!",
    "Todo es artificial, sin pizca de bondad,",
    "El consumismo manda, la bilis va a subir,",
    "Más luces en la calle, menos luz en el hogar,"
];

const conclusiones = [
    "Que se queme %POSTRE% y la cena se arruine,",
    "Al final, %POSTRE% empalagoso llegará,",
    "Es la peor fecha, mejor ya que termine,",
    "Por culpa de %POSTRE% el Grinch va a vomitar,"
];

/**
 * @param {string} platoPrincipal - El plato que el usuario odia.
 * @param {string} postre - El postre empalagoso.
 */
function generarVillancicoGrinch(platoPrincipal, postre) {
    // 1. Funciones auxiliares para selección aleatoria
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    
    // 2. Selección de las partes del villancico
    let a = getRandom(aperturas);
    let b1 = getRandom(criticas);
    let b2 = getRandom(criticas); // Se repite para la rima A-B-C-B
    let c = getRandom(conclusiones);

    // 3. Inserción de los platos del usuario
    // Modificamos A y C para incluir los ingredientes
    a += ` solo hay más kilos y más ${platoPrincipal} por tragar.`;
    c = c.replace('%POSTRE%', postre);
    c += ` y el espíritu se vaya por donde vino.`;
    
    // 4. Estructura final con saltos de línea
    return `${a}\n${b1}\n${c}\n${b2}`;
}

// --- Evento al hacer clic en "DESMOTIVAR CENA AHORA" ---
generarBtn.addEventListener('click', () => {
    const platoPrincipal = platoInput.value.trim();
    const postre = postreInput.value.trim();

    if (!platoPrincipal || !postre) {
        alert("¡No seas tan feliz! Debes especificar ambos platos para el boicot.");
        return;
    }

    // Generar el contenido
    const villancico = generarVillancicoGrinch(platoPrincipal, postre);
    
    // Mostrar el resultado en pantalla
    villancicoOutput.textContent = villancico;
    outputSection.classList.remove('hidden'); // Hace visible la sección de salida
});


// --- Evento al hacer clic en "COMPARTE EL BOICOT" ---
compartirBtn.addEventListener('click', () => {
    const villancico = villancicoOutput.textContent;
    const hashtag = "#DesmotivadoNavidadMadrid";
    
    // 1. Intentar usar la API de compartir (ideal para móviles)
    if (navigator.share) {
        navigator.share({
            title: 'Mi Boicot Navideño',
            text: `¡Mi cena ha sido desmotivada! ${hashtag}\n\n${villancico}`,
            url: window.location.href
        })
        .catch((error) => console.log('Error al compartir', error));
        
    } else {
        // 2. Fallback: Copiar al portapapeles y alertar al usuario
        navigator.clipboard.writeText(`${villancico}\n\n${hashtag} ${window.location.href}`)
            .then(() => {
                alert("¡Villancico copiado! Pégalo en tus redes con el hashtag de boicot.");
            })
            .catch(err => {
                console.error('Error al copiar:', err);
                alert("Error al copiar. Por favor, selecciona el texto y cópialo manualmente.");
            });
    }
});