import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { products } from "../data/products";
import { ArrowRight, Check, Plus, X } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <CatalogSection />
      <AboutSection />
      <TestimonialSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Interior Design" 
          className="w-full h-full object-cover grayscale-[20%] brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </motion.div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] mb-8">
            Furniture yang Dibuat untuk <span className="italic">Ruang Kamu.</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#produk" className="inline-flex items-center justify-center px-8 py-4 bg-primary-container text-on-primary-container rounded-sm font-medium hover:bg-primary hover:text-on-primary transition-colors group">
              Lihat Katalog
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20membuat%20website%20furniture%20custom%20seperti%20WoodCraft%20di%20demo6.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-surface/80 backdrop-blur-sm border border-outline-variant/80 shadow-md text-primary rounded-sm font-medium hover:bg-surface transition-colors">
              Konsultasi Desain
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CatalogSection() {
  return (
    <section id="produk" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans text-on-secondary-container tracking-widest uppercase text-xs mb-4 block font-semibold">Koleksi Terkini</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Karya yang Melampaui Waktu</h2>
          </div>
          <div className="text-on-surface-variant font-sans">
            Semua material dipilih dengan tangan untuk daya tahan dan estetika.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-surface-container-low mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl text-primary mb-1">{product.name}</h3>
                  <p className="text-on-surface-variant text-sm">{product.category}</p>
                </div>
                <span className="font-sans text-[#C4714A] font-bold">{product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="tentang" className="py-24 md:py-32 bg-surface-container-low overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square relative z-10 overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop" 
                alt="Artisan Hands" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-video bg-surface-container-highest z-0 border border-outline-variant/20 hidden lg:block"></div>
          </div>
          <div className="lg:pl-12">
            <span className="font-sans text-[#C4714A] tracking-widest uppercase text-xs mb-4 block font-semibold">Dedikasi & Detail</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">Mewujudkan Jiwa Kayu ke dalam Ruang Hidup.</h2>
            <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
              Kami percaya bahwa furniture bukan sekadar benda mati. Di WoodCraft, setiap serat kayu jati dan walnut diproses secara manual oleh pengrajin ahli kami di Jepara untuk menceritakan kisah kehangatan dan keabadian.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-sm border border-outline-variant/10">
                <span className="block text-3xl font-serif text-primary mb-1">500+</span>
                <span className="text-xs uppercase tracking-wider font-sans text-on-surface-variant font-semibold">Proyek</span>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-sm border border-outline-variant/10">
                <span className="block text-3xl font-serif text-primary mb-1">7 Tahun</span>
                <span className="text-xs uppercase tracking-wider font-sans text-on-surface-variant font-semibold">Pengalaman</span>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-sm border border-outline-variant/10">
                <span className="block text-3xl font-serif text-primary mb-1">34 Kota</span>
                <span className="text-xs uppercase tracking-wider font-sans text-on-surface-variant font-semibold">Pengiriman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="py-24 md:py-32 bg-primary-container text-surface-container-low relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Apa Kata Mereka?</h2>
          <p className="font-sans opacity-70 text-white">Kepercayaan adalah pondasi dari setiap karya yang kami buat.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#2D1F16] p-10 rounded-sm border border-white/5 flex flex-col justify-between h-full">
            <p className="font-serif italic text-xl mb-8 leading-relaxed text-white/90">"Meja makannya benar-benar menjadi pusat perhatian di rumah kami. Kualitas kayunya luar biasa, sangat halus."</p>
            <div>
              <p className="font-bold text-white">Hendra & Lia</p>
              <p className="text-sm opacity-50 text-white">Jakarta Selatan</p>
            </div>
          </div>
          <div className="bg-[#2D1F16] p-10 rounded-sm border border-white/5 flex flex-col justify-between h-full lg:-translate-y-6">
            <p className="font-serif italic text-xl mb-8 leading-relaxed text-white/90">"Proses kustomisasinya sangat mudah. Mereka mengerti visi desain saya dan hasilnya presisi seperti yang saya mau."</p>
            <div>
              <p className="font-bold text-white">Reza Firmansyah</p>
              <p className="text-sm opacity-50 text-white">Bandung</p>
            </div>
          </div>
          <div className="bg-[#2D1F16] p-10 rounded-sm border border-white/5 flex flex-col justify-between h-full">
            <p className="font-serif italic text-xl mb-8 leading-relaxed text-white/90">"Tim pengirimannya profesional dan sangat hati-hati saat instalasi. Sangat merekomendasikan WoodCraft!"</p>
            <div>
              <p className="font-bold text-white">Sari Dewi</p>
              <p className="text-sm opacity-50 text-white">Surabaya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="proses" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="font-sans text-[#C4714A] tracking-widest uppercase text-xs mb-4 block font-semibold">Alur Kerja</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary">Dari Konsep ke Ruang Kamu</h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <div className="text-center relative">
            <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-8 border border-outline-variant/30">
              <span className="font-serif text-2xl text-primary">01</span>
            </div>
            <h3 className="font-serif text-2xl text-primary mb-4">Konsultasi</h3>
            <p className="text-on-surface-variant">Diskusikan visi, dimensi, dan material yang kamu inginkan dengan desainer kami.</p>
            <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-outline-variant/30 z-0"></div>
          </div>
          <div className="text-center relative">
            <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="font-serif text-2xl">02</span>
            </div>
            <h3 className="font-serif text-2xl text-primary mb-4">Produksi</h3>
            <p className="text-on-surface-variant">Pengrajin kami mulai mengerjakan pesanan kamu dengan ketelitian tinggi di atelier kami.</p>
            <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-outline-variant/30 z-0"></div>
          </div>
          <div className="text-center relative">
            <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-8 border border-outline-variant/30">
              <span className="font-serif text-2xl text-primary">03</span>
            </div>
            <h3 className="font-serif text-2xl text-primary mb-4">Pengiriman</h3>
            <p className="text-on-surface-variant">Furniture dikirim dan diinstal dengan aman langsung ke lokasi kamu di seluruh Indonesia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="harga" className="py-24 md:py-32 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">Pilih Paket Kamu</h2>
          <p className="text-on-surface-variant">Investasi untuk kenyamanan jangka panjang di rumah kamu.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="bg-surface p-10 rounded-sm border border-outline-variant/20 flex flex-col h-full">
            <h3 className="font-sans text-sm uppercase tracking-widest text-on-surface-variant mb-4 font-semibold">Starter</h3>
            <div className="mb-8">
              <span className="text-4xl font-serif text-primary">Rp 3jt</span>
              <span className="text-sm opacity-60 ml-1">/ item mulai dari</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow text-sm">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#C4714A]" /> Kayu Mahoni / Pinus</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#C4714A]" /> Desain Katalog Standar</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#C4714A]" /> Garansi 6 Bulan</li>
              <li className="flex items-center gap-3 opacity-30"><X className="w-4 h-4" /> Kustom Dimensi</li>
            </ul>
            <a href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20membuat%20website%20furniture%20custom%20seperti%20WoodCraft%20di%20demo6.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-transparent border border-outline text-primary font-medium rounded-sm hover:bg-surface-container-high transition-colors text-center block">Pilih Starter</a>
          </div>
          <div className="bg-primary-container p-10 rounded-sm shadow-2xl relative z-10 flex flex-col h-full transform lg:scale-105">
            <div className="absolute top-0 right-10 bg-[#C4714A] text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1 -translate-y-1/2 rounded-full">Terpopuler</div>
            <h3 className="font-sans text-sm uppercase tracking-widest text-on-primary-container mb-4 font-semibold">Growth</h3>
            <div className="mb-8">
              <span className="text-4xl font-serif text-white">Rp 6.5jt</span>
              <span className="text-sm text-on-primary-container ml-1">/ item mulai dari</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow text-sm text-surface-container-low">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tertiary-fixed" /> Kayu Jati / Oak</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tertiary-fixed" /> Kustom Dimensi Ringan</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tertiary-fixed" /> Garansi 2 Tahun</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tertiary-fixed" /> Finishing Matte/Satin</li>
            </ul>
            <a href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20membuat%20website%20furniture%20custom%20seperti%20WoodCraft%20di%20demo6.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-white text-primary-container font-medium rounded-sm hover:bg-surface-container-low transition-colors text-center block">Pilih Growth</a>
          </div>
          <div className="bg-surface p-10 rounded-sm border border-outline-variant/20 flex flex-col h-full">
            <h3 className="font-sans text-sm uppercase tracking-widest text-on-surface-variant mb-4 font-semibold">Ultimate</h3>
            <div className="mb-8">
              <span className="text-4xl font-serif text-primary">Rp 14jt</span>
              <span className="text-sm opacity-60 ml-1">/ item mulai dari</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow text-sm">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#C4714A]" /> Kayu Walnut Premium</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#C4714A]" /> Kustom Desain Penuh</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#C4714A]" /> Garansi Seumur Hidup</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#C4714A]" /> Prioritas Pengiriman</li>
            </ul>
            <a href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20membuat%20website%20furniture%20custom%20seperti%20WoodCraft%20di%20demo6.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-transparent border border-outline text-primary font-medium rounded-sm hover:bg-surface-container-high transition-colors text-center block">Pilih Ultimate</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Apa jenis kayu yang paling sering digunakan?",
      a: "Kami menggunakan Jati, Walnut, dan Oak sebagai material utama karena durabilitas dan keindahan seratnya. Semua kayu kami bersumber dari hutan berkelanjutan."
    },
    {
      q: "Berapa lama waktu produksi untuk furniture kustom?",
      a: "Waktu produksi rata-rata berkisar antara 4-8 minggu, tergantung pada tingkat kerumitan desain dan ketersediaan material khusus."
    },
    {
      q: "Apakah bisa melihat contoh material sebelum memesan?",
      a: "Tentu. Anda bisa mengunjungi showroom kami di Jepara atau kami dapat mengirimkan 'sample kit' ke alamat Anda untuk biaya pengiriman saja."
    },
    {
      q: "Bagaimana sistem garansi produk WoodCraft?",
      a: "Kami memberikan garansi struktur untuk semua produk kami. Jangka waktunya bervariasi dari 6 bulan hingga seumur hidup sesuai dengan paket yang dipilih."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="font-serif text-4xl text-primary text-center mb-16">Pertanyaan Umum</h2>
        <div className="space-y-0 border-t border-outline-variant/30">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant/30 py-8 group cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center gap-4">
        <h3 className="font-serif text-xl text-primary">{question}</h3>
        <Plus className={`text-on-surface-variant transition-transform ${isOpen ? 'rotate-45' : ''}`} />
      </div>
      <div className={`mt-4 text-on-surface-variant overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        {answer}
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section id="kontak" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative rounded-sm overflow-hidden min-h-[400px] flex items-center justify-center text-center px-6">
          <img 
            src="https://images.unsplash.com/photo-1611486212557-88be5ff6f941?q=80&w=2000&auto=format&fit=crop" 
            alt="Wood Grain Background" 
            className="absolute inset-0 w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">Mulai Proyek Kamu.</h2>
            <a href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20membuat%20website%20furniture%20custom%20seperti%20WoodCraft%20di%20demo6.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-5 bg-white text-primary-container rounded-sm font-bold text-lg hover:bg-surface-container-low transition-colors shadow-lg">
              Minta Penawaran Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
