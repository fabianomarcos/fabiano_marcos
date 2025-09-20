const services = [
  { title: "UI/UX Designer", desc: "Designs modernos e responsivos." },
  { title: "Logo Designer", desc: "Identidades visuais criativas." },
  { title: "Web Design", desc: "Sites rápidos e funcionais." },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-black text-white text-center">
      <h2 className="text-2xl font-bold mb-10">O que faço</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 border border-green-500 rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-green-400">{s.title}</h3>
            <p className="mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
