"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  onClick?: () => void;
}

export default function Nav({ onClick }: NavProps) {
  const pathname = usePathname();

  const base =
    "block rounded-lg px-4 py-3 text-sm font-medium transition-all";

  const getClass = (path: string) =>
    `${base} ${
      pathname === path
        ? "bg-amber-200 text-amber-900"
        : "text-amber-950 hover:bg-amber-100 hover:text-amber-800"
    }`;

  return (
    <nav
      aria-label="Principal"
      className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4"
    >
      <Link href="/" onClick={onClick} className={getClass("/")}>
        Início
      </Link>

      <Link
        href="/contato"
        onClick={onClick}
        className={getClass("/contato")}
      >
        Contatos
      </Link>

      <Link
        href="/sobre"
        onClick={onClick}
        className={getClass("/sobre")}
      >
        Sobre a empresa
      </Link>

      <Link
        href="/produtos"
        onClick={onClick}
        className={getClass("/produtos")}
      >
        Lista de produtos
      </Link>
    </nav>
  );
}