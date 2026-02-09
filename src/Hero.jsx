import React from "react";
import "./hero.css";
import heroImg from "./assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-layout">
        <div className="hero-content">
          <span className="badge">Mitra Terpercaya Sejak 2024</span>
          <h1 className="hero-title">
            Pasok Buah Segar <br />
            <span className="highlight-text">Langsung dari Sumber</span>
          </h1>
          <p className="hero-description">
            Solusi suplai buah grade premium untuk supermarket, hotel, dan
            bisnis kuliner Anda. Kualitas terjaga dari kebun hingga ke gudang
            Anda.
          </p>

          <div className="hero-buttons">
            <a href="#katalog" className="btn-primary">
              Lihat Katalog
            </a>
            <a href="#konsultasi" className="btn-secondary">
              Konsultasi Stok
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <strong>50+</strong>
              <span>Jenis Buah</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <strong>24 Jam</strong>
              <span>Pengiriman</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Buah Segar Gudang" className="hero-img" />
          <div className="blob-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
