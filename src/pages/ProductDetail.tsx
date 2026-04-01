import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronRight, PlayCircle } from "lucide-react";
import { products } from "../data/products";

// Define the specific data structure for the Walnut Table based on the image
const walnutTableData = {
  id: "1",
  name: "Meja Makan Walnut",
  collection: "DINING COLLECTION",
  basePrice: 4200000,
  description: "Mahakarya minimalis yang mengekspos keindahan alami serat kayu walnut Amerika. Didesain untuk kehangatan ruang makan keluarga dengan konstruksi mortise and tenon tradisional.",
  images: [
    "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop"
  ],
  materials: [
    { id: "walnut", name: "Walnut", priceModifier: 0, color: "bg-[#3d2b1f]" },
    { id: "jati", name: "Jati", priceModifier: -400000, color: "bg-[#6d4c41]" },
    { id: "sungkai", name: "Sungkai", priceModifier: -800000, color: "bg-[#a1887f]" },
    { id: "mdf", name: "MDF", priceModifier: -1500000, color: "bg-[#d7ccc8]" }
  ],
  dimensions: [
    { label: "Kapasitas 4 Kursi", p: 160, l: 80, t: 75 },
    { label: "Kapasitas 6 Kursi", p: 210, l: 90, t: 75 }
  ],
  variants: [
    { id: "4-kursi", label: "4 Kursi (160cm)", priceModifier: 0 },
    { id: "6-kursi", label: "6 Kursi (210cm)", priceModifier: 1500000 }
  ],
  finishes: [
    "Natural Oiled",
    "Walnut Stain",
    "White Wash",
    "Custom Polyurethane"
  ]
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // We'll use the hardcoded data for ID 1 to match the design perfectly, 
  // otherwise fallback to generic product data (though generic won't have all the specific options)
  const isWalnutTable = id === "1";
  const product = isWalnutTable ? walnutTableData : products.find(p => p.id === id);

  const [mainImage, setMainImage] = useState(isWalnutTable ? walnutTableData.images[0] : product?.image || "");
  const [selectedMaterial, setSelectedMaterial] = useState(isWalnutTable ? walnutTableData.materials[0] : null);
  const [selectedVariant, setSelectedVariant] = useState(isWalnutTable ? walnutTableData.variants[0] : null);
  const [selectedFinish, setSelectedFinish] = useState(isWalnutTable ? walnutTableData.finishes[0] : "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Produk tidak ditemukan</h2>
        <Link to="/" className="text-primary underline">Kembali ke Beranda</Link>
      </div>
    );
  }

  // Calculate total price
  const totalPrice = isWalnutTable 
    ? walnutTableData.basePrice + selectedMaterial!.priceModifier + selectedVariant!.priceModifier
    : parseInt(product.price.replace(/[^0-9]/g, '')); // Fallback parsing

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to checkout with state
    navigate('/checkout', { 
      state: { 
        product: product.name,
        material: selectedMaterial?.name,
        variant: selectedVariant?.label,
        finish: selectedFinish,
        totalPrice
      } 
    });
  };

  return (
    <div className="bg-surface min-h-screen pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-12 text-sm text-on-surface-variant font-sans tracking-wide uppercase">
          <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/#produk" className="hover:text-primary transition-colors">Produk</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-bold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Image Gallery */}
          <section className="lg:col-span-7 lg:sticky lg:top-32 space-y-6">
            <div className="aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden relative group shadow-sm">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
              <motion.img 
                key={mainImage}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={mainImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {isWalnutTable && (
              <div className="grid grid-cols-4 gap-4">
                {walnutTableData.images.slice(0, 3).map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`aspect-square rounded-md overflow-hidden p-1 bg-surface transition-all ${mainImage === img ? 'border-2 border-primary-container ring-offset-2' : 'border border-outline-variant/30 hover:border-primary'}`}
                  >
                    <img src={img} alt={`Detail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
                <div className="aspect-square rounded-md bg-surface-container-highest flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  <PlayCircle className="text-on-surface-variant w-8 h-8 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            )}
          </section>

          {/* Right: Product Info & Form */}
          <section className="lg:col-span-5 space-y-12">
            <header>
              <span className="text-on-tertiary-container font-sans text-sm tracking-[0.15em] uppercase mb-4 block">
                {isWalnutTable ? walnutTableData.collection : product.category}
              </span>
              <h1 className="font-serif text-5xl text-primary leading-tight mb-4">{product.name}</h1>
              <div className="flex items-baseline gap-3">
                <span className="text-on-surface-variant font-sans">Mulai</span>
                <span className="text-3xl font-serif italic text-primary">
                  {isWalnutTable ? formatPrice(walnutTableData.basePrice) : product.price}
                </span>
              </div>
            </header>

            <p className="text-on-surface-variant text-lg leading-relaxed font-sans max-w-lg">
              {product.description}
            </p>

            {isWalnutTable && (
              <>
                {/* Material Selector */}
                <div className="space-y-6">
                  <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-on-surface-variant">Pilihan Material Utama</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {walnutTableData.materials.map((mat) => (
                      <button 
                        key={mat.id}
                        type="button"
                        onClick={() => setSelectedMaterial(mat)}
                        className={`flex flex-col items-center gap-3 p-4 rounded-xl transition-all ${selectedMaterial?.id === mat.id ? 'bg-surface-container-lowest border-2 border-primary shadow-sm' : 'bg-surface hover:bg-surface-container-low border border-outline-variant/30'}`}
                      >
                        <div className={`w-12 h-12 rounded-full ${mat.color} overflow-hidden relative`}>
                          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-tighter">{mat.name}</span>
                        <span className={`text-[10px] ${mat.priceModifier === 0 ? 'text-primary' : 'text-on-tertiary-container'}`}>
                          {mat.priceModifier === 0 ? '+0' : `${mat.priceModifier < 0 ? '-' : '+'}Rp ${Math.abs(mat.priceModifier) / 1000}rb`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dimensions */}
                <div className="p-8 bg-surface-container-low rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/30 rounded-full blur-3xl -mr-10 -mt-10"></div>
                  <h3 className="font-sans text-sm font-bold tracking-widest uppercase text-on-surface-variant mb-6 relative z-10">Dimensi Produk</h3>
                  <div className="space-y-4 relative z-10">
                    {walnutTableData.dimensions.map((dim, idx) => (
                      <div key={idx} className={`flex justify-between items-end border-b border-outline-variant/20 pb-2 ${selectedVariant?.id.includes(dim.label.split(' ')[1].toLowerCase()) ? '' : 'opacity-50'}`}>
                        <span className="text-sm font-medium">{dim.label}</span>
                        <div className="flex gap-4">
                          <span className="font-serif italic text-xl text-primary">{dim.p} <span className="text-xs font-sans not-italic text-on-surface-variant/60">P</span></span>
                          <span className="font-serif italic text-xl text-primary">{dim.l} <span className="text-xs font-sans not-italic text-on-surface-variant/60">L</span></span>
                          <span className="font-serif italic text-xl text-primary">{dim.t} <span className="text-xs font-sans not-italic text-on-surface-variant/60">T</span></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleOrder} className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-sans text-xs font-bold uppercase text-on-surface-variant">Varian Ukuran</label>
                      <select 
                        value={selectedVariant?.id}
                        onChange={(e) => setSelectedVariant(walnutTableData.variants.find(v => v.id === e.target.value)!)}
                        className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary font-sans text-lg appearance-none cursor-pointer"
                      >
                        {walnutTableData.variants.map(v => (
                          <option key={v.id} value={v.id}>{v.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="font-sans text-xs font-bold uppercase text-on-surface-variant">Finish Tipe</label>
                      <select 
                        value={selectedFinish}
                        onChange={(e) => setSelectedFinish(e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary font-sans text-lg appearance-none cursor-pointer"
                      >
                        {walnutTableData.finishes.map(f => (
                          <option key={f} value={f}>{f}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="p-8 bg-tertiary-fixed rounded-2xl border border-on-tertiary-container/10 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <span className="font-sans text-xs font-bold uppercase text-on-tertiary-fixed-variant">Estimasi Harga</span>
                        <p className="font-serif text-4xl text-on-tertiary-fixed mt-1">{formatPrice(totalPrice)}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-sans text-on-tertiary-fixed-variant/60 uppercase">Pengerjaan</span>
                        <p className="text-sm font-bold text-on-tertiary-fixed">14-21 Hari</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary text-on-primary py-5 rounded-full flex items-center justify-center gap-3 font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                    Kirim Penawaran via WhatsApp
                  </button>
                  <p className="text-center text-xs text-on-surface-variant uppercase tracking-widest">Harga belum termasuk ongkir dari Jepara</p>
                </form>
              </>
            )}
            
            {!isWalnutTable && (
               <div className="space-y-6 mb-12">
                 <button 
                   onClick={handleOrder}
                   className="w-full bg-primary text-on-primary py-4 rounded-full font-medium tracking-wide hover:bg-primary/90 transition-colors text-lg"
                 >
                   Beli Sekarang
                 </button>
               </div>
            )}
          </section>
        </div>

        {/* Related Products */}
        <section className="mt-40">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl text-primary mb-2">Koleksi Terkait</h2>
              <p className="text-on-surface-variant">Lengkapi estetika hunian Anda dengan kurasi pilihan kami.</p>
            </div>
            <Link to="/#produk" className="font-sans text-sm font-bold border-b-2 border-primary pb-1 tracking-widest uppercase hover:text-tertiary-container transition-colors">
              Lihat Semua
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.filter(p => p.id !== id).slice(0, 3).map(related => (
              <Link to={`/product/${related.id}`} key={related.id} className="group cursor-pointer block">
                <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden mb-6 relative">
                  <img 
                    src={related.image} 
                    alt={related.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
                </div>
                <span className="text-on-tertiary-container font-sans text-[10px] uppercase tracking-widest mb-1 block">
                  {related.category.split(' ')[0]}
                </span>
                <h3 className="font-serif text-2xl text-primary mb-2">{related.name}</h3>
                <p className="font-sans text-sm text-on-surface-variant line-clamp-1">{related.description}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
