import flyer from "../assets/branding/flyer-promocional.jpeg"
import customer from "../assets/branding/customer-profile.jpeg"
import maduracion from "../assets/branding/maduracion-hass.png"

function Galeria() {
  return (
    <section className="py-28 px-6 bg-[#F7FAF7]">

      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-[#57B487] font-bold mb-4">
            Golden Hass Experience
          </p>

          <h2 className="text-5xl font-black text-[#163828] mb-6">
            Una marca pensada
            <br />
            para transformar la experiencia.
          </h2>

          <p className="text-xl text-[#587063] max-w-3xl mx-auto leading-relaxed">
            Golden Hass combina calidad, diseño,
            organización y tecnología para ofrecer
            una nueva forma de consumir aguacate Hass.
          </p>

        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group overflow-hidden rounded-[35px] bg-white shadow-xl">

            <div className="overflow-hidden">
              <img
                src={flyer}
                alt="Flyer Golden Hass"
                className="w-full h-[500px] object-contain bg-white group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-black text-[#163828] mb-4">
                Promoción y branding
              </h3>

              <p className="text-[#587063] leading-relaxed">
                Una identidad moderna enfocada en calidad,
                practicidad y experiencia premium.
              </p>
            </div>

          </div>

          {/* Card 2 */}
          <div className="group overflow-hidden rounded-[35px] bg-white shadow-xl">

            <div className="overflow-hidden">
              <img
                src={customer}
                alt="Customer Profile"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-black text-[#163828] mb-4">
                Pensado para el cliente
              </h3>

              <p className="text-[#587063] leading-relaxed">
                Cada parte del proyecto nace de necesidades
                reales detectadas en consumidores.
              </p>
            </div>

          </div>

          {/* Card 3 */}
          <div className="group overflow-hidden rounded-[35px] bg-white shadow-xl">

            <div className="overflow-hidden">
              <img
                src={maduracion}
                alt="Maduración Hass"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-black text-[#163828] mb-4">
                Maduración perfecta
              </h3>

              <p className="text-[#587063] leading-relaxed">
                Nuestro sistema escalonado permite
                tener aguacates listos para cada momento de la semana.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Galeria