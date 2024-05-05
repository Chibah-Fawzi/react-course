import React, { useState } from "react";
import "./Users.css";
export default function Users() {
  const [data, setData] = useState([]);

  function getData() {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  function addData() {
    // Envoie vers l'URL "http://localhost:3000/ajouter"
    fetch("http://localhost:3000/ajouter", {
      // METHODE HTTP POST
      method: "POST",

      // Envoie ce body
      body: {
        category: "automobile",
        title: "test",
        prix: 250,
        couleur: "rouge",
      },
    })
      .then((response) => response.json())
      .then((json) => alert(json));
  }

  return (
    <div className="container">
      <button onClick={() => getData()}>Get Data</button>
      <button onClick={() => addData()}>Add data</button>
      <div className="users">
        {data.map((element) => (
          <div className="user">
            <h3>{element.titre}</h3>
            <h3>{element.date}</h3>
            <h3>{element.lieu}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
