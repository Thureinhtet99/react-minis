import { useState } from "react";
import Task from "./Task";
import "./footerbar.css";

export default function FooterBar({ setTaskArray, filteredTask }) {
  const leftTasksCount = filteredTask.filter((task) => !task.completed).length;

  const [filter, setFilter] = useState("all");

  const handleFilter = (condition) => {
    setFilter(condition);
  };

  let toDisplayTasks = [];
  if (filter === "all") {
    toDisplayTasks = filteredTask;
  } else if (filter === "completed") {
    toDisplayTasks = filteredTask.filter((task) => task.completed);
  }

  return (
    <>
      <Task setTaskArray={setTaskArray} toDisplayTasks={toDisplayTasks} />

      <div className="row">
        <div className="col-md-6 offset-md-3 py-3 bg-body-tertiary d-flex justify-content-between align-items-center border">
          <p className="text-muted my-0">{leftTasksCount} tasks left</p>
          <div className="text-muted d-flex align-items-center">
            <p
              className={`mx-3 my-0 nav-link ${
                filter === "all" ? "text-black fw-medium" : ""
              }`}
              onClick={() => handleFilter("all")}
            >
              All
            </p>
            <p
              className={`mx-3 my-0 nav-link ${
                filter === "completed" ? "text-black fw-medium" : ""
              }`}
              onClick={() => handleFilter("completed")}
            >
              Completed
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
