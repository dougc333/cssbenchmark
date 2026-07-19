import { useMemo, useState } from "react";
import InventoryTable from "./components/InventoryTable.jsx";
import SearchBar from "./components/SearchBar.jsx";
import { products } from "./data/products.js";

export default function App() {
  const [query, setQuery] = useState("");

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return products;
    }

    return products.filter((product) =>
      `${product.name} ${product.category}`
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <main className="inventory-page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Warehouse 04</p>
          <h1>Inventory</h1>
        </div>
        <p className="result-count" aria-live="polite">
          Showing {visibleProducts.length} of {products.length} products
        </p>
      </header>

      <section className="inventory-panel" aria-labelledby="inventory-tools">
        <h2 className="visually-hidden" id="inventory-tools">
          Inventory tools
        </h2>
        <div className="toolbar">
          <SearchBar value={query} onChange={setQuery} />
        </div>
        <InventoryTable products={visibleProducts} />
      </section>
    </main>
  );
}
