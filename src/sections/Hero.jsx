import logo from "../assets/branding/logo-golden-hass.jpeg"

function Hero() {
  return (
    <section className="px-6 pt-10">
      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[45px] bg-gradient-to-br from-[#1F5C3F] via-[#2E7D57] to-[#57B487] px-8 py-24 text-white">

          {/* Brillos decorativos */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8FFFC3]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center text-center">

            {/* Logo */}
            <img
              src={logo}
              alt="Golden Hass"
              className="w-52 mb-8 drop-shadow-2xl"
            />

            {/* Texto pequeño */}
            <p className="uppercase tracking-[6px] text-sm text-[#D7FFE8] mb-6">
              Golden Hass Bogotá
            </p>

            {/* Título */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
              Convierte la compra
              <br />
              de aguacates en algo fácil.
            </h1>

            {/* Subtexto */}
            <p className="mt-8 text-lg md:text-2xl text-[#E8FFF3] max-w-3xl leading-relaxed">
              Sistema inteligente de maduración escalonada,
              menos desperdicio y aguacates listos exactamente
              cuando los necesitas.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-5 mt-12">

              <a
                href="https://wa.me/573026304734"
                target="_blank"
                className="bg-white text-[#1F5C3F] px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl"
              >
                Pedir por WhatsApp
              </a>

              <a
                href="#maduracion"
                className="border border-white/40 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#1F5C3F] transition duration-300"
              >
                Conocer el sistema
              </a>

            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-14">

              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/10">
                🥑 15 unidades premium
              </div>

              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/10">
                🚚 Domicilio gratis
              </div>

              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/10">
                ✅ Calidad garantizada
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero