import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-6 px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-surface/85 backdrop-blur-md rounded-full mx-auto max-w-fit px-6 py-3 border border-outline-variant/20 shadow-xl shadow-black/5 flex items-center gap-8">
        <Link to="/" className="font-serif text-2xl font-bold text-primary hover:scale-[1.02] transition-transform duration-300">
          WoodCraft
        </Link>
        <div className="hidden md:flex items-center gap-6 font-serif text-lg tracking-tight">
          <a href="/#produk" className="text-on-surface-variant hover:text-primary transition-colors">Produk</a>
          <a href="/#tentang" className="text-on-surface-variant hover:text-primary transition-colors">Tentang Kami</a>
          <a href="/#proses" className="text-on-surface-variant hover:text-primary transition-colors">Proses</a>
          <a href="/#harga" className="text-on-surface-variant hover:text-primary transition-colors">Harga</a>
        </div>
        <a href="/#kontak" className="bg-primary-container text-on-primary-container px-5 py-2 rounded-full text-sm font-medium hover:scale-[1.02] transition-transform duration-300 active:scale-95">
          Minta Penawaran
        </a>
      </nav>
    </header>
  );
}
