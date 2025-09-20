"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Fabiano Marcos - Dev</h1>
        <nav className="flex gap-6">
          <Link href="#about">Sobre</Link>
          <Link href="#services">Serviços</Link>
          <Link href="#projects">Projetos</Link>
          <Link href="#contact">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
