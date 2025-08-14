from fastapi import APIRouter, HTTPException
from app.services.api_externa import obtener_tabla_posiciones

router = APIRouter(prefix="/posiciones", tags=["Posiciones"])

@router.get("/")
def get_posiciones():
    try:
        return obtener_tabla_posiciones()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    
