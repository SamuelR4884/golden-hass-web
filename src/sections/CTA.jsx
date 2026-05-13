function CTA() {
  return (
    <section className="bg-white px-6 py-32">

      <div className="max-w-6xl mx-auto">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] px-10 py-24 text-center text-white">

          <div className="absolute top-0 left-0 w-full h-full opacity-20">

            <div className="absolute w-[400px] h-[400px] bg-white rounded-full blur-3xl -top-32 -left-32"></div>

            <div className="absolute w-[300px] h-[300px] bg-green-200 rounded-full blur-3xl bottom-0 right-0"></div>

          </div>

          <div className="relative z-10">

            <p className="uppercase tracking-wide text-green-100 font-semibold mb-4">
              Golden Hass
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Convierte la compra
              <br />
              de aguacates en algo fácil.
            </h2>

            <p className="mt-8 text-lg md:text-xl text-green-50 max-w-3xl mx-auto leading-relaxed">
              Menos desperdicio, más practicidad y aguacates listos
              exactamente cuando los necesitas.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <button className="bg-white text-[#1B4332] hover:bg-green-100 px-8 py-4 rounded-2xl font-semibold transition">
                Pedir por WhatsApp
              </button>

              <button className="border border-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition">
                Ver suscripciones
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default CTA