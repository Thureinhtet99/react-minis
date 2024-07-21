import { Link, Route, Routes } from "react-router-dom";
import TodoList from "./todolist/TodoList";
import "./maincontainer.css";
import Shop from "./cocktails/Shop";
import Pokemon from "./pokemon/Pokemon";

export default function MainContainer() {
  return (
    <>
      <div className="container-fluid px-0">
        <header>
          <nav className="navbar navbar-expand-lg bg-body-tertiary border">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  {/* <li className="nav-item mx-2">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/robofriends"
                    >
                      Robofriends
                    </Link>
                  </li> */}
                  <li className="nav-item mx-2">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/todo-list"
                    >
                      Todo List
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/mini-shop"
                    >
                      Mini shop
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/pokemon"
                    >
                      Pokemon
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todo-list" element={<TodoList />} />
            <Route path="/mini-shop" element={<Shop />} />
            <Route path="/pokemon" element={<Pokemon />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
