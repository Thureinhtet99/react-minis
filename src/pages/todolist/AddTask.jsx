import { useState } from "react";
import SearchBox from "./SearchBox";

export default function AddTask() {
  const [tasks, setTasks] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const addTask = () => {
    setTaskArray((task) => {
      return [...task, { id: Date.now(), name: tasks, completed: false }];
    });
    setTasks("");
  };

  const onPressEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  };

  return (
    <>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <input
          type="search"
          name=""
          id=""
          className="form-control w-25 my-2"
          placeholder="Add tasks"
          value={tasks}
          onChange={(event) => setTasks(event.target.value)}
          onKeyUp={onPressEnter}
        />
        <button
          type="button"
          className="btn btn-secondary mx-3"
          onClick={addTask}
        >
          <i className="fa-solid fa-plus me-1"></i> Add
        </button>
      </div>

      <SearchBox setTaskArray={setTaskArray} taskArray={taskArray} />
    </>
  );
}
