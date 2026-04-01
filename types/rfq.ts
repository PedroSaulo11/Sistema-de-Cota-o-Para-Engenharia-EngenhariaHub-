export interface RfqItem {
  id: string;
  description: string;
  quantity: number | "";
  unit: string;
  specs: string;
}

export interface RfqFormData {
  title: string;
  description: string;
  deliveryLocation: string;
  deadline: string;
  attachments: File[];
  items: RfqItem[];
  status: "draft" | "open";
}
