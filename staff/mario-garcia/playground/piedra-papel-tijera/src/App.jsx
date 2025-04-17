import React, { useState } from "react";

const options = ["piedra", "papel", "tijera"];

export default function App() {

  const [player, setPlayer] = useState("");
  const [machine, setMachine] = useState("");
  const [result, setResult] = useState("");

  function play(selectionPlayer) {

    const selectionMachine = options[Math.floor(Math.ramdom() * 3)];
    setPlayer(selectionPlayer);
    setMachine(selectionMachine);
    checkWinner(selectionPlayer, selectionMachine);
  }

  function checkWinner(j, m) {

    if (j === m) {

      setResult("Tie");
    }

    else if (

      (j === "piedra" && m === "tijera") ||
      (j === "papel" && m === "piedra") ||
      (j === "tijera" && m === "papel")
    ) {

      setResult("You win!");

    }

    else {

      setResult("You lose!");
    }
  }

  return (

    <div className="p-4 text-center">

      <h1 className="text-2xl font-bold mb-4">Piedra, Papel o Tijera</h1>

      <div className="space-x-4 mb-4">

        {options.map((op) => (

          <button key={op} onClick={() => play(op)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

            {op}

          </button>

        ))}

      </div>

      <div className="mb-2">You selected: <strong>{player}</strong></div>
      <div className="mb-2">The machine selected: <strong>{machine}</strong></div>
      <div className="text-xl font-semibold">{result}</div>



    </div>

  );

}




