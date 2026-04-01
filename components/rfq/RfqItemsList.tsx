"use client";

import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import type { RfqItem } from "@/types/rfq";

interface RfqItemsListProps {
  items: RfqItem[];
  onItemsChange: (items: RfqItem[]) => void;
  errors?: Record<string, string>;
}

const UNIT_OPTIONS = ["un", "m", "m²", "m³", "kg", "ton", "L", "pç", "cj"];

export function RfqItemsList({ items, onItemsChange, errors }: RfqItemsListProps) {
  const updateItem = (id: string, field: keyof RfqItem, value: string | number) => {
    onItemsChange(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const removeItem = (id: string) => {
    if (items.length <= 1) return;
    onItemsChange(items.filter((item) => item.id !== id));
  };

  const addItem = () => {
    onItemsChange([
      ...items,
      { id: crypto.randomUUID(), description: "", quantity: "", unit: "un", specs: "" },
    ]);
  };

  return (
    <div className="space-y-4">
      {/* Column Headers — desktop only */}
      <div className="hidden md:grid grid-cols-[1fr_80px_100px_1fr_40px] gap-3 px-1">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Descrição *</span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Qtd *</span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Unidade</span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Especificações</span>
        <span />
      </div>

      {/* Item Rows */}
      {items.map((item, index) => (
        <div key={item.id} className="relative">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_100px_1fr_40px] gap-3 bg-gray-50 rounded-xl p-4 md:p-3 md:bg-transparent">
            {/* Description */}
            <div>
              <label className="md:hidden text-xs font-semibold text-gray-500 mb-1 block">Descrição *</label>
              <Input
                placeholder="Ex: Concreto FCK 30 MPa"
                value={item.description}
                onChange={(e) => updateItem(item.id, "description", e.target.value)}
                className="h-11 border-gray-200 rounded-xl text-gray-900"
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="md:hidden text-xs font-semibold text-gray-500 mb-1 block">Quantidade *</label>
              <Input
                type="number"
                min={0}
                placeholder="0"
                value={item.quantity}
                onChange={(e) =>
                  updateItem(item.id, "quantity", e.target.value === "" ? "" : Number(e.target.value))
                }
                className="h-11 border-gray-200 rounded-xl text-gray-900"
              />
            </div>

            {/* Unit */}
            <div>
              <label className="md:hidden text-xs font-semibold text-gray-500 mb-1 block">Unidade</label>
              <div className="relative">
                <Input
                  list={`units-${item.id}`}
                  placeholder="un"
                  value={item.unit}
                  onChange={(e) => updateItem(item.id, "unit", e.target.value)}
                  className="h-11 border-gray-200 rounded-xl text-gray-900"
                />
                <datalist id={`units-${item.id}`}>
                  {UNIT_OPTIONS.map((u) => (
                    <option key={u} value={u} />
                  ))}
                </datalist>
              </div>
            </div>

            {/* Specs */}
            <div>
              <label className="md:hidden text-xs font-semibold text-gray-500 mb-1 block">Especificações</label>
              <Input
                placeholder="Notas adicionais..."
                value={item.specs}
                onChange={(e) => updateItem(item.id, "specs", e.target.value)}
                className="h-11 border-gray-200 rounded-xl text-gray-900"
              />
            </div>

            {/* Remove */}
            <div className="flex items-center md:justify-center">
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                disabled={items.length <= 1}
                className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 disabled:opacity-30 disabled:hover:text-gray-400 disabled:hover:bg-transparent transition-colors"
                title="Remover item"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {errors?.[`item_${index}`] && (
            <span className="text-xs text-red-500 mt-1 block px-1">{errors[`item_${index}`]}</span>
          )}
        </div>
      ))}

      {/* Add Item Button */}
      <button
        type="button"
        onClick={addItem}
        className="w-full border-2 border-dashed border-gray-200 hover:border-orange-300 hover:bg-orange-50/30 rounded-xl py-3 flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 hover:text-orange-600 transition-colors"
      >
        <Plus className="w-4 h-4" />
        Adicionar Item
      </button>
    </div>
  );
}
