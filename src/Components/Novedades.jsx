//IMPORT


//FUNCION
function Novedades() {
    return (
        <>
            <section class="max-w-7xl mx-auto px-4 py-12">
                <h2 class="text-3xl font-bold text-center mb-2">Últimas Novedades</h2>
                <p class="text-center text-gray-500 mb-10">
                    Mantente informado sobre las últimas noticias y comunicados del sindicato
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* TARJETA 1 */}
                    <div class="bg-gradient-to-r from-orange-500 to-orange-300 p-6 rounded-lg shadow-md">
                        <div class="flex items-center justify-between mb-4">
                            {/* <span class="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">Negociación</span> */}
                            <span class="text-sm text-gray-950">15 de Marzo, 2025</span>
                        </div>
                        <h3 class="text-lg font-semibold mb-2 text-gray-950">Acuerdo Salarial 2024</h3>
                        <p class="text-gray-600 mb-4">Se ha alcanzado un acuerdo histórico que beneficia a todos los trabajadores del sector.</p>
                        <a href="#" class="text-blue-600 hover:underline text-sm font-medium ">Leer más →</a>
                    </div>

                    {/* TARJETA 2 */}
                    <div class="bg-gradient-to-r from-orange-500 to-orange-300 p-6 rounded-lg shadow-md">
                        <div class="flex items-center justify-between mb-4">
                            {/* <span class="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">Beneficios</span> */}
                            <span class="text-sm text-gray-950">10 de Marzo, 2025</span>
                        </div>
                        <h3 class="text-lg font-semibold mb-2 text-gray-950">Nuevos Beneficios de Salud</h3>
                        <p class="text-gray-600 mb-4">Ampliación de la cobertura médica y programas de bienestar para afiliados.</p>
                        <a href="#" class="text-blue-600 hover:underline text-sm font-medium">Leer más →</a>
                    </div>

                    {/* TARJETA 3 */}
                    <div class="bg-gradient-to-r from-orange-500 to-orange-300 p-6 rounded-lg shadow-md">
                        <div class="flex items-center justify-between mb-4">
                            {/* <span class="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">Convocatoria</span> */}
                            <span class="text-sm text-gray-950">5 de Marzo, 2025</span>
                        </div>
                        <h3 class="text-lg font-semibold mb-2 text-gray-950">Asamblea General Convocada</h3>
                        <p class="text-gray-600 mb-4">Te esperamos en la próxima asamblea para decidir juntos el futuro de nuestra organización.</p>
                        <a href="#" class="text-blue-600 hover:underline text-sm font-medium">Leer más →</a>
                    </div>

                </div>
            </section>

        </>
    )
}

//EXPORTS
export default Novedades