const steps = [
  {
    number: "01",
    title: "Crie sua RFQ",
    description: "Descreva o que precisa, anexe documentos técnicos e defina o prazo de resposta.",
    icon: "📋",
  },
  {
    number: "02",
    title: "Envie para Fornecedores",
    description: "Selecione fornecedores manualmente ou deixe o sistema fazer o matching automático.",
    icon: "📤",
  },
  {
    number: "03",
    title: "Receba Propostas",
    description: "Fornecedores respondem com preços, prazos e condições diretamente na plataforma.",
    icon: "📥",
  },
  {
    number: "04",
    title: "Compare e Decida",
    description: "Compare propostas lado a lado e entre em contato diretamente com o fornecedor escolhido.",
    icon: "✅",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Simples e rápido</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Como Funciona</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Do pedido de cotação até a decisão final em poucos passos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] right-0 h-0.5 bg-gradient-to-r from-orange-200 to-transparent z-0" />
              )}

              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 text-3xl mb-4 mx-auto">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-orange-500 mb-1 tracking-widest">PASSO {step.number}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
