import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import { products } from './data/products';

function App() {
  return (
    <div className="min-h-screen flex flex-col pt-20 pb-10">
      <Navbar />
      <CartSidebar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6">
        {/* Hero / Header Section */}
        <header className="py-12 md:py-20 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal tracking-tight animate-slide-in">
            Curated Essentials
          </h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Elevate your space with our handpicked collection of sustainable, timeless designs.
          </p>
        </header>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </section>
      </main>

      <footer className="mt-20 py-8 text-center text-charcoal/40 text-sm border-t border-charcoal/5">
        &copy; {new Date().getFullYear()} Aroha Shop. Designed for serenity.
      </footer>
    </div>
  );
}

export default App;
