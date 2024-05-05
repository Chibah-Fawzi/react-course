import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import Users from "./components/Users/Users";

export default function App() {
  // 5. On déclare nos states (états) avec une valeur initiale vide
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 3. On crée la function Login
  function Login(event) {
    // 4. Empêcher la page de s'actualiser quand on clique sur le button
    event.preventDefault();

    //6. On donne la valeur de l'input "email" à l'état de l'email avec setEmail
    setEmail(event.target.email.value);

    //7. On donne la valeur de l'input "motdepasse" à l'état du password avec setPassword
    setPassword(event.target.motdepasse.value);
  }

  return (
    <div>
      <Users />
      {/* <Counter /> */}

      {/*8. On affiche les valeurs des états email & password */}
      {/* <h2>EMAIL: {email}</h2>
      <h2>MOT DE PASSE: {password}</h2> */}

      {/* 1. On ajoute un évenement onSubmit, et on lui fais passer l'objet de l'évenement dans la function Login */}
      {/* <form onSubmit={(event) => Login(event)}>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" id="motdepasse" />
        </div> */}

      {/*2. On ajoute le type="submit" pour déclancher la function onSubmit depuis ce button */}
      {/* <button type="submit">Log In</button>
      </form> */}
    </div>
  );
}
