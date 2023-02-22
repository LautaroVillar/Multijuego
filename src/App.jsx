import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import {Memotest} from "./screens/Memotest"
import {Pokemon} from "./screens/Pokemon"
import {WordsPerMinutes} from "./screens/WordsPerMinutes"



function App() {
  return (
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={<Memotest/>} path="/memotest" />
      <Route element={<Pokemon/>} path="/pokemon" />
      <Route element={<WordsPerMinutes/>} path="/wordsPerMinutes" /> 
    </Routes>
  );
}

export default App;
