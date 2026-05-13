function Beneficios() {
  return (
    <section className="relative bg-white py-32 px-6 overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#F8FAF7] to-white"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-green-700 font-semibold uppercase tracking-wide mb-4">
            ¿Por qué Golden Hass?
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1B4332] leading-tight">
            Más que aguacates.
            <br />
            Una experiencia inteligente.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Diseñamos un sistema pensado para ahorrar tiempo,
            reducir desperdicio y garantizar calidad real.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <div className="bg-[#F8FAF7] hover:bg-[#EEF8EB] transition p-8 rounded-3xl shadow-sm hover:shadow-lg">

            <div className="text-5xl mb-6">🥑</div>

            <h3 className="text-2xl font-bold text-[#1B4332]">
              Calidad garantizada
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Seleccionamos cuidadosamente cada aguacate para asegurar mejor experiencia.
            </p>

          </div>

          <div className="bg-[#F8FAF7] hover:bg-[#EEF8EB] transition p-8 rounded-3xl shadow-sm hover:shadow-lg">

            <div className="text-5xl mb-6">⏳</div>

            <h3 className="text-2xl font-bold text-[#1B4332]">
              Menos desperdicio
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              El sistema escalonado evita que todos maduren al mismo tiempo.
            </p>

          </div>

          <div className="bg-[#F8FAF7] hover:bg-[#EEF8EB] transition p-8 rounded-3xl shadow-sm hover:shadow-lg">

            <div className="text-5xl mb-6">📦</div>

            <h3 className="text-2xl font-bold text-[#1B4332]">
              Compra práctica
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Recibe tu caja lista para toda la semana sin complicaciones.
            </p>

          </div>

          <div className="bg-[#F8FAF7] hover:bg-[#EEF8EB] transition p-8 rounded-3xl shadow-sm hover:shadow-lg">

            <div className="text-5xl mb-6">💬</div>

            <h3 className="text-2xl font-bold text-[#1B4332]">
              Atención cercana
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Soporte rápido por WhatsApp y garantía “Cero Lotería”.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Beneficios