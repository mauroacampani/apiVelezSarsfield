from fastapi import FastAPI
from app.config import settings
from fastapi.middleware.cors import CORSMiddleware
from app.routers import posiciones, resultados

app = FastAPI(title="API de Estadísticas")

# Configuración de CORS para que React pueda acceder
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción mejor poner solo tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(posiciones.router)
app.include_router(resultados.router)


@app.get("/")
def root():
    return {'mensaje':settings.api_url}