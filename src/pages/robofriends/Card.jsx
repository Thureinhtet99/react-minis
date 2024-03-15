import "./robots.css";

export default function Card({ id, name, email }) {
  return (
    <>
      <div className="col-md-4 col-lg-3 my-2 d-flex justify-content-center">
        <div className="card shadow" style={{ width: "18rem" }}>
          <img src={`https://robohash.org/${id}?150x150`} alt="" />
          <div className="card-body text-center">
            <h5 className="card-title ">{name}</h5>
            <p className="card-text">{email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
