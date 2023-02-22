import { Link } from "react-router-dom";
const imgMemotest = "./src/img/memotest.png"
const imgPokemon = "./src/img/pokemon.png"
const imgWPM = "./src/img/WPM.png"


export function Home() {
  return (
    <>
        <h1 style={{display: "flex", justifyContent: "center", fontSize: "48px", marginBottom: "50px" }}>Multijuegos</h1>
        <div style={{display:"flex", justifyContent: "center", textAlign: "center"}}>
            <div>
            <h2>Memotest</h2>
            <Link className="link" to="/memotest"><img className="images" src={imgMemotest} alt="Memotest" /></Link>
            </div>
            <div>
            <h2>Pokemon</h2>
            <Link className="link" to="/pokemon"><img className="images" src={imgPokemon} alt="pokemon" /></Link>
            </div>
            <div>
            <h2>WordsPerMinutes</h2>
            <Link className="link" to="/wordsPerMinutes"><img className="images" src={imgWPM} alt="wpm" /></Link>
            </div>
        </div>
    </>
  )
}

