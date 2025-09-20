import Image from "next/image";

export function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-green-900 text-white text-center">
      <Image
        src="https://media.licdn.com/dms/image/v2/D4D03AQG9wJE-hF1OHQ/profile-displayphoto-shrink_200_200/B4DZeFEUlpGUAg-/0/1750284192535?e=1761177600&v=beta&t=jFCiITjtqVUVpVD3boYm0VZxkVhqyaNtmHl-3Sxgpzo"
        alt="Foto de perfil"
        className="w-40 h-40 rounded-full border-4 border-green-500 shadow-lg mb-6"
        width={160}
        height={160}
      />
      <h2 className="text-3xl font-bold">
        Olá, eu sou <span className="text-green-400">Fabiano Marcos</span>
      </h2>
      <p className="max-w-lg mt-4">
        Desenvolvedor Web | Mobile | Criador de soluções digitais modernas
      </p>
      <a
        href="#projects"
        className="mt-6 bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
      >
        Veja meus projetos
      </a>
    </section>
  );
}
