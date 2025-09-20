export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-2xl font-bold mb-6">Entre em contato</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="p-3 rounded bg-black border border-green-500"
        />
        <input
          type="email"
          placeholder="Seu email"
          className="p-3 rounded bg-black border border-green-500"
        />
        <textarea
          placeholder="Sua mensagem"
          className="p-3 rounded bg-black border border-green-500"
          rows={4}
        ></textarea>
        <button className="bg-green-500 text-black py-3 rounded font-bold hover:bg-green-400 transition">
          Enviar
        </button>
      </form>
    </section>
  );
}
