const projects = [
  { title: "App Financeiro", img: "/proj1.png" },
  { title: "E-commerce", img: "/proj2.png" },
  { title: "Dashboard", img: "/proj3.png" },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-2xl font-bold mb-10">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
          >
            {/* <img src={p.img} alt={p.title} /> */}
            <h3 className="mt-4 font-semibold">{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
