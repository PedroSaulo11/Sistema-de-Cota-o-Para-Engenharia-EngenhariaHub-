import { Save, Send } from "lucide-react";

interface RfqFormActionsProps {
  onSaveDraft: () => void;
  onPublish: () => void;
  saving: boolean;
}

function Spinner() {
  return <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />;
}

export function RfqFormActions({ onSaveDraft, onPublish, saving }: RfqFormActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-6 border-t border-gray-100">
      <button
        type="button"
        onClick={onSaveDraft}
        disabled={saving}
        className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-60 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
      >
        {saving ? <Spinner /> : <><Save className="w-4 h-4" /> Salvar Rascunho</>}
      </button>

      <button
        type="button"
        onClick={onPublish}
        disabled={saving}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-60 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-orange-500/20 transition-all text-sm"
      >
        {saving ? <Spinner /> : <><Send className="w-4 h-4" /> Publicar RFQ</>}
      </button>
    </div>
  );
}
