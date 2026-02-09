import React from "react";
import "./footer.css";
import logoImage from "./assets/logo.png"; // Pastikan path logo benar

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* KOLOM 1: Brand & Deskripsi */}
        <div className="footer-col brand-col">
          <img
            src={logoImage}
            alt="Gudang Segar Logo"
            className="footer-logo"
          />
          <p className="footer-desc">
            Mitra terpercaya suplai buah segar untuk kebutuhan bisnis hotel,
            restoran, dan supermarket di seluruh Indonesia.
          </p>
          <div className="footer-socials">
            {/* Link Dummy ke Sosmed */}
            <a href="#" className="social-link">
              Instagram
            </a>
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              Facebook
            </a>
          </div>
        </div>

        {/* KOLOM 2: Quick Links */}
        <div className="footer-col links-col">
          <h3>Perusahaan</h3>
          <ul>
            <li>
              <a href="#about">Tentang Kami</a>
            </li>
            <li>
              <a href="#karir">Karir</a>
            </li>
            <li>
              <a href="#blog">Blog Bisnis</a>
            </li>
            <li>
              <a href="#privacy">Kebijakan Privasi</a>
            </li>
          </ul>
        </div>

        {/* KOLOM 3: Kontak (PENTING untuk B2B) */}
        <div className="footer-col contact-col">
          <h3>Hubungi Kami</h3>
          <div className="contact-item">
            <span className="icon">📍</span>
            <p>
              Jl. Raya Agrobisnis No. 88,
              <br />
              Gudang B4, Jakarta Selatan, 12000
            </p>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <p>+62 812-3456-7890 (WhatsApp)</p>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <p>halo@gudangsegar.com</p>
          </div>
        </div>
      </div>

      {/* Bagian Copyright Bawah */}
      <div className="footer-bottom">
        <p>&copy; 2025 Gudang Segar Indonesia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
