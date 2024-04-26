import "../../App.css";
import { useState } from "react";

function Counter() {
  //5. On récupére la valeur de la variable "compteur" stocké dans le navigateur
  let localCounter = localStorage.getItem("compteur");

  //1. STATE : On crée un état pour tracker le counter
  //6. On ajoute l'element stocker dans le navigateur en tant que valeur initiale si elle n'existe pas, on met un 0
  const [counter, setCounter] = useState(Number(localCounter) || 0);

  //4. On modifie la valeur de la variable stocké dans notre navigateur par celle de l'état du counter
  localStorage.setItem("compteur", counter);

  return (
    <div>
      {/*2. On affiche la valeur du counter */}
      <h1>Like Counter: {counter}</h1>

      {/*3. On incrémente la valeur du counter en clickant sur button */}
      <button onClick={() => setCounter(counter + 1)}>Like</button>
    </div>
  );
}

export default Counter;
