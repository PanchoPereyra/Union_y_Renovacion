//IMPORT


//FUNCION
function Hero() {
    return (
        <>


            <section class="relative bg-center bg-cover h-screen">
                <div class="bg-[url(/imagenes/logo.jpg)] w-full h-full">

                    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                        <h1 class="text-5xl md:text-7xl font-bold mb-6 relative drop-shadow-lg">No construimos caminos, construimos futuro.</h1>
                        <p class="text-lg md:text-2xl max-w-2xl mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur laboriosam, doloribus voluptas.
                        </p>
                        {/* <a href="#" class=" bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition border-4 text-white">
                            Comenzar
                        </a> */}
                        <a href="#" class="!text-gray-950 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition border-4">
                            Comenzar
                        </a>
                    </div>

                </div>
            </section>


        </>
    )
}

//EXPORTS
export default Hero