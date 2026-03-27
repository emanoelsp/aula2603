"use client";

import { useState } from "react";
import Nav from "./nav";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fechaMenu = () => setMenuAberto(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-200 bg-amber-100 px-6 py-4">
      <div className="mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold text-amber-950">
          (Logo aqui)
        </div>

        {/* Menu desktop */}
        <div className="hidden md:block">
          <Nav />
        </div>

        {/* Botão mobile (SOME quando abre o menu) */}
        {!menuAberto && (
          <button
            className="flex md:hidden min-h-11 min-w-11 items-center justify-center text-amber-950"
            onClick={toggleMenu}
            aria-label="Abrir Menu"
          >
            <Menu size={28} />
          </button>
        )}
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden
        ${menuAberto ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={fechaMenu}
      />

      {/* Menu lateral */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(100%,20rem)] flex-col
        bg-white border-r border-amber-200
        shadow-2xl transform transition-transform duration-300 ease-out
        md:hidden
        ${menuAberto ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header do menu */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-amber-100">
          <span className="text-lg font-semibold text-amber-900">
            Menu
          </span>

          {/* ÚNICO botão de fechar */}
          <button
            onClick={fechaMenu}
            className="p-2 rounded-md hover:bg-amber-100 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 px-4 py-6">
          <Nav onClick={fechaMenu} />
        </div>
      </div>
    </header>
  );
}