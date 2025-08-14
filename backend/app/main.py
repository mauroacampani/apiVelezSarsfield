from fastapi import FastAPI
from app.config import settings
from app.routers import posiciones, resultados

app = FastAPI(title="API de Estadísticas")

app.include_router(posiciones.router)
app.include_router(resultados.router)


@app.get("/")
def root():
    return {'mensaje':settings.api_url}