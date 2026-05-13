function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F4FAF2] via-[#EEF8EB] to-white flex items-center justify-center px-6 pt-32 overflow-hidden">

      <div className="max-w-5xl text-center relative">

        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-200/30 blur-3xl rounded-full"></div>

        <div className="relative z-10">

          <p className="text-green-700 font-semibold mb-6 tracking-wide uppercase">
            Golden Hass
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1B4332] leading-tight">
            Aguacates listos
            <br />
            cuando los necesitas.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sistema inteligente de maduración escalonada con garantía total,
            menos desperdicio y entrega práctica para tu hogar.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <button className="bg-[#2D6A4F] hover:bg-[#1B4332] text-white px-8 py-4 rounded-2xl font-semibold transition">
              Pedir por WhatsApp
            </button>

            <button className="border border-[#2D6A4F] text-[#2D6A4F] px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition">
              Conocer el sistema
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero