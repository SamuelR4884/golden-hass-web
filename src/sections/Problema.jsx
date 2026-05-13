function Problema() {
  return (
    <section className="bg-[#F8FAF7] py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-green-700 font-semibold uppercase tracking-wide mb-4">
              El problema
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-[#1B4332] leading-tight">
              Comprar aguacates
              <br />
              no debería sentirse
              <br />
              como una lotería.
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Muchas personas pierden tiempo eligiendo aguacates uno por uno,
              sin saber realmente cómo están por dentro o cuándo consumirlos.
              El resultado suele ser desperdicio, frustración y dinero perdido.
            </p>

          </div>

          <div className="grid gap-6">

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1B4332]">
                Desperdicio de comida
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Muchos aguacates maduran todos al mismo tiempo y terminan dañándose.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1B4332]">
                Fatiga al escoger
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Elegir aguacates manualmente consume tiempo y genera incertidumbre.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1B4332]">
                Desconfianza en la calidad
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                El cliente siente que comprar aguacates sigue siendo una apuesta.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Problema