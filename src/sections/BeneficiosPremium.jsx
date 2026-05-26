import beneficios from "../assets/branding/beneficios-aguacate.png"

function BeneficiosPremium() {
  return (
    <section className="py-28 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-[#57B487] font-bold mb-4">
            Nutrición y bienestar
          </p>

          <h2 className="text-5xl font-black text-[#163828] mb-6">
            Más que un aguacate,
            <br />
            un alimento completo.
          </h2>

          <p className="text-xl text-[#587063] max-w-3xl mx-auto leading-relaxed">
            El aguacate Hass no solo destaca por su sabor.
            También aporta grasas saludables, vitaminas
            y nutrientes esenciales para una alimentación balanceada.
          </p>

        </div>

        {/* Contenido */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagen */}
          <div className="relative">

            <div className="absolute inset-0 bg-[#57B487]/10 blur-3xl rounded-full"></div>

            <img
              src={beneficios}
              alt="Beneficios del aguacate"
              className="relative z-10 rounded-[35px] shadow-2xl w-full"
            />

          </div>

          {/* Beneficios */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-[#F7FAF7] p-7 rounded-3xl">
              <h3 className="font-bold text-[#163828] text-xl mb-3">
                💚 Grasas saludables
              </h3>

              <p className="text-[#587063] leading-relaxed">
                Ayudan al corazón y aportan energía saludable.
              </p>
            </div>

            <div className="bg-[#F7FAF7] p-7 rounded-3xl">
              <h3 className="font-bold text-[#163828] text-xl mb-3">
                🥗 Rico en nutrientes
              </h3>

              <p className="text-[#587063] leading-relaxed">
                Contiene vitaminas, potasio y antioxidantes.
              </p>
            </div>

            <div className="bg-[#F7FAF7] p-7 rounded-3xl">
              <h3 className="font-bold text-[#163828] text-xl mb-3">
                ⚡ Energía natural
              </h3>

              <p className="text-[#587063] leading-relaxed">
                Ideal para desayunos, almuerzos y comidas fitness.
              </p>
            </div>

            <div className="bg-[#F7FAF7] p-7 rounded-3xl">
              <h3 className="font-bold text-[#163828] text-xl mb-3">
                🥑 Textura premium
              </h3>

              <p className="text-[#587063] leading-relaxed">
                Cremoso, suave y perfecto para múltiples recetas.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default BeneficiosPremium