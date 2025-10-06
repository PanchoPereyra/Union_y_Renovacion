//IMPORT


//FUNCION
function ProximosEventos() {
    return (
        <>
            <section class="max-w-3xl mx-auto px-4 py-12">
                <h2 class="text-3xl font-bold text-center mb-2">Próximos Eventos</h2>
                <p class="text-center text-gray-400 mb-8">
                    Participa en las actividades y encuentros de nuestra comunidad sindical
                </p>

                <div class="flex flex-col gap-5">
                    {/* TARJETA 1 */}
                    {/* <!-- Tarjeta de evento --> */}
                    <div class="bg-gradient-to-r from-orange-500 to-orange-300 border-1 shadow-md rounded-lg p-6">
                        <h3 class="text-xl font-semibold mb-4 text-gray-950">Asamblea General Ordinaria</h3>
                        {/* <!-- Fecha y hora --> */}
                        <div class="flex flex-wrap items-center gap-6 text-gray-950 text-sm mb-2">
                            <div class="flex items-center gap-2">
                                {/* <!-- Icono calendario --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>25 de Marzo, 2024</span>
                            </div>
                            <div class="flex items-center gap-2">
                                {/* <!-- Icono reloj --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>18:00 hs</span>
                            </div>
                        </div>
                        {/* <!-- Ubicación --> */}
                        <div class="flex items-center text-gray-950 text-sm mb-4 gap-2">
                            {/* <!-- Icono ubicación --> */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                            </svg>
                            <span>Sede Central - Salón de Actos</span>
                        </div>
                        {/* <!-- Orden del día --> */}
                        <p class="text-gray-950 text-sm mb-4">
                            <strong>Orden del día:</strong> Informe de gestión, balance anual y renovación de autoridades.
                        </p>
                        {/* <!-- Botón --> */}
                        <a href="#" class="inline-block bg-gray-700 hover:bg-gray-950 text-white text-sm font-semibold px-4 py-2 rounded transition">
                            Más información
                        </a>
                    </div>

                    {/* TARJETA 2 */}
                    {/* <!-- Tarjeta de evento --> */}
                    <div class="bg-gradient-to-r from-orange-500 to-orange-300 border-1 shadow-md rounded-lg p-6">
                        <h3 class="text-xl font-semibold mb-4 text-gray-950">Asamblea General Ordinaria</h3>
                        {/* <!-- Fecha y hora --> */}
                        <div class="flex flex-wrap items-center gap-6 text-gray-950 text-sm mb-2">
                            <div class="flex items-center gap-2">
                                {/* <!-- Icono calendario --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>25 de Marzo, 2024</span>
                            </div>
                            <div class="flex items-center gap-2">
                                {/* <!-- Icono reloj --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>18:00 hs</span>
                            </div>
                        </div>
                        {/* <!-- Ubicación --> */}
                        <div class="flex items-center text-gray-950 text-sm mb-4 gap-2">
                            {/* <!-- Icono ubicación --> */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                            </svg>
                            <span>Sede Central - Salón de Actos</span>
                        </div>
                        {/* <!-- Orden del día --> */}
                        <p class="text-gray-950 text-sm mb-4">
                            <strong>Orden del día:</strong> Informe de gestión, balance anual y renovación de autoridades.
                        </p>
                        {/* <!-- Botón --> */}
                        <a href="#" class="inline-block bg-gray-700 hover:bg-gray-950 text-white text-sm font-semibold px-4 py-2 rounded transition">
                            Más información
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

//EXPORTS
export default ProximosEventos