import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, CheckCircle, Building2 } from "lucide-react";

const suppliers = [
  {
    id: 1,
    name: "ConcreteSolutions S/A",
    specialty: "Concreto Pré-moldado e Estrutural",
    city: "São Paulo, SP",
    rating: 4.9,
    reviews: 128,
    certified: true,
    delivery: "Imediata",
    tag: "Mais Avaliado",
    tagColor: "bg-orange-100 text-orange-700",
    description: "Especialistas em concreto pré-moldado e estrutural com mais de 20 anos de mercado.",
  },
  {
    id: 2,
    name: "MaxMix Concreto Usinado",
    specialty: "Concreto Usinado de Alta Resistência",
    city: "Guarulhos, SP",
    rating: 4.8,
    reviews: 94,
    certified: true,
    delivery: "Imediata",
    tag: "Alta Demanda",
    tagColor: "bg-blue-100 text-blue-700",
    description: "Fornecemos concreto usinado para obras de grande porte com controle tecnológico rigoroso.",
  },
  {
    id: 3,
    name: "Global Pre-cast",
    specialty: "Pré-moldados Especiais",
    city: "São Paulo, SP",
    rating: 4.9,
    reviews: 76,
    certified: true,
    delivery: "3-5 dias",
    tag: "Premium",
    tagColor: "bg-purple-100 text-purple-700",
    description: "Produção de peças pré-moldadas especiais sob encomenda para infraestrutura e obras civis.",
  },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
        ))}
      </div>
      <span className="text-sm font-bold text-gray-800">{rating}</span>
      <span className="text-xs text-gray-400">({reviews})</span>
    </div>
  );
}

export function FeaturedSuppliers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Verificados e avaliados</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Fornecedores em Destaque</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">Fornecedores com melhor avaliação e maior taxa de resposta na plataforma.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suppliers.map((supplier) => (
            <Card key={supplier.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
              <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600" />
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-[#1a2332] to-[#2d3f57] rounded-xl p-2.5 shadow-sm">
                      <Building2 className="text-orange-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base leading-tight">{supplier.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{supplier.specialty}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${supplier.tagColor}`}>{supplier.tag}</span>
                </div>

                <div className="mb-4"><StarRating rating={supplier.rating} reviews={supplier.reviews} /></div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />{supplier.city}
                  </div>
                  {supplier.certified && (
                    <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                      <CheckCircle className="w-4 h-4 shrink-0" />ISO 9001 Certificado
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium px-3 py-1 rounded-full">
                    ⚡ Entrega {supplier.delivery}
                  </Badge>
                </div>

                <p className="text-sm text-gray-500 mb-5 line-clamp-2 leading-relaxed">{supplier.description}</p>

                <div className="flex gap-2">
                  <Link href="/solicitar-orcamento" className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold py-2 px-3 rounded-xl text-center transition-all shadow-sm shadow-orange-200">
                    Solicitar Orçamento
                  </Link>
                  <Link href={`/fornecedores/${supplier.id}`} className="flex-1 border border-gray-200 text-gray-700 hover:bg-[#1a2332] hover:text-white hover:border-[#1a2332] text-sm py-2 px-3 rounded-xl text-center transition-all">
                    Ver Perfil
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/fornecedores" className="inline-flex items-center border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-3 rounded-xl font-semibold text-sm transition-all duration-200">
            Ver Todos os Fornecedores →
          </Link>
        </div>
      </div>
    </section>
  );
}
