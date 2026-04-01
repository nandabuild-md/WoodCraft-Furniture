import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full pt-20 pb-10 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-screen-2xl mx-auto">
        <div className="lg:col-span-2">
          <span className="font-serif text-4xl text-primary mb-8 block">WoodCraft</span>
          <p className="text-on-surface-variant max-w-sm mb-8 font-sans">
            Karya seni abadi untuk ruang hidup modern. Dibuat dengan cinta dan dedikasi dari pusat kerajinan kayu dunia.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-sans text-sm tracking-wide uppercase">Instagram</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-sans text-sm tracking-wide uppercase">TikTok</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-sans text-sm tracking-wide uppercase">WhatsApp</a>
          </div>
        </div>
        <div>
          <h4 className="font-sans text-primary text-xs uppercase tracking-widest mb-6 font-semibold">Navigasi</h4>
          <ul className="space-y-4">
            <li><a href="/#produk" className="text-on-surface-variant hover:text-primary transition-colors font-sans text-sm tracking-wide uppercase">Produk</a></li>
            <li><a href="/#tentang" className="text-on-surface-variant hover:text-primary transition-colors font-sans text-sm tracking-wide uppercase">Tentang Kami</a></li>
            <li><a href="/#proses" className="text-on-surface-variant hover:text-primary transition-colors font-sans text-sm tracking-wide uppercase">Proses</a></li>
            <li><a href="/#harga" className="text-on-surface-variant hover:text-primary transition-colors font-sans text-sm tracking-wide uppercase">Harga</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-primary text-xs uppercase tracking-widest mb-6 font-semibold">Lokasi</h4>
          <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-4">
            Jl. Pemuda No. 45, Jepara,<br/>Jawa Tengah, Indonesia.
          </p>
          <div className="flex items-center gap-2 text-[#C4714A]">
            <MapPin className="w-4 h-4" />
            <span className="text-xs font-sans uppercase tracking-widest font-semibold">Jepara, ID</span>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-outline-variant/30 text-center">
        <p className="text-on-surface-variant font-sans text-xs tracking-widest uppercase">© 2024 WoodCraft. Jepara, Jawa Tengah.</p>
      </div>
    </footer>
  );
}
