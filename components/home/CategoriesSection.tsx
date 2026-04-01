import Link from "next/link";

const categories = [
  { title: "Aço Estrutural", emoji: "🏗️", href: "/fornecedores?categoria=aco-estrutural", bg: "bg-blue-600", shadow: "shadow-blue-200" },
  { title: "Concreto Pré-moldado", emoji: "🧱", href: "/fornecedores?categoria=concreto", bg: "bg-slate-600", shadow: "shadow-slate-200" },
  { title: "Maquinário Pesado", emoji: "🚜", href: "/fornecedores?categoria=maquinario", bg: "bg-orange-500", shadow: "shadow-orange-200" },
  { title: "Elétrica Industrial", emoji: "⚡", href: "/fornecedores?categoria=eletrica", bg: "bg-yellow-500", shadow: "shadow-yellow-200" },
  { title: "Hidráulica", emoji: "💧", href: "/fornecedores?categoria=hidraulica", bg: "bg-cyan-600", shadow: "shadow-cyan-200" },
  { title: "Fundações e Solo", emoji: "⛏️", href: "/fornecedores?categoria=fundacoes", bg: "bg-amber-600", shadow: "shadow-amber-200" },
];

export function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Explore por área</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Categorias</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">Encontre fornecedores especializados em cada segmento da engenharia.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className={`group ${cat.bg} ${cat.shadow} shadow-lg rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-white text-center hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer`}
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-200">{cat.emoji}</div>
              <span className="text-sm font-semibold leading-tight">{cat.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
