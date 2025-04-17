import { useState } from 'react'

const opciones = ["piedra", "papel", "tijera"];

export default function App() {
  const [jugador, setJugador] = useState("");
  const [maquina, setMaquina] = useState("");
  const [resultado, setResultado] = useState("");

  function jugar(eleccionJugador) {
    const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];
    setJugador(eleccionJugador);
    setMaquina(eleccionJugador);
    determinarGanador(eleccionJugador, eleccionMaquina);
  }

  function determinarGanador(j, m) {
    if (j === m) {
      setResultado("Empate");
    } else if (
      (j === "piedra" && m === "tijera") ||
      (j === "papel" && m === "piedra") ||
      (j === "tijera" && m === "papel")
    ) {
      setResultado("¡Ganaste!")
    } else {
      setResultado("Perdiste :(");
    }
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-2x1 font-bold mb-4">piedra, papel o tijera</h1>
      <div className="space-x-4 mb-4">
        {opciones.map((op) => (
          <button
          key={op}
          onClick={() => jugar(op)}
          className="bg-blue-500 hover;bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {op}
          </button>
        ))}
      </div>
      <div className="mb-2">Tú elegiste: <strong>[jugador]</strong></div>
      <div className="mb-2">La máquina eligió:<strong>[maquina]</strong></div>
      <div className="text-x1 font-semibold">[resultado]</div>
    </div>
  );
}