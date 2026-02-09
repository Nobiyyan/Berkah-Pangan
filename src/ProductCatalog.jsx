import React from "react";
import "./productCatalog.css";

// --- DATA DARI GAMBAR LIST HARGA ---
const products = [
  // --- ANGGUR ---
  {
    id: 1,
    name: "Anggur Merah Curah",
    price: 210000,
    unit: "6 kg",
    category: "Buah Segar",
    image:
      "https://images.unsplash.com/photo-1537640538965-1756deb1797e?w=500&q=80",
  },
  {
    id: 2,
    name: "Anggur Merah Sekat",
    price: 225000,
    unit: "6 kg",
    category: "Buah Segar",
    image:
      "https://images.unsplash.com/photo-1537640538965-1756deb1797e?w=500&q=80",
  },
  // --- APEL FUJI (Grosir Dus) ---
  {
    id: 3,
    name: "Apel Fuji (±88-100 pcs)",
    price: 490000,
    unit: "20 kg/dus",
    category: "Buah Impor",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&q=80",
  },
  {
    id: 4,
    name: "Apel Fuji (±125 pcs)",
    price: 500000,
    unit: "20 kg/dus",
    category: "Buah Impor",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&q=80",
  },
  {
    id: 5,
    name: "Apel Fuji (±138 pcs)",
    price: 520000,
    unit: "20 kg/dus",
    category: "Buah Impor",
    image:
      "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&q=80",
  },
  {
    id: 6,
    name: "Apel Fuji (±163 pcs)",
    price: 520000,
    unit: "20 kg/dus",
    category: "Buah Impor",
    image:
      "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&q=80",
  },
  {
    id: 7,
    name: "Apel Fuji (±175 pcs)",
    price: 520000,
    unit: "20 kg/dus",
    category: "Buah Impor",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&q=80",
  },
  {
    id: 8,
    name: "Apel Fuji (±198 pcs)",
    price: 520000,
    unit: "20 kg/dus",
    category: "Buah Impor",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&q=80",
  },
  // --- BUAH LOKAL LAINNYA ---
  {
    id: 9,
    name: "Apel Malang",
    price: 22000,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1631160384236-0428d0034a78?w=500&q=80",
  },
  {
    id: 10,
    name: "Belimbing",
    price: 9000,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1628495679944-d62158dcbb93?w=500&q=80",
  },
  {
    id: 11,
    name: "Buah Naga Merah (isi 3)",
    price: 10000,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1527863280617-15526569eb56?w=500&q=80",
  },
  // --- JERUK ---
  {
    id: 12,
    name: "Jeruk Medan (isi ±13-15)",
    price: 17000,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1611178474053-2713e55180ce?w=500&q=80",
  },
  {
    id: 13,
    name: "Jeruk Medan (isi ±18-20)",
    price: 15000,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1611178474053-2713e55180ce?w=500&q=80",
  },
  {
    id: 14,
    name: "Jeruk Santang M",
    price: 200000,
    unit: "6 kg",
    category: "Buah Impor",
    image:
      "https://images.unsplash.com/photo-1588612716035-7177579f187d?w=500&q=80",
  },
  {
    id: 15,
    name: "Jeruk Santang L (±25-30)",
    price: 190000,
    unit: "6 kg",
    category: "Buah Impor",
    image:
      "https://images.unsplash.com/photo-1588612716035-7177579f187d?w=500&q=80",
  },
  // --- LENGKENG ---
  {
    id: 16,
    name: "Lengkeng Biru",
    price: 360000,
    unit: "10 kg",
    category: "Buah Segar",
    image:
      "https://images.unsplash.com/photo-1508293781223-9c4456637b58?w=500&q=80",
  },
  {
    id: 17,
    name: "Lengkeng Gold",
    price: 380000,
    unit: "10 kg",
    category: "Buah Segar",
    image:
      "https://images.unsplash.com/photo-1508293781223-9c4456637b58?w=500&q=80",
  },
  {
    id: 18,
    name: "Lengkeng Hijau",
    price: 340000,
    unit: "10 kg",
    category: "Buah Segar",
    image:
      "https://images.unsplash.com/photo-1508293781223-9c4456637b58?w=500&q=80",
  },
  {
    id: 19,
    name: "Lengkeng Merah",
    price: 370000,
    unit: "10 kg",
    category: "Buah Segar",
    image:
      "https://images.unsplash.com/photo-1508293781223-9c4456637b58?w=500&q=80",
  },
  // --- LAINNYA ---
  {
    id: 20,
    name: "Mangga Aromanis (4 buah)",
    price: 18000,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80",
  },
  {
    id: 21,
    name: "Pepaya",
    price: 11000,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1517260739337-6799d2eb9ce0?w=500&q=80",
  },
  {
    id: 22,
    name: "Pir Yali 96/80",
    price: 320000,
    unit: "17 kg/dus",
    category: "Buah Impor",
    image:
      "https://images.unsplash.com/photo-1632160738686-e3d646960251?w=500&q=80",
  },
  {
    id: 23,
    name: "Pisang Ambon Lumut",
    price: 7500,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&q=80",
  },
  {
    id: 24,
    name: "Pisang Ambon Putih",
    price: 9000,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&q=80",
  },
  {
    id: 25,
    name: "Salak Istimewa (isi 12)",
    price: 9000,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1565529323321-72945d8b284e?w=500&q=80",
  },
  {
    id: 26,
    name: "Salak Lokal (isi 16)",
    price: 7500,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1565529323321-72945d8b284e?w=500&q=80",
  },
  {
    id: 27,
    name: "Sunkist Valencia",
    price: 420000,
    unit: "14 kg",
    category: "Buah Impor",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500&q=80",
  },
  {
    id: 28,
    name: "Sunkist Nevel 64/72",
    price: 360000,
    unit: "14 kg",
    category: "Buah Impor",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500&q=80",
  },
  {
    id: 29,
    name: "Semangka Super (3-4kg)",
    price: 9000,
    unit: "1 kg",
    category: "Buah Lokal",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80",
  },
  // --- NON BUAH (Sayuran & Pangan Lain) ---
  {
    id: 30,
    name: "Kelapa Parut Merah",
    price: 26000,
    unit: "1 kg",
    category: "Pangan Lain",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80",
  },
  {
    id: 31,
    name: "Kerupuk Finna (Udang/Bawang)",
    price: 103000,
    unit: "1 dus (120 bks)",
    category: "Pangan Lain",
    image:
      "https://plus.unsplash.com/premium_photo-1668618254179-2646395ecb91?w=500&q=80", // Placeholder Kerupuk
  },
  {
    id: 32,
    name: "Kurma Golden Valley",
    price: 280000,
    unit: "10 kg",
    category: "Pangan Lain",
    image:
      "https://images.unsplash.com/photo-1585242371911-309d47225c50?w=500&q=80",
  },
  {
    id: 33,
    name: "Roti Burger",
    price: 1300,
    unit: "1 pcs",
    category: "Pangan Lain",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
  },
  {
    id: 34,
    name: "Roti Hotdog",
    price: 1300,
    unit: "1 pcs",
    category: "Pangan Lain",
    image:
      "https://images.unsplash.com/photo-1619888874676-e816a7f92026?w=500&q=80",
  },
  {
    id: 35,
    name: "Saladah Bokor",
    price: 25000,
    unit: "1 kg",
    category: "Sayuran",
    image:
      "https://images.unsplash.com/photo-1601648764658-ad7772c53327?w=500&q=80",
  },
  {
    id: 36,
    name: "Yakult",
    price: 1900,
    unit: "1 pcs",
    category: "Minuman",
    image:
      "https://images.unsplash.com/photo-1566838323602-0e28f3235b2e?w=500&q=80", // Placeholder Minuman
  },
];

// Helper untuk format rupiah
const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};

const ProductCatalog = () => {
  return (
    <section className="catalog-section" id="katalog">
      <div className="container">
        {/* Header Seksi */}
        <div className="section-header">
          <h2 className="section-title">Katalog Produk Terlengkap</h2>
          <p className="section-subtitle">
            Daftar harga buah-buahan dan pangan lainnya (Update Terbaru).
          </p>
        </div>

        {/* Grid Produk */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-image-wrapper">
                <span className="product-badge">{product.category}</span>
                {/* Catatan: Gunakan loading="lazy" agar website tidak berat 
                   karena memuat banyak gambar sekaligus.
                */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                  loading="lazy"
                />
              </div>

              <div className="card-content">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  {formatRupiah(product.price)}{" "}
                  <span className="unit">/ {product.unit}</span>
                </div>

                {/* Tombol Pesan */}
                <button
                  className="btn-order"
                  onClick={() => alert(`Anda memilih ${product.name}`)}
                >
                  + Keranjang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
