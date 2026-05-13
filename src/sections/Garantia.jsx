function Garantia() {
  return (
    <section className="bg-[#1B4332] py-32 px-6 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-wide text-green-200 font-semibold mb-4">
              Garantía Golden Hass
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Cero lotería.
              <br />
              Cero miedo.
            </h2>

            <p className="mt-8 text-lg text-green-100 leading-relaxed max-w-2xl">
              Sabemos que comprar aguacates puede sentirse como una apuesta.
              Por eso en Golden Hass asumimos el riesgo contigo.
              Si algún aguacate llega en mal estado comprobable,
              lo reponemos.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <button className="bg-white text-[#1B4332] px-8 py-4 rounded-2xl font-semibold hover:bg-green-100 transition">
                Pedir ahora
              </button>

              <button className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                Cómo funciona
              </button>

            </div>

          </div>

          <div className="relative">

            <div className="bg-[#2D6A4F] rounded-[40px] p-10 shadow-2xl">

              <div className="space-y-6">

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-2xl font-bold">
                    ✔ Calidad revisada
                  </h3>

                  <p className="mt-2 text-green-100">
                    Seleccionamos cada caja antes de la entrega.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-2xl font-bold">
                    ✔ Maduración escalonada
                  </h3>

                  <p className="mt-2 text-green-100">
                    Aguacates organizados para toda la semana.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-2xl font-bold">
                    ✔ Reposición garantizada
                  </h3>

                  <p className="mt-2 text-green-100">
                    Si sale malo, buscamos solucionarlo contigo.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Garantia