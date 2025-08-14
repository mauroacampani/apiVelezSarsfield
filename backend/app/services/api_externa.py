import requests
from app.config import settings
from fastapi.responses import JSONResponse

def obtener_tabla_posiciones():
    respuesta = requests.get(settings.url_posiciones)
    respuesta.raise_for_status()
    data = respuesta.json()

    standings_entries = data["children"][0]["standings"]

    tabla_posiciones = []

    
    for idx, entry in enumerate(standings_entries["entries"]):
   
        equipos = entry["team"]["displayName"]
        logo = entry["team"]["logos"][0]["href"] if entry["team"]["logos"] else None
        stats = {s["name"]: s["displayValue"] for s in entry["stats"]}

        tabla_posiciones.append({
            "posiciones": idx + 1,
            "equipos": equipos,
            "logo": logo,
            **stats  
        })

    return JSONResponse(content=tabla_posiciones)


def obtener_resultados():
    respuesta = requests.get(settings.url_resultados)
    respuesta.raise_for_status()
    data = respuesta.json()

    filtrados = [evento for evento in data["events"] if evento.get("league", {}).get("id") == "745"]

    resultados = []


    for resultado in filtrados:
        
        for competicion in resultado["competitions"]:
            estadio = competicion["venue"]
            dia = competicion["date"]
            equipo1 = competicion["competitors"][0]
            equipo2 = competicion["competitors"][1]

        resultados.append({
            "estadio": estadio,
            "equipo1": equipo1,
            "equipo2": equipo2,
            "dia": dia,
                
        })
    
    return JSONResponse(content=resultados)