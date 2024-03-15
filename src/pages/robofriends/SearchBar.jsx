export default function SearchBar({onSearchChange}) {
  return (
    <>
      <div className="col-md-12 d-flex justify-content-center">
        <input
          type="text"
          name=""
          id=""
          className="form-control w-25"
          placeholder="Search robofriends....."
          onChange={onSearchChange}
        />
        <button type="button " className="btn btn-success mx-3">
          Search
        </button>
      </div>
    </>
  );
}
