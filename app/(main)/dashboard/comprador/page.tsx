import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import {
  FileText, Clock, CheckCircle, TrendingUp,
  Plus, ChevronRight, MapPin, Calendar, Building2
} from "lucide-react";
import Link from "next/link";

const rfqs = [
  {
    id: "RFQ-001",
    title: "Concreto Pré-moldado — Galpão Industrial",
    status: "collecting",
    statusLabel: "Coletando Propostas",
    statusColor: "bg-blue-100 text-blue-700",
    proposals: 4,
    deadline: "02 Abr 2026",
    location: "São Paulo, SP",
    suppliers: 6,
  },
  {
    id: "RFQ-002",
    title: "Aço Estrutural — Ponte Metálica",
    status: "open",
    statusLabel: "Aberta",
    statusColor: "bg-orange-100 text-orange-700",
    proposals: 1,
    deadline: "05 Abr 2026",
    location: "Guarulhos, SP",
    suppliers: 4,
  },
  {
    id: "RFQ-003",
    title: "Escavadeira Hidráulica — Locação 30 dias",
    status: "closed",
    statusLabel: "Concluída",
    statusColor: "bg-emerald-100 text-emerald-700",
    proposals: 7,
    deadline: "28 Mar 2026",
    location: "Campinas, SP",
    suppliers: 8,
  },
  {
    id: "RFQ-004",
    title: "Elétrica Industrial — Subestação 500kVA",
    status: "collecting",
    statusLabel: "Coletando Propostas",
    statusColor: "bg-blue-100 text-blue-700",
    proposals: 2,
    deadline: "08 Abr 2026",
    location: "São Paulo, SP",
    suppliers: 5,
  },
  {
    id: "RFQ-005",
    title: "Andaimes — Fachada Edifício 20 andares",
    status: "draft",
    statusLabel: "Rascunho",
    statusColor: "bg-gray-100 text-gray-600",
    proposals: 0,
    deadline: "—",
    location: "São Paulo, SP",
    suppliers: 0,
  },
];

const recentActivity = [
  { text: "Nova proposta de MaxMix Concreto para RFQ-001", time: "há 12 min", dot: "bg-blue-500" },
  { text: "RFQ-003 foi marcada como concluída", time: "há 2 horas", dot: "bg-emerald-500" },
  { text: "Global Pre-cast aceitou sua RFQ-002", time: "há 5 horas", dot: "bg-orange-500" },
  { text: "Prazo da RFQ-004 se encerra em 3 dias", time: "há 1 dia", dot: "bg-yellow-500" },
];

export default function DashboardCompradorPage() {
  return (
    <div className="flex min-h-screen bg-gray-50" style={{ colorScheme: "light" }}>
      <DashboardSidebar role="comprador" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">Painel do Comprador</h1>
            <p className="text-sm text-gray-500 mt-0.5">Bem-vindo de volta, João! 👋</p>
          </div>
          <Link
            href="/dashboard/comprador/nova-rfq"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm shadow-orange-200 transition-all"
          >
            <Plus className="w-4 h-4" /> Nova RFQ
          </Link>
        </header>

        <div className="p-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard title="RFQs Abertas"       value={3}   subtitle="Em andamento"       icon={FileText}    color="blue"   trend={{ value: "+2 esta semana", positive: true }} />
            <StatsCard title="Aguard. Resposta"    value={8}   subtitle="Propostas recebidas" icon={Clock}       color="orange" />
            <StatsCard title="RFQs Concluídas"     value={12}  subtitle="Último mês"          icon={CheckCircle} color="green"  trend={{ value: "+3 vs mês ant.", positive: true }} />
            <StatsCard title="Economia Média"      value="18%" subtitle="vs. orçamento inicial"icon={TrendingUp}  color="purple" trend={{ value: "ótimo resultado", positive: true }} />
          </div>

          {/* RFQs Table + Activity */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* RFQs List */}
            <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                <h2 className="font-bold text-gray-900 text-base">Minhas RFQs</h2>
                <Link href="/dashboard/comprador/rfqs" className="text-xs text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1">
                  Ver todas <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="divide-y divide-gray-50">
                {rfqs.map((rfq) => (
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
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{rfq.location}</span>
                          {rfq.deadline !== "—" && (
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />Prazo: {rfq.deadline}</span>
                          )}
                          {rfq.suppliers > 0 && (
                            <span className="flex items-center gap-1"><Building2 className="w-3 h-3" />{rfq.suppliers} fornecedores</span>
                          )}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        {rfq.proposals > 0 ? (
                          <>
                            <div className="text-lg font-extrabold text-gray-900">{rfq.proposals}</div>
                            <div className="text-xs text-gray-400">propostas</div>
                          </>
                        ) : (
                          <div className="text-xs text-gray-300">sem propostas</div>
                        )}
                        <Link
                          href={`/dashboard/comprador/rfq/${rfq.id}`}
                          className="mt-2 inline-block text-xs text-orange-500 hover:text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Ver detalhes →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Feed */}
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

              {/* Quick Actions */}
              <div className="px-6 pb-6">
                <div className="bg-gradient-to-br from-[#0f1923] to-[#1a2332] rounded-xl p-4 text-white">
                  <div className="text-xs font-semibold text-orange-400 mb-1">💡 Dica rápida</div>
                  <p className="text-xs text-gray-300 leading-relaxed mb-3">
                    Você tem 2 RFQs com prazo expirando em menos de 5 dias. Revise as propostas!
                  </p>
                  <Link href="/dashboard/comprador/aguardando" className="text-xs text-orange-400 hover:text-orange-300 font-semibold">
                    Ver propostas pendentes →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
