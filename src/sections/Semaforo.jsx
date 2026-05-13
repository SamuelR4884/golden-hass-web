function Semaforo() {
  return (
    <section className="bg-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-green-700 font-semibold uppercase tracking-wide mb-4">
            Sistema Semáforo
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1B4332] leading-tight">
            Aguacates organizados
            <br />
            según su maduración.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Recibe aguacates listos para hoy, para los próximos días
            y para el resto de la semana. Menos desperdicio,
            más control y mejor experiencia.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-[#E8F5E9] rounded-3xl p-10 text-center shadow-sm">

            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6"></div>

            <h3 className="text-3xl font-bold text-[#1B4332]">
              Verde
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Aguacates para consumir en varios días.
              Perfectos para mantener frescura durante la semana.
            </p>

          </div>

          <div className="bg-[#FFF8E1] rounded-3xl p-10 text-center shadow-sm">

            <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-6"></div>

            <h3 className="text-3xl font-bold text-[#1B4332]">
              Amarillo
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Aguacates próximos a su punto ideal.
              Recomendados para consumir pronto.
            </p>

          </div>

          <div className="bg-[#FFEBEE] rounded-3xl p-10 text-center shadow-sm">

            <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-6"></div>

            <h3 className="text-3xl font-bold text-[#1B4332]">
              Rojo
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Aguacates listos para consumir hoy.
              Máxima cremosidad y sabor.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Semaforo