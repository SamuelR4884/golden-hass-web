function Suscripcion() {
  return (
    <section id="suscripcion" className="bg-[#F4FAF2] py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-green-700 font-semibold uppercase tracking-wide mb-4">
            Hass Lover
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1B4332] leading-tight">
            Tu suministro de aguacates,
            <br />
            sin volver a preocuparte.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Programa entregas automáticas según tu ritmo de consumo
            y recibe aguacates listos durante toda la semana.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">

            <p className="text-green-700 font-semibold mb-4">
              Personal
            </p>

            <h3 className="text-4xl font-bold text-[#1B4332]">
              Caja Mini
            </h3>

            <p className="mt-4 text-gray-600">
              Ideal para estudiantes, personas independientes o consumo ligero.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">

              <li>✔ 6 aguacates Hass</li>
              <li>✔ Maduración escalonada</li>
              <li>✔ Entrega programada</li>
              <li>✔ Garantía Golden Hass</li>

            </ul>

            <button className="w-full mt-10 bg-[#2D6A4F] hover:bg-[#1B4332] text-white py-4 rounded-2xl font-semibold transition">
              Elegir plan
            </button>

          </div>

          <div className="bg-[#1B4332] text-white rounded-3xl p-10 shadow-xl scale-105">

            <p className="text-green-200 font-semibold mb-4">
              Más popular
            </p>

            <h3 className="text-4xl font-bold">
              Caja Familiar
            </h3>

            <p className="mt-4 text-green-100">
              Perfecta para hogares que consumen aguacate constantemente.
            </p>

            <ul className="mt-8 space-y-4 text-green-50">

              <li>✔ 15 aguacates Hass</li>
              <li>✔ Sistema Semáforo</li>
              <li>✔ Entregas automáticas</li>
              <li>✔ Reposición garantizada</li>

            </ul>

            <button className="w-full mt-10 bg-white text-[#1B4332] py-4 rounded-2xl font-semibold hover:bg-green-100 transition">
              Elegir plan
            </button>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">

            <p className="text-green-700 font-semibold mb-4">
              Compartido
            </p>

            <h3 className="text-4xl font-bold text-[#1B4332]">
              Caja Dúo
            </h3>

            <p className="mt-4 text-gray-600">
              Diseñada para parejas o pequeños hogares con consumo moderado.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">

              <li>✔ 10 aguacates Hass</li>
              <li>✔ Menos desperdicio</li>
              <li>✔ Frecuencia flexible</li>
              <li>✔ Atención personalizada</li>

            </ul>

            <button className="w-full mt-10 bg-[#2D6A4F] hover:bg-[#1B4332] text-white py-4 rounded-2xl font-semibold transition">
              Elegir plan
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Suscripcion