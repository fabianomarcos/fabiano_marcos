const projects = [
  {
    title: 'Cakto',
    url: 'https://sso.cakto.com.br/accounts/login/?next=https%3A%2F%2Fapp.cakto.com.br%2Fdashboard',
    description:
      'Plataforma de afiliados e marketing digital, além de hospedar cursos e pdfs. Participei do desenvolvimento front-end utilizando React.js e Next.js.',
  },
  {
    title: 'Posso Estudar Educação',
    url: 'https://www.possoestudareducacao.com.br/',
    description:
      'Plataforma de inscrição de cursos. Realizei o desenvolvimento front-end utilizando React.js e do desenvolvimento back-end com Node.js.',
  },
  {
    title: 'Bill Track Investments',
    url: 'https://bill-track-five.vercel.app',
    description: `Plataforma de controle de finanças pessoais. Desenvolvi a plataforma utilizando tanto para o front-end como o back-end com Next.js.
      Utilizei banco postgresql com prisma como ORM. A plataforma conta com autenticação de usuários, dashboard com gráficos e controle de despesas e receitas.
      A plataforma ainda está em desenvolvimento`,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-2xl font-bold mb-10">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <h3 className="mt-4 font-semibold">{p.title}</h3>
            <a href={p.url} target="_blank" rel="noopener noreferrer" />
            <p className="p-2">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
