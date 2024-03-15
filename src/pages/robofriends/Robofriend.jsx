import { useEffect, useState } from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";

export default function Robofriends() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setRobots(json);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="container">
      <div className="row my-3">
        <SearchBar onSearchChange={onSearchChange} />
      </div>
      {!robots.length ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row overflow-auto border" style={{ height: "80vh" }}>
          <CardList filteredRobots={filteredRobots} />
        </div>
      )}
    </div>
  );
}
