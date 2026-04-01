import Link from "next/link";
import { HardHat } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a2332] text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Navegação */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {["Início", "Fornecedores", "Categorias", "Solicitar Orçamento", "Sobre"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-orange-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Categorias</h4>
            <ul className="space-y-2 text-sm">
              {["Concreto", "Aço Estrutural", "Maquinário Pesado", "Elétrica", "Hidráulica"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-orange-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Suporte</h4>
            <ul className="space-y-2 text-sm">
              {["Fornecedores", "Signatário civil", "Solicitar orçamento", "Compras", "Contato"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-orange-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Institucional</h4>
            <ul className="space-y-2 text-sm">
              {["Engenharia Hub", "Informações de licenciamento", "Benefícios e editorial", "Normas e Indústria"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-orange-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <HardHat className="text-orange-500 w-5 h-5" />
            <span>Engenharia<span className="text-orange-500">Hub</span></span>
          </div>
          <p className="text-xs text-gray-500">
            © 2025 EngenhariaHub. Todos os direitos reservados. CNPJ: 12.345.678/0001-90
          </p>
          <div className="flex items-center gap-3">
            <Link href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">LinkedIn</Link>
            <Link href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
