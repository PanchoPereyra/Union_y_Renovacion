//IMPORT


//FUNCION
function Efemerides() {
    return (
        <>
            <section class="py-16">
                <div class="max-w-5xl mx-auto px-4 text-center">

                    {/* TITULO Y DESCRIPCION */}
                    <h2 class="text-3xl font-bold  mb-2">Efemérides Sindicales</h2>
                    <p class="text-gray-600 mb-12">
                        Fechas que marcan nuestra historia y fortalecen nuestra identidad como trabajadores organizados
                    </p>

                    {/* GRID EFEMERIDES */}
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* TARJETA 1 */}
                        <div class="bg-gradient-to-r from-orange-500 to-orange-300 p-6 rounded-2xl shadow hover:shadow-lg transition text-left flex gap-4">
                            <div class="flex-shrink-0">
                                <div class="bg-red-100 text-red-600 font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg">
                                    1°
                                </div>
                            </div>
                            <div>
                                <p class="text-sm text-gray-950">de Mayo</p>
                                <h3 class="text-lg font-semibold text-gray-950 mb-2">Día Internacional del Trabajador</h3>
                                <p class="text-gray-950">
                                    Conmemoración de la lucha obrera por la jornada de 8 horas y los derechos laborales.
                                    Un día para recordar a los mártires de Chicago y renovar nuestro compromiso con la justicia social.
                                </p>
                            </div>
                        </div>

                        {/* TARJETA 2 */}
                        <div class="bg-gradient-to-r from-orange-500 to-orange-300 p-6 rounded-2xl shadow hover:shadow-lg transition text-left flex gap-4">
                            <div class="flex-shrink-0">
                                <div class="bg-pink-100 text-pink-600 font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg">
                                    17
                                </div>
                            </div>
                            <div>
                                <p class="text-sm text-gray-950">de Octubre</p>
                                <h3 class="text-lg font-semibold text-gray-950 mb-2">Día de la Lealtad</h3>
                                <p class="text-gray-950">
                                    Fecha histórica del movimiento obrero que marcó un antes y un después en la historia de los trabajadores.
                                    Celebramos la unidad y la fuerza de la clase trabajadora.
                                </p>
                            </div>
                        </div>

                        {/* TARJETA 3 */}
                        <div class="bg-gradient-to-r from-orange-500 to-orange-300 p-6 rounded-2xl shadow hover:shadow-lg transition text-left flex gap-4">
                            <div class="flex-shrink-0">
                                <div class="bg-orange-100 text-orange-600 font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg">
                                    7
                                </div>
                            </div>
                            <div>
                                <p class="text-sm text-gray-950">de Noviembre</p>
                                <h3 class="text-lg font-semibold text-gray-950 mb-2">Día del Canillita</h3>
                                <p class="text-gray-950">
                                    Homenaje a todos los trabajadores de prensa y distribuidores de diarios que, madrugada tras madrugada,
                                    llevan información a cada rincón del país.
                                </p>
                            </div>
                        </div>

                        {/* TARJETA 4 */}
                        <div class="bg-gradient-to-r from-orange-500 to-orange-300 p-6 rounded-2xl shadow hover:shadow-lg transition text-left flex gap-4">
                            <div class="flex-shrink-0">
                                <div class="bg-green-100 text-green-600 font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg">
                                    21
                                </div>
                            </div>
                            <div>
                                <p class="text-sm text-gray-950">de Septiembre</p>
                                <h3 class="text-lg font-semibold text-gray-950 mb-2">Día del Estudiante</h3>
                                <p class="text-gray-600">
                                    Reconocimiento a la juventud trabajadora y estudiante que lucha por un futuro mejor, combinando estudio y trabajo con compromiso sindical.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

//EXPORTS
export default Efemerides