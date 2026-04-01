"use client";

import { useState } from "react";
import Link from "next/link";
import { HardHat, Eye, EyeOff, Mail, Lock, User, Phone, Building2, ArrowRight, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

type Role = "comprador" | "fornecedor" | null;

export default function CadastroPage() {
  const [role, setRole] = useState<Role>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0f1923] via-[#1a2332] to-[#243447] flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Logo */}
        <div className="relative flex items-center gap-2 text-white font-bold text-2xl">
          <div className="bg-orange-500 rounded-xl p-2">
            <HardHat className="text-white w-6 h-6" />
          </div>
          <span>Engenharia<span className="text-orange-500">Hub</span></span>
        </div>

        {/* Center */}
        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold px-4 py-1.5 rounded-full">
            🚀 Cadastro gratuito
          </div>
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Comece a cotar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              hoje mesmo!
            </span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            Cadastre-se gratuitamente e tenha acesso a milhares de fornecedores qualificados.
          </p>

          {/* Benefits */}
          <div className="space-y-3 pt-2">
            {[
              "Solicite cotações ilimitadas",
              "Compare propostas lado a lado",
              "Chat direto com fornecedores",
              "Sem taxas ou comissões",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3 h-3 text-orange-400" />
                </div>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
          <p className="text-gray-300 text-sm leading-relaxed italic">
            "Em 3 dias recebi 8 propostas de fornecedores qualificados. Economizamos 23% no orçamento."
          </p>
          <div className="flex items-center gap-3 mt-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">C</div>
            <div>
              <div className="text-white text-xs font-semibold">Carlos Eduardo</div>
              <div className="text-gray-500 text-xs">Gerente de Compras</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 overflow-y-auto" style={{ backgroundColor: "#ffffff", color: "#111827" }}>
        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 text-gray-900 font-bold text-xl mb-8">
            <div className="bg-orange-500 rounded-xl p-1.5">
              <HardHat className="text-white w-5 h-5" />
            </div>
            <span>Engenharia<span className="text-orange-500">Hub</span></span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900">Criar conta grátis</h1>
            <p className="text-gray-500 text-sm mt-2">
              Já tem conta?{" "}
              <Link href="/login" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                Fazer login
              </Link>
            </p>
          </div>

          {/* Step 1 — Escolha de perfil */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-4">Você é:</p>
                <div className="grid grid-cols-2 gap-4">
                  {/* Comprador */}
                  <button
                    onClick={() => setRole("comprador")}
                    className={`relative p-5 rounded-2xl border-2 text-left transition-all ${
                      role === "comprador"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300 hover:bg-orange-50/50"
                    }`}
                  >
                    {role === "comprador" && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className="text-3xl mb-3">🏗️</div>
                    <div className="font-bold text-gray-900 text-sm">Comprador</div>
                    <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Busco fornecedores e solicito cotações para minha obra
                    </div>
                  </button>

                  {/* Fornecedor */}
                  <button
                    onClick={() => setRole("fornecedor")}
                    className={`relative p-5 rounded-2xl border-2 text-left transition-all ${
                      role === "fornecedor"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300 hover:bg-orange-50/50"
                    }`}
                  >
                    {role === "fornecedor" && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className="text-3xl mb-3">🏭</div>
                    <div className="font-bold text-gray-900 text-sm">Fornecedor</div>
                    <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Ofereço produtos ou serviços para projetos de engenharia
                    </div>
                  </button>
                </div>
              </div>

              <button
                onClick={() => role && setStep(2)}
                disabled={!role}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 text-sm"
              >
                Continuar <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2 — Dados */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Step indicator */}
              <div className="flex items-center gap-2 mb-6">
                <button onClick={() => setStep(1)} className="text-xs text-gray-400 hover:text-orange-500 flex items-center gap-1 transition-colors">
                  ← Voltar
                </button>
                <div className="flex-1 flex items-center gap-1.5">
                  <div className="h-1 flex-1 rounded-full bg-orange-500" />
                  <div className="h-1 flex-1 rounded-full bg-orange-500" />
                </div>
                <span className="text-xs text-gray-400">
                  {role === "comprador" ? "🏗️ Comprador" : "🏭 Fornecedor"}
                </span>
              </div>

              {/* Nome */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Nome completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Seu nome" className="pl-10 h-11 border-gray-200 rounded-xl text-gray-900" required />
                </div>
              </div>

              {/* Empresa — só para fornecedor */}
              {role === "fornecedor" && (
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Nome da empresa</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input placeholder="Razão social ou nome fantasia" className="pl-10 h-11 border-gray-200 rounded-xl text-gray-900" required />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input type="email" placeholder="seu@email.com" className="pl-10 h-11 border-gray-200 rounded-xl text-gray-900" required />
                </div>
              </div>

              {/* Telefone */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Telefone / WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="(11) 99999-9999" className="pl-10 h-11 border-gray-200 rounded-xl text-gray-900" />
                </div>
              </div>

              {/* Senha */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mínimo 8 caracteres"
                    className="pl-10 pr-10 h-11 border-gray-200 rounded-xl text-gray-900"
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 pt-1">
                <input type="checkbox" id="terms" className="accent-orange-500 w-4 h-4 mt-0.5 shrink-0" required />
                <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
                  Li e aceito os{" "}
                  <Link href="/termos" className="text-orange-500 hover:underline font-medium">Termos de Uso</Link>{" "}
                  e a{" "}
                  <Link href="/privacidade" className="text-orange-500 hover:underline font-medium">Política de Privacidade</Link>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 text-sm mt-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Criar minha conta <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
