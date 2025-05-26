export const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error('Gagal memuat data produk');
  return res.json();
});