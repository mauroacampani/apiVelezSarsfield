from fastapi import APIRouter, HTTPException
from app.services.api_externa import obtener_resultados

router = APIRouter(prefix="/resultados", tags=["Resultados"])

@router.get("/")
def get_resultados():
    try:
        return obtener_resultados()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))