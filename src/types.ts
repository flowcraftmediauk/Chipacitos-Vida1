export interface Product {
  id: string;
  name: string;
  category: 'chipas' | 'rellenos' | 'dulces';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  suggestedPairing: string;
  formatNotice: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface OrderInquiry {
  productId: string;
  productName: string;
  quantityOption: string;
  customerNote: string;
}
