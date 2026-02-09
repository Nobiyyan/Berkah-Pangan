import React from "react";
import "./header.css";
import logo from "./assets/logo.png"; // Pastikan path ini sesuai dengan lokasi logo Anda

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        {/* LOGO SECTION */}
        <div className="logo-wrapper">
          {/* Ganti src dengan path logo Anda */}
          <img src={logo} alt="Gudang Segar Logo" className="logo" />
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                Tentang Kami
              </a>
            </li>
            <li className="nav-item">
              <a href="#products" className="nav-link">
                Katalog Buah
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Layanan
              </a>
            </li>
          </ul>
        </nav>

        {/* CALL TO ACTION (Penting untuk Bisnis) */}
        <div className="header-actions">
          <a href="#contact" className="btn-primary">
            Kontak Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
