import { MessageCircle } from "lucide-react"

function WhatsAppButton() {
  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 z-50"
    >

      <div className="bg-[#25D366] hover:scale-110 transition duration-300 shadow-2xl w-16 h-16 rounded-full flex items-center justify-center text-white">

        <MessageCircle size={32} />

      </div>

    </a>
  )
}

export default WhatsAppButton