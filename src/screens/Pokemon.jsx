import { useState } from "react";

const POKEMONS = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beerdrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);
export function Pokemon() {
  const [hasWon, toggleWon] = useState(false);

  function hanldeSubmit(e) {
    e.preventDefault();

    const { pokemon } = e.currentTarget;

    if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
      toggleWon(true);
      alert("you won");
    } else {
      alert("Wrong Answer!");
    }
  }
  return (
    <div>
      <img
        width={512}
        height={512}
        style={{
          imageRendering: "pixelated",
          filter: hasWon ? "" : "brightness(0) invert(1)",
        }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          MATCH + 1
        }.png`}
        alt=""
      />
      {hasWon ? (
        <button style={{ width: "100%" }} onClick={() => location.reload()}>
          Play again
        </button>
      ) : (
        <form onSubmit={hanldeSubmit}>
          <input type="text" name="pokemon" autoFocus />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
