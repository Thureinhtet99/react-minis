import FooterBar from "./FooterBar";

export default function Task({ setTaskArray, toDisplayTasks }) {
  const deleteBtn = (id) => {
    return setTaskArray(
      toDisplayTasks.filter((fil) => {
        return fil.id !== id;
      })
    );
  };

  const checkBox = (id, completed) => {
    return setTaskArray(
      toDisplayTasks.map((item) => {
        // console.log(item);
        if (item.id === id) {
          return { ...item, completed };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-between">
        <div className="row ">
          <div
            className="col-md-6 offset-md-3 overflow-auto"
            style={{ height: "57vh" }}
          >
            {!toDisplayTasks.length ? (
              <p className="text-muted text-center">
                There is no tasks yet....
              </p>
            ) : (
              toDisplayTasks.map((arr) => {
                return (
                  <div
                    className="form-check py-3 border-bottom d-flex justify-content-between align-items-center"
                    key={arr.id}
                  >
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={arr.id}
                        checked={arr.completed}
                        onChange={(event) =>
                          checkBox(arr.id, event.target.checked)
                        }
                      />
                      <label className="form-check-label" htmlFor={arr.id}>
                        {arr.name}
                      </label>
                    </div>
                    <button
                      className="btn btn-sm border"
                      onClick={() => deleteBtn(arr.id)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
