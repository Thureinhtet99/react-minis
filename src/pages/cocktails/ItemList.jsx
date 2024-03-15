import Item from "./Item";

export default function ItemList({
  filteredProducts,
  loadingProducts,
  sort,
  handleSorting,
}) {
  return (
    <>
      <div className="row my-3">
        <div className="col-1 offset-11">
          <select
            name=""
            id=""
            className="form-select form-select-sm"
            onChange={handleSorting}
            value={sort}
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="row my-2">
        {loadingProducts ? (
          <div className="text-center my-3">
            <div className="spinner-border " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          filteredProducts.map((product) => {
            return <Item key={product.id} product={product} />;
          })
        )}
      </div>
    </>
  );
}
