//IMPORT


//FUNCION
function Footer() {
    return (
        <>
 <footer class="bg-gradient-to-r from-orange-500 to-orange-300 text-white py-10">
      {/* Contenedor principal */}
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Descripción */}
        <div>
          <h2 class="text-lg font-semibold mb-2 text-gray-950">Unión y Renovación</h2>
          <p class="text-sm text-gray-950">
            Unidos por la defensa de los derechos laborales y el bienestar de todos los trabajadores.
            Juntos construimos un futuro más justo.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h2 class="text-lg font-semibold mb-2 text-gray-950">Contacto</h2>
          <ul class="text-sm text-gray-950 space-y-2">
            <li class="flex items-center gap-2">
              {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414m0 0L17.657 8.171M13.414 12.414L6 5m7.414 7.414L6 19"/></svg> */}
              Av. Principal 1234, Ciudad
            </li>
            <li class="flex items-center gap-2">
              {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a1 1 0 001.22 0L20 8m0 0a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2z"/></svg> */}
              (011) 1234-5678
            </li>
            <li class="flex items-center gap-2">
              {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0l-8 8m8-8l-8-8"/></svg> */}
              contacto@sindicatounido.org
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-gray-950">Síguenos</h2>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 hover:bg-gray-950 p-2 rounded-full transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .594 0 1.326V22.67c0 .732.593 1.326 1.325 1.326H12.82v-9.845H9.692V10.41h3.128V8.064c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.505 0-1.797.716-1.797 1.767v2.317h3.59l-.467 3.74h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .594 23.405 0 22.675 0z"/></svg>
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-950 p-2 rounded-full transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M24 4.56a9.83 9.83 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.922 4.922 0 0 0 16.616 3c-2.73 0-4.945 2.22-4.945 4.955 0 .39.043.77.127 1.137C7.728 8.85 4.1 6.88 1.67 3.913a4.93 4.93 0 0 0-.667 2.487c0 1.714.87 3.23 2.188 4.122a4.936 4.936 0 0 1-2.24-.62v.062c0 2.392 1.7 4.382 3.946 4.834a4.94 4.94 0 0 1-2.23.085c.63 1.963 2.446 3.39 4.6 3.43A9.9 9.9 0 0 1 0 19.54a13.97 13.97 0 0 0 7.548 2.212c9.056 0 14.008-7.514 14.008-14.034 0-.214-.004-.427-.013-.639A10.02 10.02 0 0 0 24 4.56z"/></svg>
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-950 p-2 rounded-full transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.428.403a4.92 4.92 0 0 1 1.772 1.147 4.92 4.92 0 0 1 1.147 1.772c.163.458.347 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.428a4.902 4.902 0 0 1-1.147 1.772 4.9 4.9 0 0 1-1.772 1.147c-.458.163-1.258.347-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.428-.403a4.902 4.902 0 0 1-1.772-1.147 4.902 4.902 0 0 1-1.147-1.772c-.163-.458-.347-1.258-.403-2.428C2.175 15.784 2.163 15.404 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.428A4.902 4.902 0 0 1 3.783 2.95 4.902 4.902 0 0 1 5.555 1.803c.458-.163 1.258-.347 2.428-.403C8.25 1.337 8.63 1.325 11.834 1.325h.333zm0 1.838c-3.17 0-3.55.012-4.797.07-1.02.047-1.577.217-1.945.363a3.097 3.097 0 0 0-1.126.732 3.09 3.09 0 0 0-.732 1.126c-.146.368-.316.925-.363 1.945-.058 1.247-.07 1.627-.07 4.797s.012 3.55.07 4.797c.047 1.02.217 1.577.363 1.945.173.435.405.81.732 1.126.316.327.691.559 1.126.732.368.146.925.316 1.945.363 1.247.058 1.627.07 4.797.07s3.55-.012 4.797-.07c1.02-.047 1.577-.217 1.945-.363a3.097 3.097 0 0 0 1.126-.732 3.09 3.09 0 0 0 .732-1.126c.146-.368.316-.925.363-1.945.058-1.247.07-1.627.07-4.797s-.012-3.55-.07-4.797c-.047-1.02-.217-1.577-.363-1.945a3.09 3.09 0 0 0-.732-1.126 3.09 3.09 0 0 0-1.126-.732c-.368-.146-.925-.316-1.945-.363-1.247-.058-1.627-.07-4.797-.07zm0 3.838a5.999 5.999 0 1 0 0 11.998 5.999 5.999 0 0 0 0-11.998zm0 9.9a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8zm7.2-10.7a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <hr className="border-gray-950 my-6 mx-6" />

      <div className="text-center text-sm text-gray-950">
        © 2024 Sindicato Unido. Todos los derechos reservados.
      </div>
    </footer>
        </>
    )
}

//EXPORTS
export default Footer