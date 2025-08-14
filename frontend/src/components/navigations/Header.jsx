
export function Header() {
  return (

<header className="header-bg text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <img src="https://placehold.co/80x80" alt="Escudo del Club Atlético Vélez Sarsfield" className="mr-4"/>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold">Club Atlético Vélez Sarsfield</h1>
                        <p className="text-lg">Estadísticas Oficiales</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="text-center">
                        <p className="text-sm">Temporada 2023/2024</p>
                        <p className="text-sm">Actualizado: <span id="update-date">12/11/2023</span></p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}













