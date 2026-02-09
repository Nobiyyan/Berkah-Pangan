import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import "./App.css";
import ProductCatalog from "./ProductCatalog.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <Hero />
        <ProductCatalog />
        <Footer />
      </main>
    </div>
  );
}

export default App;
