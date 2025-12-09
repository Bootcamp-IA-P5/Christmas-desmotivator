from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
from openai import AzureOpenAI
import uvicorn
from dotenv import load_dotenv

# --- 1. Configuración de Azure OpenAI ---
# Es vital configurar las variables de entorno de forma segura.
# Asegúrate de establecer estas variables en tu entorno de ejecución.

load_dotenv()

AZURE_OPENAI_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT")
AZURE_OPENAI_API_KEY = os.getenv("AZURE_OPENAI_API_KEY")
AZURE_OPENAI_DEPLOYMENT_NAME = os.getenv("AZURE_OPENAI_DEPLOYMENT_NAME")
SYSTEM_ROLE = os.getenv("SYSTEM_ROLE")

# Inicializa el cliente de AzureOpenAI
try:
    if not AZURE_OPENAI_ENDPOINT: 
        raise ValueError("Endpoint de OpenAI no valido.")
    if not AZURE_OPENAI_API_KEY:
        raise ValueError("API Key de OpenAI no valida.")

    ai_client = AzureOpenAI(
        azure_endpoint=AZURE_OPENAI_ENDPOINT,
        api_key=AZURE_OPENAI_API_KEY,
        api_version="2024-12-01-preview" # Usa la versión de API más reciente o la requerida
    )
except ValueError as e:
    print(f"Error de configuración: {e}")
    ai_client = None


# --- 2. Definición de la Aplicación y Modelos Pydantic ---

app = FastAPI(
    title="Azure AI Agent FastAPI",
    description="API para interactuar con un modelo de Azure OpenAI.",
    version="1.0.0",
    timeout=60.0
)

# Modelo para la solicitud entrante
class MessageRequest(BaseModel):
    prompt: str
    system_message: str = SYSTEM_ROLE

# Modelo para la respuesta saliente
class MessageResponse(BaseModel):
    response: str
    model: str


# --- 3. Endpoint de la API ---

@app.post("/ask_agent", response_model=MessageResponse)
async def ask_agent(request: MessageRequest):
    """
    Envía un prompt al modelo de IA desplegado en Azure OpenAI.
    """
    if ai_client is None:
        raise HTTPException(
            status_code=500,
            detail="El cliente de Azure OpenAI no se pudo inicializar. Revisa la configuración."
        )

    try:
        # Llama a la API de Azure OpenAI
        completion = ai_client.chat.completions.create(
            model=AZURE_OPENAI_DEPLOYMENT_NAME,
            messages=[
                {
                    "role": "system", 
                    "content": request.system_message
                },
                {
                    "role": "user", 
                    "content": request.prompt
                }
            ],
            # temperature=0.7 # Opcional: Controla la creatividad de la respuesta
        )


        # Extrae el contenido de la respuesta
        ai_response = completion.choices[0].message.content
        
        return MessageResponse(
            response=ai_response,
            model=AZURE_OPENAI_DEPLOYMENT_NAME
        )

    except Exception as e:
        # Manejo de errores específicos de la llamada a la API
        print(f"Error al llamar a Azure OpenAI: {e}")
        raise HTTPException(
            status_code=500, 
            detail=f"Error al interactuar con el agente de IA: {str(e)}"
        )

# --- 4. Ejecución (Opcional, para pruebas locales) ---
if __name__ == "__main__":
    # Asegúrate de que tus variables de entorno estén configuradas antes de ejecutar
    uvicorn.run(app, host="0.0.0.0", port=8000)