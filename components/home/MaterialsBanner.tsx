import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Star } from "lucide-react";

export function MaterialsBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f1923] via-[#1a2332] to-[#243447] relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              ⚡ Materiais à Pronta Entrega
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              Capacidade de Entrega{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Imediata</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-7">
              Fornecedores verificados com estoque disponível prontos para atender sua obra sem atrasos.
            </p>
            <Link
              href="/fornecedores?entrega=imediata"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-orange-500/20 text-sm transition-all group"
            >
              Buscar Materiais Disponíveis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-lg">
            {[
              { icon: <Clock className="w-6 h-6 text-orange-400" />, title: "Entrega Rápida", desc: "Estoque disponível para retirada imediata" },
              { icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />, title: "Certificados", desc: "Fornecedores verificados e aprovados" },
              { icon: <Star className="w-6 h-6 text-yellow-400" />, title: "Mais Avaliados", desc: "Com melhor nota na plataforma" },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="mb-3">{item.icon}</div>
                <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
