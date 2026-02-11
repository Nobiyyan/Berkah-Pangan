import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Container Flex: Kiri Teks, Kanan Kartu */}
        <div className="about-layout">
          {/* BAGIAN KIRI: Teks Cerita */}
          <div className="about-content">
            <span className="subtitle">Tentang Kami</span>
            <h2 className="title">
              Menghadirkan Kesegaran Terbaik untuk Bisnis Anda
            </h2>
            <p className="description">
              Berawal dari keinginan sederhana untuk menyediakan buah-buahan
              segar yang layak konsumsi,
              <strong> Gudang Segar</strong> hadir sebagai solusi kebutuhan
              vitamin harian Anda.
            </p>
            <p className="description">
              Kami percaya bahwa buah yang enak bukan hanya soal rasa, tapi juga
              kualitas fisik dan kebersihan. Setiap produk yang masuk ke gudang
              kami telah melewati proses{" "}
              <strong>kurasi dan sortir manual</strong>.
            </p>
            <p className="description">
              Tidak perlu repot ke pasar dan memilih satu-satu. Biarkan kami
              yang memilihkan yang terbaik untuk meja makan Anda.
            </p>
          </div>

          {/* BAGIAN KANAN: List Keunggulan (Vertical Stack) */}
          <div className="values-column">
            <div className="value-card">
              <div className="icon">🔍</div>
              <div>
                <h3>Sortir Ketat</h3>
                <p>Kami memisahkan buah grade A dengan yang biasa.</p>
              </div>
            </div>

            <div className="value-card">
              <div className="icon">❄️</div>
              <div>
                <h3>Selalu Fresh</h3>
                <p>Stok berputar cepat setiap hari, anti layu.</p>
              </div>
            </div>

            <div className="value-card">
              <div className="icon">✨</div>
              <div>
                <h3>Bersih & Higienis</h3>
                <p>Disimpan di tempat tertutup dan higienis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
