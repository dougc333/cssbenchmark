export default function InventoryTable({ products }) {
  return (
    <div className="table-scroll">
      <table aria-label="Inventory">
        <thead>
          <tr>
            <th scope="col">SKU</th>
            <th scope="col">Product</th>
            <th scope="col">Category</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <th scope="row">{product.name}</th>
              <td>{product.category}</td>
              <td>
                <span
                  className={
                    product.stock > 0 ? "status in-stock" : "status out-of-stock"
                  }
                >
                  {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
