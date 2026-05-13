function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50">

      <nav className="max-w-7xl mx-auto mt-4 px-6">

        <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-sm rounded-3xl px-8 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-[#1B4332]">
              Golden Hass
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[#1B4332] font-medium">

            <a href="#" className="hover:text-green-700 transition">
              Inicio
            </a>

            <a href="#" className="hover:text-green-700 transition">
              Cómo funciona
            </a>

            <a href="#" className="hover:text-green-700 transition">
              Suscripción
            </a>

            <a href="#" className="hover:text-green-700 transition">
              Contacto
            </a>

          </div>

          <button className="bg-[#2D6A4F] hover:bg-[#1B4332] text-white px-5 py-3 rounded-2xl font-semibold transition">
            Pedir ahora
          </button>

        </div>

      </nav>

    </header>
  )
}

export default Navbar