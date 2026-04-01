"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

export function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (location) params.set("local", location);
    router.push(`/fornecedores?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "520px" }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1923]/95 via-[#1a2332]/85 to-[#1a2332]/70" />

      {/* Decorative orange line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          Plataforma de Cotações para Engenharia
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5 text-white tracking-tight">
          Sua Obra Não Pode{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Parar.
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
          Encontre fornecedores qualificados, solicite cotações e compare propostas — tudo em um só lugar.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch gap-0 w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          <div className="flex items-center flex-1 px-4 gap-3 border-b sm:border-b-0 sm:border-r border-gray-100">
            <Search className="text-orange-500 w-5 h-5 shrink-0" />
            <Input
              placeholder="O que você está procurando?"
              className="border-0 shadow-none text-gray-800 placeholder-gray-400 focus-visible:ring-0 text-base py-4 h-14"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <div className="flex items-center px-4 gap-3">
            <MapPin className="text-orange-500 w-5 h-5 shrink-0" />
            <Input
              placeholder="São Paulo, SP"
              className="border-0 shadow-none text-gray-800 placeholder-gray-400 focus-visible:ring-0 w-40 h-14"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="p-2">
            <Button
              onClick={handleSearch}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 h-10 rounded-xl w-full sm:w-auto shadow-lg shadow-orange-500/30 transition-all duration-200"
            >
              Buscar Fornecedores
            </Button>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
          <span className="text-gray-400">Populares:</span>
          {["Concreto Pré-moldado", "Aço Estrutural", "Escavadeira", "Andaime", "Elétrica Industrial"].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-1 rounded-full text-xs transition-all backdrop-blur-sm hover:border-orange-400/50"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 flex flex-wrap justify-center gap-10">
          {[
            { value: "2.400+", label: "Fornecedores" },
            { value: "18.000+", label: "Cotações realizadas" },
            { value: "47", label: "Categorias" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-orange-400">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
