import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import {
  FileText, CheckCircle, TrendingUp, Star,
  ChevronRight, MapPin, Calendar, Clock, Building2
} from "lucide-react";
import Link from "next/link";

const rfqsRecebidas = [
  {
    id: "RFQ-088",
    title: "Concreto Usinado — Fundação Residencial",
    buyer: "Construtora Alpha Ltda.",
    location: "São Paulo, SP",
    deadline: "03 Abr 2026",
    status: "pending",
    statusLabel: "Aguardando Resposta",
    statusColor: "bg-yellow-100 text-yellow-700",
    value: "Sob consulta",
  },
  {
    id: "RFQ-087",
    title: "Pré-moldados Especiais — Galpão 2.000m²",
    buyer: "InfraMax Engenharia",
    location: "Guarulhos, SP",
    deadline: "05 Abr 2026",
    status: "responded",
    statusLabel: "Proposta Enviada",
    statusColor: "bg-emerald-100 text-emerald-700",
    value: "R$ 84.000",
  },
  {
    id: "RFQ-086",
    title: "Concreto FCK 40 — Pilares Estruturais",
    buyer: "Engenharia Beta S/A",
    location: "Campinas, SP",
    deadline: "01 Abr 2026",
    status: "pending",
    statusLabel: "Aguardando Resposta",
    statusColor: "bg-yellow-100 text-yellow-700",
    value: "Sob consulta",
  },
  {
    id: "RFQ-085",
    title: "Fornecimento de Concreto Bombeável",
    buyer: "Obra Nova Construções",
    location: "São Paulo, SP",
    deadline: "28 Mar 2026",
    status: "closed",
    statusLabel: "Encerrada",
    statusColor: "bg-gray-100 text-gray-600",
    value: "R$ 42.500",
  },
  {
    id: "RFQ-084",
    title: "Laje Pré-moldada — Residencial 5 pavimentos",
    buyer: "Gomes & Silva Construtora",
    location: "São Paulo, SP",
    deadline: "25 Mar 2026",
    status: "won",
    statusLabel: "Proposta Aceita ✓",
    statusColor: "bg-emerald-100 text-emerald-700",
    value: "R$ 127.000",
  },
];

const recentActivity = [
  { text: "InfraMax Engenharia visualizou sua proposta na RFQ-087", time: "há 30 min", dot: "bg-blue-500" },
  { text: "Nova RFQ disponível na sua categoria: Concreto Usinado", time: "há 1 hora", dot: "bg-orange-500" },
  { text: "Sua proposta da RFQ-084 foi aceita! 🎉", time: "há 3 horas", dot: "bg-emerald-500" },
  { text: "Prazo da RFQ-088 se encerra em 2 dias", time: "há 1 dia", dot: "bg-yellow-500" },
];

export default function DashboardFornecedorPage() {
  return (
    <div className="flex min-h-screen bg-gray-50" style={{ colorScheme: "light" }}>
      <DashboardSidebar
        role="fornecedor"
        userName="Carlos Eduardo"
        userEmail="carlos@concreto.com"
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">Painel do Fornecedor</h1>
            <p className="text-sm text-gray-500 mt-0.5">Bem-vindo, Carlos! Você tem 2 RFQs aguardando resposta. ⚡</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-700">Perfil Ativo</span>
            </div>
            <Link
              href="/dashboard/fornecedor/perfil"
              className="text-sm font-semibold text-orange-500 hover:text-orange-600 border border-orange-200 hover:border-orange-400 px-4 py-2 rounded-xl transition-all"
            >
              Editar Perfil
            </Link>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard title="RFQs Recebidas"   value={18}  subtitle="Este mês"          icon={FileText}    color="blue"   trend={{ value: "+5 esta semana", positive: true }} />
            <StatsCard title="Propostas Enviadas" value={12} subtitle="Este mês"          icon={CheckCircle} color="green"  trend={{ value: "67% de resposta", positive: true }} />
            <StatsCard title="Taxa de Resposta"  value="67%" subtitle="Média da plataforma: 45%" icon={TrendingUp} color="orange" trend={{ value: "acima da média", positive: true }} />
            <StatsCard title="Avaliação Média"   value="4.9" subtitle="128 avaliações"    icon={Star}        color="purple" trend={{ value: "top 5%", positive: true }} />
          </div>

          {/* Taxa de resposta visual */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900 text-base">Desempenho do Mês</h2>
              <span className="text-xs text-gray-400">Março 2026</span>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Taxa de Resposta", value: 67, color: "bg-orange-500", textColor: "text-orange-600" },
                { label: "Taxa de Conversão", value: 42, color: "bg-blue-500", textColor: "text-blue-600" },
                { label: "Satisfação", value: 98, color: "bg-emerald-500", textColor: "text-emerald-600" },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                    <span className={`text-sm font-extrabold ${metric.textColor}`}>{metric.value}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${metric.color} rounded-full transition-all duration-700`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RFQs + Activity */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* RFQs Recebidas */}
            <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                <h2 className="font-bold text-gray-900 text-base">RFQs Recebidas</h2>
                <Link href="/dashboard/fornecedor/rfqs" className="text-xs text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1">
                  Ver todas <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="divide-y divide-gray-50">
                {rfqsRecebidas.map((rfq) => (
                  <div key={rfq.id} className="px-6 py-4 hover:bg-gray-50/50 transition-colors group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-mono text-gray-400">{rfq.id}</span>
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${rfq.statusColor}`}>
                            {rfq.statusLabel}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm truncate mb-2">{rfq.title}</h3>
                        <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1"><Building2 className="w-3 h-3" />{rfq.buyer}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{rfq.location}</span>
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />Prazo: {rfq.deadline}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-sm font-bold text-gray-900">{rfq.value}</div>
                        {rfq.status === "pending" && (
                          <Link
                            href={`/dashboard/fornecedor/rfq/${rfq.id}`}
                            className="mt-2 inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                          >
                            Responder
                          </Link>
                        )}
                        {rfq.status === "responded" && (
                          <Link
                            href={`/dashboard/fornecedor/rfq/${rfq.id}`}
                            className="mt-2 inline-block text-xs text-orange-500 hover:text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            Ver proposta →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity + Tip */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-50">
                  <h2 className="font-bold text-gray-900 text-base">Atividade Recente</h2>
                </div>
                <div className="p-6 space-y-5">
                  {recentActivity.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="mt-1.5 shrink-0">
                        <div className={`w-2 h-2 rounded-full ${item.dot}`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                        <span className="text-xs text-gray-400 mt-0.5 block">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tip Card */}
              <div className="bg-gradient-to-br from-[#0f1923] to-[#1a2332] rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wide">Atenção</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  Fornecedores que respondem em menos de 24h têm <span className="text-orange-400 font-bold">3x mais chances</span> de ter a proposta aceita.
                </p>
                <Link href="/dashboard/fornecedor/rfqs" className="text-xs text-orange-400 hover:text-orange-300 font-semibold">
                  Responder RFQs pendentes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
