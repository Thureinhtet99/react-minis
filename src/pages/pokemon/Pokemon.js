import { useEffect, useState } from "react";
import "./pokemon.css";

export default function Pokemon() {
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [firstArray, setFirstArray] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Type
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((json) => {
        setTypes(json.results.slice(0, 18));
      });
  }, []);

  // More pokemons
  const morePokemons = () => {
    fetch(firstArray)
      .then((res) => res.json())
      .then((json) => {
        setFirstArray(json.next);

        json.results.forEach((item) => {
          fetch(item.url)
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              setPokemons((item) => [...item, json]);
            });
        });
      });
  };

  const handleType = (item) => {
    setSelectedTypes(item);
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/type/${item}`)
      .then((res) => res.json())
      .then((json) => {
        Promise.all(json.pokemon.map((poke) => fetch(poke.pokemon.url)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((pokemonData) => {
            setPokemons(pokemonData);
            setLoading(false);
          })
          .catch((error) =>
            console.error("Error fetching Pokemon data:", error)
          );
      })
      .catch((error) => console.error("Error fetching type data:", error));
  };

  // Filtered Pokemons
  const filteredPokemons = pokemons.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const colours = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row pb-2">
          <div className="col-md-4">
            <h1 className="text-start">Poke'mon</h1>
            <div className="d-flex align-items-center">
              <input
                type="text"
                name=""
                id=""
                className="form-control form-control-sm border-0 rounded-0 border-bottom w-75"
                placeholder="Search any pokemons in an instant"
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="row py-2">
              {types.map((type, index) => {
                return (
                  <div
                    className="col-lg-1 col-md-2 col-sm-3 text-start"
                    key={index}
                  >
                    <button
                      type="button"
                      className={`btn btn-sm text-capitalize py-0 px-2 mb-2 text-white ${
                        index + 1 === selectedTypes ? "fw-bold" : ""
                      } `}
                      onClick={() => handleType(index + 1)}
                      style={{
                        backgroundColor: colours[type.name.toLowerCase()],
                      }}
                    >
                      {type.name}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row overflow-auto py-3 px-4" style={{ height: "78vh" }}>
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            filteredPokemons.map((pokemon, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 my-4 d-flex justify-content-center"
                  key={index}
                >
                  <div
                    className="card shadow border-0 p-1 position-relative"
                    style={{ width: "30rem" }}
                  >
                    <img
                      src={pokemon.sprites.other.dream_world.front_default}
                      className="card-img-top p-2 position-absolute"
                      alt={pokemon.name}
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="small fw-bold">
                          #{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}
                        </span>
                        {/* <span className="small">
                          Exp : {pokemon.base_experience ?? "-"}
                        </span> */}
                      </div>
                      <h3 className="card-title text-capitalize fw-bold">
                        {pokemon.name}
                      </h3>
                      {pokemon.types.map((item, index) => {
                        return (
                          <span
                            className={`small ${item.type.name} rounded-3 py-1 px-3 me-1`}
                            key={index}
                          >
                            {item.type.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div className="col-2 offset-5 my-2 text-center">
            <button className="btn btn-secondary" onClick={morePokemons}>
              Load (20) More.....
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
