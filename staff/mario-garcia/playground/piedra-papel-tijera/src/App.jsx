import React, { useState } from "react";

const opciones = ["piedra", "papel", "tijera"];

export default function App() {
  const [jugador, setJugador] = useState("");
  const [maquina, setMaquina] = useState("");
  const [resultado, setResultado] = useState("");

  function jugar(eleccionJugador) {
    const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];
    setJugador(eleccionJugador);
    setMaquina(eleccionMaquina);
    determinarGanador(eleccionJugador, eleccionMaquina);
  }

  function determinarGanador(j, m) {
    if (j === m) {
      setResultado("Tie");
    } else if (
      (j === "piedra" && m === "tijera") ||
      (j === "papel" && m === "piedra") ||
      (j === "tijera" && m === "papel")
    ) {
      setResultado("You win!");
    } else {
      setResultado("You lose!");
    }
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4 text-pink-800">Piedra, Papel o Tijera</h1>
      <div className="space-x-4 mb-4">
        {opciones.map((op) => (
          <button
            key={op}
            onClick={() => jugar(op)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {op}
          </button>
        ))}
      </div>
      <div className="mb-2">Your selection was: <strong>{jugador}</strong></div>
      <div className="mb-2">The Machine selected: <strong>{maquina}</strong></div>
      <div className="text-xl font-semibold">{resultado}</div>
    </div>
  );
}

