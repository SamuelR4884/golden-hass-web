function Footer() {
  return (
    <footer className="bg-[#102A1F] text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-4 gap-12">

          <div>

            <h2 className="text-3xl font-bold">
              Golden Hass
            </h2>

            <p className="mt-6 text-green-100 leading-relaxed">
              Sistema inteligente de abastecimiento de aguacate Hass
              con maduración escalonada, garantía y entrega práctica.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Navegación
            </h3>

            <ul className="space-y-4 text-green-100">

              <li>
                <a href="#" className="hover:text-white transition">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Sistema Semáforo
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Suscripción
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Garantía
                </a>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contacto
            </h3>

            <ul className="space-y-4 text-green-100">

              <li>WhatsApp Business</li>

              <li>Bogotá, Colombia</li>

              <li>goldenhass@email.com</li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Hass Lover
            </h3>

            <p className="text-green-100 leading-relaxed">
              Únete al sistema de suscripción y recibe aguacates listos
              para toda la semana.
            </p>

            <button className="mt-6 bg-[#2D6A4F] hover:bg-[#40916C] px-6 py-4 rounded-2xl font-semibold transition">
              Pedir ahora
            </button>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4 text-green-200 text-sm">

          <p>
            © 2026 Golden Hass. Todos los derechos reservados.
          </p>

          <p>
            Diseñado para transformar la experiencia de comprar aguacates.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer