"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Clock,
  CheckCircle,
  Building2,
  Bell,
  Settings,
  LogOut,
  HardHat,
  ChevronRight,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

const compradorLinks = [
  { label: "Visão Geral", href: "/dashboard/comprador", icon: LayoutDashboard },
  { label: "Minhas RFQs", href: "/dashboard/comprador/rfqs", icon: FileText },
  { label: "Aguardando Resposta", href: "/dashboard/comprador/aguardando", icon: Clock },
  { label: "Concluídas", href: "/dashboard/comprador/concluidas", icon: CheckCircle },
  { label: "Mensagens", href: "/dashboard/comprador/mensagens", icon: MessageSquare },
];

const fornecedorLinks = [
  { label: "Visão Geral", href: "/dashboard/fornecedor", icon: LayoutDashboard },
  { label: "RFQs Recebidas", href: "/dashboard/fornecedor/rfqs", icon: FileText },
  { label: "Respondidas", href: "/dashboard/fornecedor/respondidas", icon: CheckCircle },
  { label: "Desempenho", href: "/dashboard/fornecedor/desempenho", icon: TrendingUp },
  { label: "Mensagens", href: "/dashboard/fornecedor/mensagens", icon: MessageSquare },
  { label: "Meu Perfil", href: "/dashboard/fornecedor/perfil", icon: Building2 },
];

interface DashboardSidebarProps {
  role: "comprador" | "fornecedor";
  userName?: string;
  userEmail?: string;
}

export function DashboardSidebar({ role, userName = "João Silva", userEmail = "joao@email.com" }: DashboardSidebarProps) {
  const pathname = usePathname();
  const links = role === "comprador" ? compradorLinks : fornecedorLinks;

  return (
    <aside className="w-64 min-h-screen bg-[#0f1923] flex flex-col shrink-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg">
          <div className="bg-orange-500 rounded-lg p-1.5">
            <HardHat className="text-white w-4 h-4" />
          </div>
          <span>Engenharia<span className="text-orange-500">Hub</span></span>
        </Link>
      </div>

      {/* Role Badge */}
      <div className="px-6 py-4 border-b border-white/5">
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
          role === "comprador"
            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
            : "bg-orange-500/20 text-orange-300 border border-orange-500/30"
        }`}>
          {role === "comprador" ? "🏗️ Comprador" : "🏭 Fornecedor"}
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                isActive
                  ? "bg-orange-500/15 text-orange-400 border border-orange-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-orange-400" : "text-gray-500 group-hover:text-gray-300"}`} />
              {label}
              {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto text-orange-400" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-white/5 space-y-1">
        <Link href="/dashboard/notificacoes" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all">
          <Bell className="w-4 h-4 text-gray-500" />
          Notificações
          <span className="ml-auto bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">3</span>
        </Link>
        <Link href="/dashboard/configuracoes" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all">
          <Settings className="w-4 h-4 text-gray-500" />
          Configurações
        </Link>

        {/* User */}
        <div className="mt-3 pt-3 border-t border-white/5">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {userName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs font-semibold truncate">{userName}</div>
              <div className="text-gray-500 text-xs truncate">{userEmail}</div>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/5 transition-all mt-1">
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </div>
    </aside>
  );
}
