import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";

const Location = () => {
  const [inputId, setInputId] = useState("");
  const [response, setResponse] = useState({});
  const arrayResidents = response.residents;
  const arrayColor = ["#845EC2", "#4E8397"];
  const indexRandom = Math.floor(Math.random() * arrayColor.length);

  useEffect(() => {
    const idLocation = Math.floor(Math.random() * 125) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then((res) => setResponse(res.data));
    console.log(response);
  }, []);

  const searchLocationById = () => {
    if (inputId < 126) {
      axios
        .get(`https://rickandmortyapi.com/api/location/${inputId}`)
        .then((res) => setResponse(res.data));
    } else {
      alert("Lo siento solo puedes escribir numeros entre 1 y 125");
    }
  };

  return (
    <div
      className="Location"
      style={{ backgroundColor: `#24303c`, transition: ".3s" }}
    >
      <label className="lbl--searchInput" htmlFor="searchId">
        <h3>Search by ID</h3>
      </label>
      <div className="container--searchBar">
        <input
          name="searchId"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          className="search-input"
          type="text"
        />
        <button className="search-button" onClick={searchLocationById}>
          <i class="fa-solid fa-magnifying-glass"></i> Search
        </button>
      </div>

      <h2 className="title-location">{response.name}</h2>

      <section className="description-location">
        <p>
          <span>Dimension </span>
          <br /> {response.dimension}
        </p>
        <p>
          <span>type </span>
          <br /> {response.type}
        </p>
        <p>
          <span>Population </span>
          <br /> {response.residents?.length}
        </p>
      </section>

      {response.residents?.length === 0 ? (
        <h2 className="h2--no__poblation">This Location dont have population</h2>
      ) : (
        <section className="container--cards-residents">
          {arrayResidents?.map((resident) => (
            <ResidentInfo resident={resident} key={resident.id} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Location;
