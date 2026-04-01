"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FileText, AlignLeft, MapPin, Calendar, Package, Paperclip, ArrowLeft,
} from "lucide-react";

import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SectionCard } from "@/components/rfq/SectionCard";
import { RfqItemsList } from "@/components/rfq/RfqItemsList";
import { FileUploadArea } from "@/components/rfq/FileUploadArea";
import { RfqFormActions } from "@/components/rfq/RfqFormActions";
import { Input } from "@/components/ui/input";
import type { RfqItem } from "@/types/rfq";

function createEmptyItem(): RfqItem {
  return { id: crypto.randomUUID(), description: "", quantity: "", unit: "un", specs: "" };
}

export default function NovaRfqPage() {
  const router = useRouter();

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [deadline, setDeadline] = useState("");
  const [items, setItems] = useState<RfqItem[]>(() => [createEmptyItem()]);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const today = new Date().toISOString().split("T")[0];

  const validateForPublish = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) newErrors.title = "Título é obrigatório";
    if (!deliveryLocation.trim()) newErrors.deliveryLocation = "Local de entrega é obrigatório";
    if (!deadline) newErrors.deadline = "Prazo limite é obrigatório";
    else if (deadline < today) newErrors.deadline = "Prazo deve ser uma data futura";

    items.forEach((item, i) => {
      if (!item.description.trim()) newErrors[`item_${i}`] = "Descrição do item é obrigatória";
      else if (item.quantity === "" || item.quantity <= 0)
        newErrors[`item_${i}`] = "Quantidade deve ser maior que zero";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = (status: "draft" | "open") => {
    setErrors({});

    if (status === "draft" && !title.trim()) {
      setErrors({ title: "Informe ao menos o título para salvar como rascunho" });
      return;
    }

    if (status === "open" && !validateForPublish()) return;

    setSaving(true);
    const rfqData = { title, description, deliveryLocation, deadline, attachments, items, status };
    console.log("RFQ saved:", rfqData);

    setTimeout(() => {
      setSaving(false);
      router.push("/dashboard/comprador");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50" style={{ colorScheme: "light" }}>
      <DashboardSidebar role="comprador" />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/comprador"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Painel
            </Link>
            <div className="w-px h-5 bg-gray-200" />
            <div>
              <h1 className="text-xl font-extrabold text-gray-900">Nova RFQ</h1>
              <p className="text-sm text-gray-500 mt-0.5">Crie uma solicitação de cotação</p>
            </div>
          </div>
        </header>

        {/* Form Content */}
        <div className="p-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* Informações Gerais */}
            <SectionCard title="Informações Gerais" icon={FileText}>
              <div className="space-y-5">
                {/* Título */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">
                    Título da RFQ <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Ex: Concreto Pré-moldado — Galpão Industrial"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="pl-10 h-11 border-gray-200 rounded-xl text-gray-900"
                    />
                  </div>
                  {errors.title && <span className="text-xs text-red-500">{errors.title}</span>}
                </div>

                {/* Descrição */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Descrição geral</label>
                  <div className="relative">
                    <AlignLeft className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      placeholder="Descreva o que você precisa cotar, contexto da obra, requisitos técnicos..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm resize-y min-h-[120px] focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Local + Prazo em grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Local de entrega */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                      Local de entrega <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Ex: São Paulo, SP"
                        value={deliveryLocation}
                        onChange={(e) => setDeliveryLocation(e.target.value)}
                        className="pl-10 h-11 border-gray-200 rounded-xl text-gray-900"
                      />
                    </div>
                    {errors.deliveryLocation && (
                      <span className="text-xs text-red-500">{errors.deliveryLocation}</span>
                    )}
                  </div>

                  {/* Prazo limite */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                      Prazo limite para respostas <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        type="date"
                        min={today}
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="pl-10 h-11 border-gray-200 rounded-xl text-gray-900"
                      />
                    </div>
                    {errors.deadline && (
                      <span className="text-xs text-red-500">{errors.deadline}</span>
                    )}
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* Itens da Cotação */}
            <SectionCard title="Itens da Cotação" icon={Package}>
              <RfqItemsList items={items} onItemsChange={setItems} errors={errors} />
            </SectionCard>

            {/* Anexos Técnicos */}
            <SectionCard title="Anexos Técnicos" icon={Paperclip}>
              <FileUploadArea files={attachments} onFilesChange={setAttachments} />
            </SectionCard>

            {/* Actions */}
            <RfqFormActions
              onSaveDraft={() => handleSave("draft")}
              onPublish={() => handleSave("open")}
              saving={saving}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
