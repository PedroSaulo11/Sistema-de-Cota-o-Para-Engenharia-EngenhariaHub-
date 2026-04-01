"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
// Button import removed — using Link directly
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Star, CheckCircle, HardHat, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";

const allSuppliers = [
  { id: 1, name: "ConcreteSolutions S/A", specialty: "Concreto Pré-moldado e Estrutural", city: "São Paulo", state: "SP", rating: 4.9, certified: true, delivery: "Imediata", type: ["Pré-moldado"], price: "R$ 350 - R$ 550", description: "Especialistas em concreto pré-moldado e estrutural com mais de 20 anos de mercado." },
  { id: 2, name: "MaxMix Concreto Usinado", specialty: "Concreto Usinado de Alta Resistência", city: "Guarulhos", state: "SP", rating: 4.8, certified: true, delivery: "Imediata", type: ["Usinado"], price: "R$ 320 - R$ 480", description: "Fornecemos concreto usinado para obras de grande porte com controle tecnológico rigoroso." },
  { id: 3, name: "Global Pre-cast", specialty: "Pré-moldados Especiais", city: "São Paulo", state: "SP", rating: 4.9, certified: true, delivery: "Imediata", type: ["Pré-moldado", "Estrutural"], price: "R$ 400 - R$ 600", description: "Produção de peças pré-moldadas especiais sob encomenda para infraestrutura e obras civis." },
  { id: 4, name: "AçoBras Estrutural", specialty: "Aço Estrutural e Metálico", city: "Belo Horizonte", state: "MG", rating: 4.7, certified: true, delivery: "3-5 dias", type: ["Estrutural"], price: "R$ 280 - R$ 420", description: "Fornecedor líder em aço estrutural para construção civil e industrial." },
  { id: 5, name: "TechBeton Curitiba", specialty: "Concreto Estrutural Premium", city: "Curitiba", state: "PR", rating: 4.6, certified: false, delivery: "Imediata", type: ["Estrutural", "Usinado"], price: "R$ 300 - R$ 500", description: "Empresa especializada em concreto de alta performance para obras estruturais." },
  { id: 6, name: "InfraMax Soluções", specialty: "Infraestrutura e Fundações", city: "São Paulo", state: "SP", rating: 4.5, certified: true, delivery: "5-7 dias", type: ["Pré-moldado"], price: "R$ 250 - R$ 400", description: "Soluções completas para fundações, infraestrutura e obras de engenharia civil." },
];

const locations = ["São Paulo", "Curitiba", "Belo Horizonte"];
const types = ["Pré-moldado", "Usinado", "Estrutural"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
      <span className="text-sm font-semibold text-gray-700 ml-1">{rating}</span>
    </div>
  );
}

export default function FornecedoresPage() {
  const [search, setSearch] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleFilter = (value: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(value) ? list.filter((i) => i !== value) : [...list, value]);
  };

  const filtered = allSuppliers.filter((s) => {
    const matchSearch = search === "" || s.name.toLowerCase().includes(search.toLowerCase()) || s.specialty.toLowerCase().includes(search.toLowerCase());
    const matchLocation = selectedLocations.length === 0 || selectedLocations.includes(s.city);
    const matchType = selectedTypes.length === 0 || s.type.some((t) => selectedTypes.includes(t));
    return matchSearch && matchLocation && matchType;
  });

  const FilterPanel = () => (
    <aside className="w-full">
      <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Filtros de Busca</h3>

      {/* Localização */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-gray-700 text-sm">Localização</span>
        </div>
        <div className="space-y-2">
          {locations.map((loc) => (
            <label key={loc} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLocations.includes(loc)}
                onChange={() => toggleFilter(loc, selectedLocations, setSelectedLocations)}
                className="accent-orange-500 w-4 h-4"
              />
              <span className="text-sm text-gray-600">{loc}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Tipo */}
      <div className="mb-6">
        <span className="font-semibold text-gray-700 text-sm block mb-2">Tipo de Material</span>
        <div className="space-y-2">
          {types.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                className="accent-orange-500 w-4 h-4"
              />
              <span className="text-sm text-gray-600">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Certificações */}
      <div className="mb-6">
        <span className="font-semibold text-gray-700 text-sm block mb-2">Certificações</span>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="accent-orange-500 w-4 h-4" />
          <span className="text-sm text-gray-600">ISO 9001</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer mt-2">
          <input type="checkbox" className="accent-orange-500 w-4 h-4" />
          <span className="text-sm text-gray-600">Sustentabilidade</span>
        </label>
      </div>

      {/* Limpar Filtros */}
      {(selectedLocations.length > 0 || selectedTypes.length > 0) && (
        <button
          className="w-full border border-red-200 text-red-500 hover:bg-red-50 text-sm py-1.5 px-3 rounded-lg flex items-center justify-center gap-1 transition-colors"
          onClick={() => { setSelectedLocations([]); setSelectedTypes([]); }}
        >
          <X className="w-4 h-4" /> Limpar Filtros
        </button>
      )}
    </aside>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Header */}
      <div className="bg-[#1a2332] py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2">
            <div className="flex-1 flex items-center bg-white rounded-lg px-4 gap-2">
              <Search className="text-gray-400 w-5 h-5 shrink-0" />
              <Input
                placeholder="Buscar fornecedor ou material..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-0 shadow-none focus-visible:ring-0 text-gray-800"
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors text-sm">
              Buscar Novamente
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-800">
            {search ? (
              <>Resultados para: <span className="text-orange-500">"{search}"</span></>
            ) : (
              "Todos os Fornecedores"
            )}{" "}
            <span className="text-gray-500 font-normal text-base">({filtered.length} Encontrados)</span>
          </h1>
          <button
            className="md:hidden flex items-center gap-2 border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtros
          </button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden md:block w-56 shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-20">
              <FilterPanel />
            </div>
          </div>

          {/* Mobile Filters */}
          {mobileFiltersOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-black/50 flex items-end">
              <div className="bg-white w-full rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Filtros</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterPanel />
              </div>
            </div>
          )}

          {/* Supplier Cards */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="text-lg">Nenhum fornecedor encontrado.</p>
                <p className="text-sm mt-2">Tente ajustar os filtros ou o termo de busca.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((supplier) => (
                  <Card key={supplier.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl overflow-hidden bg-white">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-[#1a2332] rounded-lg p-2 shrink-0">
                          <HardHat className="text-orange-500 w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-0.5">Aprovação de Clientes</p>
                          <StarRating rating={supplier.rating} />
                        </div>
                      </div>

                      <h3 className="font-bold text-gray-900 text-base mb-0.5">{supplier.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{supplier.specialty}</p>

                      <div className="flex flex-col gap-1.5 mb-3">
                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          {supplier.city}, {supplier.state}
                        </div>
                        {supplier.certified && (
                          <div className="flex items-center gap-1.5 text-sm text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            ISO 9001 - Certificado
                          </div>
                        )}
                      </div>

                      <Badge className="bg-green-50 text-green-700 border border-green-200 text-xs mb-3">
                        ⚡ Capacidade de Entrega: {supplier.delivery}
                      </Badge>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{supplier.description}</p>

                      <div className="flex gap-2">
                        <Link href="/solicitar-orcamento" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-3 rounded-lg text-center transition-colors">
                          Solicitar Orçamento
                        </Link>
                        <Link href={`/fornecedores/${supplier.id}`} className="flex-1 border border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white text-sm py-2 px-3 rounded-lg text-center transition-colors">
                          Ver Perfil Completo
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
