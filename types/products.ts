export interface Product {
  id: string;
  type:string,
  status: string;
  district:string,
  name: string;
  rating: string;
  address: string;
  price: number;
  discountFrom: number;
  fee: number;
  image: string;
  fb: string;
  tiktok: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  open: Product[];//keempat
  terlaris: Product[];//kedua
  terbaru: Product[];//ketiga
  favorit: Product[];//akhir
  flashsale: Product[];//awal
}