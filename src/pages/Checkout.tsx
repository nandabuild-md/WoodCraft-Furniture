import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const location = useLocation();
  const orderDetails = location.state;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="bg-surface-container-low min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2 bg-surface rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/20">
              <Link to={-1 as any} className="inline-flex items-center text-on-surface-variant hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" /> Batal
              </Link>

              <h1 className="font-serif text-3xl md:text-4xl text-primary mb-8">Informasi Pengiriman</h1>

              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">Nama Depan</label>
                    <input required type="text" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">Nama Belakang</label>
                    <input required type="text" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-on-surface">Email</label>
                  <input required type="email" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-on-surface">Alamat Lengkap</label>
                  <textarea required rows={3} className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">Kota</label>
                    <input required type="text" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">Kode Pos</label>
                    <input required type="text" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </div>
                </div>

                <div className="pt-8 border-t border-outline-variant/30 mt-8">
                  <h2 className="font-serif text-2xl text-primary mb-6">Metode Pembayaran</h2>
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-container transition-colors">
                      <input type="radio" name="payment" className="w-5 h-5 text-primary focus:ring-primary" defaultChecked />
                      <span className="ml-3 font-medium text-on-surface">Transfer Bank (BCA, Mandiri, BNI)</span>
                    </label>
                    <label className="flex items-center p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-container transition-colors">
                      <input type="radio" name="payment" className="w-5 h-5 text-primary focus:ring-primary" />
                      <span className="ml-3 font-medium text-on-surface">Kartu Kredit</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-surface rounded-3xl p-8 shadow-sm border border-outline-variant/20 sticky top-32">
                <h2 className="font-serif text-2xl text-primary mb-6">Ringkasan Pesanan</h2>
                
                {orderDetails ? (
                  <div className="space-y-4 mb-8">
                    <div>
                      <h3 className="font-bold text-on-surface">{orderDetails.product}</h3>
                      <ul className="text-sm text-on-surface-variant mt-2 space-y-1">
                        <li>Material: {orderDetails.material}</li>
                        <li>Ukuran: {orderDetails.variant}</li>
                        <li>Finish: {orderDetails.finish}</li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                      <span className="font-medium">Total</span>
                      <span className="font-serif text-xl text-primary">{formatPrice(orderDetails.totalPrice)}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-on-surface-variant mb-8">Tidak ada detail pesanan.</p>
                )}

                <button form="checkout-form" type="submit" className="w-full bg-primary text-on-primary py-4 rounded-full font-medium tracking-wide hover:bg-primary/90 transition-colors text-lg">
                  Selesaikan Pesanan
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface rounded-3xl p-8 md:p-16 shadow-sm border border-outline-variant/20 text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-on-primary-fixed" />
            </div>
            <h1 className="font-serif text-4xl text-primary mb-4">Pesanan Berhasil!</h1>
            <p className="text-on-surface-variant text-lg mb-8 max-w-md mx-auto">
              Terima kasih atas pesanan Anda. Kami telah mengirimkan detail pesanan dan instruksi pembayaran ke email Anda.
            </p>
            <div className="bg-surface-container-low p-6 rounded-2xl mb-10 max-w-sm mx-auto">
              <p className="text-sm text-on-surface-variant mb-1">Nomor Pesanan</p>
              <p className="font-mono text-xl font-semibold text-primary">#WD-847291</p>
            </div>
            <Link to="/" className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-medium tracking-wide hover:bg-primary/90 transition-colors">
              Kembali ke Beranda
            </Link>
          </motion.div>
        )}

      </div>
    </div>
  );
}
