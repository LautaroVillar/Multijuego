import { useEffect, useState } from "react";

const WORDS = [
  "abacus",
  "abdomen",
  "abdominal",
  "abide",
  "ability",
  "ablaze",
  "able",
  "abnormal",
  "abrasion",
  "abrasive",
  "abreast",
];
export function WordsPerMinutes() {
  const [word, setWord] = useState(
    () => WORDS[(Math.random() * WORDS.length) | 0]
  );
  const [characterCount, setcharacterCount] = useState(0);
  const [buffer, setBuffer] = useState("");
  const [time, setTime] = useState(0)
  function handleSubmit(e) {
    e.preventDefault();
    if (buffer === word) {
      setWord(WORDS[(Math.random() * WORDS.length) | 0]);
      setcharacterCount((characterCount) => characterCount + word.length);
    }
    setBuffer("");
  }
  useEffect(()=> {
    if(time !== 0){
      const timeout = setTimeout(() => setTime(time - 1), 1000)

      return () => clearTimeout(timeout)
    }
  },[time])


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        textAlign: "center",
      }}
    >
      {Boolean(time) && <h1 style={{ fontSize: "48px" }}>{word}</h1>}
      <h2 className="characterTyped">Characters typed: {characterCount}</h2>
      <h3>Remaining time: {time}</h3>
      {time ? (
          <form onSubmit={handleSubmit}>
          <input
            value={buffer}
            type="text"
            autoFocus
            onChange={(e) => setBuffer(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ): (
        <button onClick={() => setTime(60)}>Play</button>
      )}
    </div>
  );
}
