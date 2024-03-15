import { useEffect, useState } from "react";
import Category from "./Category";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [search, setSearch] = useState("");
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [sort, setSort] = useState("");

  useEffect(() => {
    setLoadingCategories(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setLoadingCategories(false);
      });

    setLoadingProducts(true);
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoadingProducts(false);
      });
  }, []);

  // All Category
  const handleAllCategory = () => {
    setSelectedCategory(null);
    setLoadingCategories(true);
    fetch(`https://fakestoreapi.com/products?sort=desc`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoadingCategories(false);
      });
  };

  // Category
  const handleCategory = (category) => {
    setSelectedCategory(category);
    setLoadingProducts(true);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoadingProducts(false);
      });
  };

  // Search
  const handleSearch = (event) => {
    return setSearch(event.target.value);
  };

  // Sorting
  const handleSorting = (event) => {
    const selectedSort = event.target.value;

    if (selectedSort === "latest") {
      setLoadingProducts(true);
      fetch("https://fakestoreapi.com/products?sort=desc")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setLoadingProducts(false);
        });
    } else if (selectedSort === "oldest") {
      setLoadingProducts(true);
      fetch("https://fakestoreapi.com/products?sort=asc")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setLoadingProducts(false);
        });
    }
    setSort(selectedSort);
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="container overflow-auto" style={{ maxHeight: "91vh" }}>
        <div className="row my-1">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <h2 className="text-muted text-start fw-bold my-0">Mini Shop</h2>
            <div className="d-flex align-items-center">
              <input
                type="search"
                name=""
                id=""
                className="form-control"
                placeholder="Search here....."
                onChange={handleSearch}
              />
              <button
                type="button"
                className="btn border-primary text-primary mx-3"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <Category
          filteredProducts={filteredProducts}
          categories={categories}
          handleCategory={handleCategory}
          handleAllCategory={handleAllCategory}
          selectedCategory={selectedCategory}
          loadingCategories={loadingCategories}
          loadingProducts={loadingProducts}
          setProducts={setProducts}
          sort={sort}
          handleSorting={handleSorting}
        />
      </div>
    </>
  );
}
