export interface ProductVariant {
  id: number;
  quantity: number;
  label: string;
  price: number;
  originalPrice?: number;
}

export interface Testimonial {
  id: string;
  author: string;
  imagePath: string;
  quote: string;
}