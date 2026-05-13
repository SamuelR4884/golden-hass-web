function FAQ() {
  return (
    <section className="bg-[#F8FAF7] py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center">

          <p className="text-green-700 font-semibold uppercase tracking-wide mb-4">
            Preguntas frecuentes
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1B4332] leading-tight">
            Resolvemos tus dudas.
          </h2>

        </div>

        <div className="mt-20 space-y-6">

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h3 className="text-2xl font-bold text-[#1B4332]">
              ¿Cómo funciona el sistema semáforo?
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Organizamos los aguacates según su estado de maduración
              para que puedas consumirlos progresivamente durante la semana.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h3 className="text-2xl font-bold text-[#1B4332]">
              ¿Qué pasa si un aguacate sale malo?
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Contamos con garantía Golden Hass. Evaluamos el caso
              y buscamos darte una solución rápida.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h3 className="text-2xl font-bold text-[#1B4332]">
              ¿Hacen entregas a domicilio?
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Sí. Trabajamos con entregas programadas para asegurar
              practicidad y frescura.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h3 className="text-2xl font-bold text-[#1B4332]">
              ¿Puedo programar pedidos recurrentes?
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Sí. El sistema Hass Lover permite automatizar tus entregas
              según tu ritmo de consumo.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default FAQ