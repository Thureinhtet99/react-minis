export default function Item({ product }) {
  return (
    <>
      <div className="col-md-3 col-sm-6 my-2 d-flex justify-content-center">
        <div className="card border-0 shadow-sm" style={{ width: "12rem" }}>
          <img
            src={product.image}
            className="card-img-top object-fit-contain"
            alt={product.title}
            height={"150px"}
          />
          <div className="card-body">
            <p className="card-text text-center text-capitalize">
              {product.title}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <span><i className="fa-solid fa-star me-1"></i>{product.rating.rate}</span>
              <span><i className="fa-solid fa-dollar-sign me-1"></i>{product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
