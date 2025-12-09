# Update this README
# 🚫 El Desmotivador Navideño (Christmas-desmotivator)

Proyecto desarrollado en 4 horas con la única misión de boicotear el espíritu navideño de Madrid. Un **modelo de Inteligencia Artificial** desplegado en **Azure** que convierte los platos de la cena navideña en cínicos villancicos estilo Grinch, listos para ser compartidos.

## 🧭 Índice

* [📌 Project Overview](#-project-overview)
* [📎 Links Útiles](#-links-útiles)
* [🎯 Target Audience](#-target-audience)
* [🧠 Arquitectura y Servicios](#-arquitectura-y-servicios)
* [🚀 Futuras Implementaciones](#-futuras-implementaciones)
* [🛠️ Herramientas y Tecnologías](#️-herramientas-y-tecnologías)
* [📁 Estructura del Proyecto](#-estructura-del-proyecto)
* [✍ Instrucciones de uso](#-instrucciones-de-uso)
* [👩‍💻 Contribuidores](#-contribuidores)

---

## 📌 Resumen del Proyecto

**El Desmotivador Navideño** es una **Web App de una sola página (SPA)** diseñada para la viralización. Su propósito es capturar el sentimiento anti-Navidad mediante la burla de las tradiciones culinarias de la temporada en la capital.

El corazón del proyecto es un modelo de lenguaje grande (**LLM**), desplegado en **Azure OpenAI Service**, configurado con un *System Prompt* de rol específico ("El Grinch cínico") para garantizar que cada salida sea un villancico totalmente desmotivador y sarcástico.

La aplicación fue desarrollada en menos de 4 horas, enfocándose en la usabilidad, la coherencia visual (paleta Grinch: verde sucio y rojo boicot), y la función de compartir en redes sociales.

### ✨ Features

| ✅ Pros | ❌ Limitations |
| :--- | :--- |
| **Generación Generativa** con Azure OpenAI | Requiere una clave API activa y un endpoint en Azure |
| Tono consistente del Grinch (vía System Prompt) | Sin persistencia de datos (solo generación en tiempo real) |
| Interfaz de usuario (UI) **Grinch** y de alto contraste | Diseño minimalista, centrado en la velocidad de desarrollo |
| Función de compartir inmediata (via `navigator.share`) | Sin control de errores robusto para fallos de red |

## 📎 Links Útiles

* [Repositorio de GitHub](https://github.com/Bootcamp-IA-P5/Christmas-desmotivator.git)
* [Documentación de Azure OpenAI Service](https://docs.microsoft.com/es-es/azure/cognitive-services/openai/)

## 🎯 Target Audience

* **Antinavideños y Cínicos:** Personas que detestan la saturación y el consumismo de la Navidad.
* **Usuarios de Redes Sociales:** Buscando contenido divertido y compartible para las fiestas.
* **Desarrolladores:** Interesados en implementar LLMs rápidamente en frontends estáticos.

## 🧠 Arquitectura y Servicios

* **Frontend:** HTML5, CSS3 (Estilo Grinch), JavaScript Vainilla.
* **Agente de IA (Backend Lógico):** LLM (Ej. GPT-3.5 Turbo o similar) desplegado a través de **Azure OpenAI Service**.
* **Conexión:** Peticiones asíncronas (`fetch` API) desde el frontend al endpoint de Azure.
* **Estilos:** Paleta de colores Grinch (`#1E4D2B`, `#CC3333`, `#33CC33`) y tipografía temática (`Creepster`).

## 🚀 Futuras Implementaciones

* **Modo Oscuro/Claro:** Ofrecer un contraste aún mayor para el boicot nocturno.
* **Almacenamiento de Villancicos:** Permitir a los usuarios guardar sus creaciones favoritas en `localStorage`.
* **Integración con Twitter API:** Compartir de forma más directa y con *cards* personalizadas.
* **Compartir en Redes Sociales, como Whatsapp** Compartir de forma directa con los seres "queridos" sus creaciones más ácidas.
* **Moderación de Contenido:** Implementar el filtro de Azure para evitar *outputs* inapropiados.
* **Implementar SunoApi** Para que cante el villancico creado por nuestro modelo.

## 🛠️ Herramientas y Tecnologías

| ⚙️ Backend (API) | 🌐 Frontend |
| :--- | :--- |
| Azure OpenAI Service | HTML5 |
| JavaScript (Fetch API) | CSS3 |
| JSON | JavaScript Vainilla |

## 📁 Estructura del Proyecto

## ✍ Instrucciones de uso

### 🧪 1. Clonar Repositorio
```bash
git clone [https://github.com/tu-usuario/Grinch-O-Meter.git](https://github.com/tu-usuario/Grinch-O-Meter.git)
cd Grinch-O-Meter
🔐 2. Configuración de Azure APICrea un archivo .env en la raíz del proyecto (o utiliza el .env_example) y añade tus credenciales de Azure, que serán usadas en app.js.ADVERTENCIA: Por seguridad, en una aplicación en producción, esta clave nunca debe exponerse directamente en el frontend. Para este Hackathon de 4 horas, se acepta la simplificación.# Configuración del Endpoint de Azure OpenAI
AZURE_API_ENDPOINT="TU_ENDPOINT_AQUI" 
AZURE_API_KEY="TU_CLAVE_API_SECRETA_AQUI"
🚀 3. Ejecución Simplemente abre el archivo index.html en tu navegador para iniciar la aplicación. Asegúrate de que tu app.js contiene los valores correctos de las variables de Azure.

## 👩‍💻 Contribuidores

| Name | GitHub | LinkedIn |
| :--- | :--- | :--- |
| **Kirutasu Sánchez** | [![GitHub](https://img.shields.io/badge/GitHub-a50050?logo=github&logoColor=white)](https://github.com/Yael-Parra) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kirutasu/) |
| **Jimena Flores** | [![GitHub](https://img.shields.io/badge/GitHub-a50050?logo=github&logoColor=white)](https://github.com/JIMENA-ft) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jimena-flores-ticona/) |
| **Oscar Rodríguez** | [![GitHub](https://img.shields.io/badge/GitHub-a50050?logo=github&logoColor=white)](https://github.com/osrodgon) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/orodriguezgonzalez/) |
| **Aroa Mateo** | [![GitHub](https://img.shields.io/badge/GitHub-a50050?logo=github&logoColor=white)](https://github.com/Arowi95) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aroamateogomez/) |

