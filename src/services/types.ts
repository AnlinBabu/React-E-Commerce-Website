export interface Product {
  id: number;
  icon: string;
  discount: number;
  productName: string;
  shortdescription: string;
  producturl: string;
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
  time?: string;
  productid?: string;
  icon?: string;
  content?: Category[] | Product[];
}

export interface HomeData {
  home: ContentItem[];
}
