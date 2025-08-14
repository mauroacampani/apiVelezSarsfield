
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    url_posiciones: str
    url_resultados: str

    model_config = SettingsConfigDict(
        env_file="app/.env",      # ruta al archivo .env
        env_file_encoding="utf-8"
    )

settings = Settings()
