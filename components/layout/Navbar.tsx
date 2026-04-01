"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, HardHat } from "lucide-react";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Fornecedores", href: "/fornecedores" },
  { label: "Categorias", href: "/categorias" },
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0f1923] border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl shrink-0">
          <div className="bg-orange-500 rounded-lg p-1.5">
            <HardHat className="text-white w-5 h-5" />
          </div>
          <span className="tracking-tight">
            Engenharia<span className="text-orange-500">Hub</span>
          </span>
        </Link>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg text-sm font-medium transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/login"
            className="text-gray-400 hover:text-white hover:bg-white/10 text-sm px-4 py-2 rounded-lg transition-all font-medium"
          >
            Fazer Login
          </Link>
          <Link
            href="/cadastro"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2 rounded-lg shadow-sm shadow-orange-500/30 transition-all"
          >
            Registrar-se
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f1923] border-t border-white/5 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/5">
              <Link href="/login" className="border border-white/10 text-white hover:bg-white/10 text-sm px-4 py-2 rounded-lg text-center transition-all">
                Fazer Login
              </Link>
              <Link href="/cadastro" className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-lg text-center font-semibold transition-all">
                Registrar-se
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
