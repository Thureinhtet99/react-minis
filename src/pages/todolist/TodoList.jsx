import AddTask from "./AddTask";

export default function TodoList() {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <h2 className="text-center text-uppercase text-muted fw-bold ">
            Things to do
          </h2>
          <AddTask />
        </div>
      </div>
    </>
  );
}
