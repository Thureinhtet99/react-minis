import ItemList from "./ItemList";

export default function Category({
  filteredProducts,
  categories,
  handleCategory,
  handleAllCategory,
  selectedCategory,
  loadingCategories,
  loadingProducts,
  sort,
  handleSorting
}) {

 

  return (
    <>
      <div className="row d-flex justify-content-center align-items-center my-3 border-top border-bottom">
        <div className="col-md-2 col-sm-3 text-center">
          <button
            type="button"
            className={`btn my-1 fw-medium px-3 ${
              selectedCategory === null ? "bg-secondary text-white" : ""
            } text-capitalize`}
            onClick={handleAllCategory}
          >
            All
          </button>
        </div>
        {loadingCategories ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          categories.map((category, index) => {
            return (
              <div className="col-md-2 col-sm-3 text-center" key={index}>
                <button
                  type="button"
                  className={`btn my-1 fw-medium px-3 ${
                    selectedCategory === category
                      ? "bg-secondary text-white"
                      : ""
                  } text-capitalize`}
                  onClick={() => {
                    handleCategory(category);
                  }}
                >
                  {category}
                </button>
              </div>
            );
          })
        )}
      </div>
      <ItemList
        filteredProducts={filteredProducts}
        loadingProducts={loadingProducts}
        sort={sort}
        handleSorting={handleSorting}
      />
    </>
  );
}
