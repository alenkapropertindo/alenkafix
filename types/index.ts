import { ReactNode } from "react";

interface PengajuanItem {
    nomor: string;
    tanggal: string;
    sku: string;
    material: string;
    unit: string;
    jumlah: string;
    blok: string;
    keperluan: string;
    status: string;
  }
  
  export interface PengajuanResponse {
    data: PengajuanItem[];
    status: string;
  }
  
  export interface SubItem {
    name: string;
    path: string;
    pro?: boolean;
    new?: boolean;
  }
  
  export interface NavItem {
    name: string;
    icon: ReactNode;
    path?: string;
    subItems?: SubItem[];
    new?: boolean; // Tambahkan ini
  }
  
  export type MenuSection = {
    title: string;
    items: NavItem[];
  };
  export interface HouseStatic {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    block: string;
  }
  
  export const staticHouses: HouseStatic[] = [
      { id: "C15", x: 23.5, y: 33, width: 15, height: 30,block:"C", rotation: -2},
  { id: "C14", x:  42, y: 32.5, width: 15, height: 30,block:"C", rotation: -2},
  { id: "C13", x:  60, y: 32.0, width: 15, height: 30,block:"C", rotation: -2},
  { id: "C12", x:  78, y: 31.5, width: 15, height: 30,block:"C", rotation: -2},
  { id: "C11", x:  96, y: 31.0, width: 15, height: 30,block:"C", rotation: -2},
  { id: "C10", x: 114, y: 30.5, width: 15, height: 30,block:"C", rotation: -2},
  { id: "C9", x: 132, y: 30.0, width: 15, height: 30,block:"C", rotation: -2},
  { id: "C8", x: 150, y: 29.5, width: 15, height: 30,block:"C", rotation: -2},

  { id: "C7", x: 12.5, y: 84, width: 15, height: 30,block:"C", rotation: 5},
  { id: "C6", x: 30.5, y: 85.5, width: 15, height: 30,block:"C", rotation: 5},
  { id: "C5", x:  48.5,  y: 87.0,  width: 15, height: 30,block:"C", rotation:  5},
  { id: "C4", x:  66.5,  y: 88.5,  width: 15, height: 30,block:"C", rotation:  5},
  { id: "C3", x:  84.5,  y: 90.0,  width: 15, height: 30,block:"C", rotation:  5},
  { id: "C2", x: 102.5, y: 91.5,  width: 15, height: 30,block:"C", rotation:  5},
  { id: "C1", x: 120.5, y: 93.0,  width: 15, height: 30,block:"C", rotation:  5},
  //   
  { id: "B1", x:  4.0,   y: 117.5, width: 15, height: 30,block:"B", rotation:  5},
  { id: "B2", x: 23.0,   y: 119.0, width: 15, height: 30,block:"B", rotation:  5},
  { id: "B3", x: 41.0,   y: 120.5, width: 15, height: 30,block:"B", rotation:  5},
  { id: "B4", x: 59.0,   y: 122.0, width: 15, height: 30,block:"B", rotation:  5},
  { id: "B5", x: 77.0,   y: 123.5, width: 15, height: 30,block:"B", rotation:  5},
  { id: "B6", x: 95.0,   y: 125.0, width: 15, height: 30,block:"B", rotation:  5},
  { id: "B7", x:113.0,   y: 126.5, width: 15, height: 30,block:"B", rotation:  5},
  { id: "B8", x:131.0,   y: 128.0, width: 15, height: 30,block:"B", rotation:  5},
  //   
  { id: "A10", x:  16.0,  y: 190.0, width: 15, height: 30,block:"A", rotation:  5},
  { id: "A11", x:  34.0,  y: 191.5, width: 15, height: 30,block:"A", rotation:  5},
  { id: "A12", x:  52.0,  y: 193.0, width: 15, height: 30,block:"A", rotation:  5},
  { id: "A13", x:  70.0,  y: 194.5, width: 15, height: 30,block:"A", rotation:  5},
  { id: "A14", x:  88.0,  y: 196.0, width: 15, height: 30,block:"A", rotation:  5},
  { id: "A15", x: 106.0,  y: 197.5, width: 15, height: 30,block:"A", rotation:  5},
  { id: "A16", x: 124.0,  y: 199.0, width: 15, height: 30,block:"A", rotation:  5},
  { id: "A17", x: 142.0,  y: 200.5, width: 15, height: 30,block:"A", rotation:  5},
//   
{ id: "A1", x: -23.0, y: 239.0, width: 15, height: 30,block:"A", rotation:  5},
{ id: "A2", x:  -5.0, y: 240.5, width: 15, height: 30,block:"A", rotation:  5},
{ id: "A3", x:  13.0, y: 242.0, width: 15, height: 30,block:"A", rotation:  5},
{ id: "A4", x:  31.0, y: 243.5, width: 15, height: 30,block:"A", rotation:  5},
{ id: "A5", x:  49.0, y: 245.0, width: 15, height: 30,block:"A", rotation:  5},
{ id: "A6", x:  85.0, y: 248.0, width: 15, height: 30,block:"A", rotation:  5},
{ id: "A7", x:  103.0, y: 249.5, width: 15, height: 30,block:"A", rotation:  5},
{ id: "A8", x:  121.0, y: 251.0, width: 15, height: 30,block:"A", rotation:  5},
{ id: "A9", x:  139.0, y: 252.5, width: 15, height: 30,block:"A", rotation:  5},
// 
{ id: "D1", x: 169, y: 97, width: 15, height: 30,block:"D", rotation: -82},
{ id: "D2", x: 171.5, y: 79, width: 15, height: 30,block:"D", rotation: -82},
{ id: "D3", x: 174, y: 61, width: 15, height: 30,block:"D", rotation: -82},
{ id: "D4", x: 176.5, y: 43, width: 15, height: 30,block:"D", rotation: -82},
// 
{ id: "D5", x: 219, y: 114, width: 15, height: 30,block:"D", rotation: -82},
{ id: "D6", x: 221.5, y: 96, width: 15, height: 30,block:"D", rotation: -82},
{ id: "D7", x: 224, y: 78, width: 15, height: 30,block:"D", rotation: -82},
{ id: "D8", x: 226.5, y: 60, width: 15, height: 30,block:"D", rotation: -82},
{ id: "D9", x: 229, y: 42, width: 15, height: 30,block:"D", rotation: -82},
// 
{ id: "E1", x: 253, y: 113, width: 15, height: 30,block:"E", rotation: -82},
{ id: "E2", x: 255.5, y: 95, width: 15, height: 30,block:"E", rotation: -82},
{ id: "E3", x: 258, y: 77, width: 15, height: 30,block:"E", rotation: -82},
{ id: "E4", x: 260.5, y: 59, width: 15, height: 30,block:"E", rotation: -82},
{ id: "E5", x: 263, y: 41, width: 15, height: 30,block:"E", rotation: -82},
// 
{ id: "E6", x: 303.5, y: 131, width: 15, height: 30,block:"E", rotation: -82},
{ id: "E7", x: 306, y: 113, width: 15, height: 30,block:"E", rotation: -82},
{ id: "E8", x: 308.5, y: 95, width: 15, height: 30,block:"E", rotation: -82},
{ id: "E9", x: 311, y: 77, width: 15, height: 30,block:"E", rotation: -82},
{ id: "E10", x: 313.5, y: 59, width: 15, height: 30,block:"E", rotation: -82},
{ id: "E11", x: 316, y: 41, width: 15, height: 30,block:"E", rotation: -82},
// 
{ id: "F1", x: 337.5, y: 130, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F2", x: 340, y: 112, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F3", x: 342.5, y: 94, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F4", x: 345, y: 76, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F5", x: 347.5, y: 58, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F6", x: 350, y: 40, width: 15, height: 30,block:"F", rotation: -82},
// 
{ id: "F7", x: 385, y: 169, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F8", x: 387.5, y: 151, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F9", x: 390, y: 133, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F10", x: 392.5, y: 115, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F11", x: 395, y: 97, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F12", x: 397.5, y: 79, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F13", x: 400, y: 61, width: 15, height: 30,block:"F", rotation: -82},
{ id: "F14", x: 402.5, y: 43, width: 15, height: 30,block:"F", rotation: -82},
  ];
  
  
export interface House extends HouseStatic {
  block: string;
  status: "1" | "2" | "3"|"4";
  pekerjaan: string;
  price: number;
  volume: number;
}

export type Block = 'all' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';


interface StockItem {
  sku: string;
  nama: string;
  unit: string;
  totalMasuk: number;
  totalKeluar: number;
  stok: number;
}

export interface StokResponse {
  data: StockItem[];
}


interface StockItemMasuk {
  tanggal: string;
  sku: string;
  namaBarang: string;
  unit: string;
  jumlah: number;
  satuan: number;
  hargaTotal: number;
  vendor: string;
}

export interface StokResponseMasuk {
  data: StockItemMasuk[];
}
interface StockItemKeluar {
  tanggal: string;
  sku: string;
  namaBarang: string;
  unit: string;
  jumlah: number;
  keperluan: string;
  blok: string;
  keterangan: string;
}

export interface StokResponseKeluar {
  data: StockItemKeluar[];
}

export interface MaterialItem {
  blok: string;
  barang: string;
  qty: number;
  rab:number,
  hargaPerUnit: number;
  totalBiaya: number;
}
export type BarangOption = {
  sku: string;
  value: string; // nama barang
  label: string;
  unit: string;
};

export type ValueLabelOptions = {
  value: string;
  label: string;
};
export type RincianItem = [string, string, string, string, string, string];
