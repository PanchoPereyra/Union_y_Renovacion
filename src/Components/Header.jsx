//IMPORT


//FUNCION
function Header() {
    return (
        <>
            <header className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-300 shadow-sm">
                {/* Logo + Título */}
                <div className="flex items-center space-x-3">
                    <img src="/imagenes/logo.jpg" alt="Logo" class="w-10 h-10 object-contain" />
                    <h1 className="text-lg font-semibold text-gray-800">Unión y Renovación</h1>
                </div>

                {/* Menú */}
                <nav className="flex space-x-6 text-sm text-gray-600">
                    <a href="#" className="hover:text-blue-600">Inicio</a>
                    <a href="#" className="hover:text-blue-600">Novedades</a>
                    <a href="#" className="hover:text-blue-600">Eventos</a>
                    <a href="#" className="hover:text-blue-600">Galería</a>
                    <a href="#" className="hover:text-blue-600">Efemérides</a>
                </nav>
            </header>
        </>
    )
}

//EXPORTS
export default Header