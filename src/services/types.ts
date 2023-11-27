export interface Product {
  id: number;
  icon: string;
  discount: number;
  productName: string;
  price: number;
  rating: number;
  rateCount: number;
  viewType: string;
}

export interface Category {
  id: number;
  icon: string;
  categoryName: string;
  tag: string;
}

export interface ContentItem {
  id: string;
  content: Category[] | Product[];
}

export interface HomeData {
  home: ContentItem[];
}
