export function Testimonials() {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-2xl font-bold mb-10">O que dizem meus clientes</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 bg-gray-800 rounded-lg">
          <p>Trabalho excelente, recomendo muito!</p>
          <span className="block mt-4 text-green-400">– Cliente X</span>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <p>Entrega rápida e de altíssima qualidade.</p>
          <span className="block mt-4 text-green-400">– Cliente Y</span>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <p>Super criativo e profissional.</p>
          <span className="block mt-4 text-green-400">– Cliente Z</span>
        </div>
      </div>
    </section>
  );
}
