const API_BASE_URL = "http://127.0.0.1:8000"; // Cambiar por tu dominio en producción

export async function fetchPosiciones() {
  try {
    const response = await fetch(`${API_BASE_URL}/posiciones/`);
    if (!response.ok) {
      throw new Error("Error al obtener posiciones");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}