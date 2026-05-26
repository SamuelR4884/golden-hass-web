import maduracion from "../assets/branding/maduracion-hass.png"

function Maduracion() {
  return (
    <section
      id="maduracion"
      className="py-28 px-6 bg-[#F7FAF7]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>

            <p className="uppercase tracking-[5px] text-[#57B487] font-bold mb-5">
              Sistema Golden Hass
            </p>

            <h2 className="text-5xl font-black text-[#163828] leading-tight mb-8">
              Aguacates listos
              <br />
              exactamente cuando
              <br />
              los necesitas.
            </h2>

            <p className="text-xl text-[#486556] leading-relaxed mb-10">
              Nuestro sistema de maduración escalonada permite
              que cada aguacate llegue en el momento ideal.
              Así evitamos desperdicio, ahorras dinero y siempre
              tienes aguacates perfectos para consumir.
            </p>

            {/* Tarjetas */}
            <div className="space-y-5">

              <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E5EFE7]">
                <h3 className="font-bold text-[#163828] text-lg mb-1">
                  🥑 Maduración inteligente
                </h3>

                <p className="text-[#5A7264]">
                  Diferentes niveles de maduración para toda la semana.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E5EFE7]">
                <h3 className="font-bold text-[#163828] text-lg mb-1">
                  🚚 Menos desperdicio
                </h3>

                <p className="text-[#5A7264]">
                  Evita perder aguacates dañados o pasados.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E5EFE7]">
                <h3 className="font-bold text-[#163828] text-lg mb-1">
                  ✅ Calidad garantizada
                </h3>

                <p className="text-[#5A7264]">
                  Seleccionamos cuidadosamente cada unidad premium.
                </p>
              </div>

            </div>

          </div>

          {/* Imagen */}
          <div className="relative">

            <div className="absolute inset-0 bg-[#57B487]/20 blur-3xl rounded-full"></div>

            <img
              src={maduracion}
              alt="Maduración Hass"
              className="relative z-10 rounded-[35px] shadow-2xl w-full"
            />

          </div>

        </div>
      </div>
    </section>
  )
}

export default Maduracion