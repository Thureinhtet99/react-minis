import { useState } from "react";
import FooterBar from "./FooterBar";

export default function SearchBox({ setTaskArray, taskArray }) {
  const [search, setSearch] = useState("");

  const filteredTask = taskArray.filter((task) => {
    return task.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3 d-flex justify-content-center align-items-center border-bottom px-3 mb-3">
          <input
            type="search"
            name=""
            id=""
            className="form-control form-control-sm border-0 border-0"
            placeholder="Search tasks....."
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="button" className="btn border-0">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <FooterBar setTaskArray={setTaskArray} filteredTask={filteredTask} />
    </>
  );
}
