import { useEffect, useState } from "react";

const IMAGES = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/bower-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/ie10-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/git-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export function Memotest() {
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      alert("You win");
      location.reload();
    }
  }, [guessed]);

  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr)",
        gap: "24px",
      }}
    >
      {IMAGES.map((image) => {
        const [, url] = image.split("|");
        return (
          <li
            onClick={() =>
              selected.length < 2 &&
              setSelected((selected) => selected.concat(image))
            }
            key={image}
            style={{
              cursor: "pointer",
              padding: "12px",
              border: "1px solid #666",
              borderRadius: "12px",
            }}
          >
            {selected.includes(image) || guessed.includes(image) ? (
              <img src={url} alt="icon" />
            ) : (
              <img
                key={url}
                src="https://icongr.am/clarity/search.svg?size=128&color=currentColor"
                alt="icon"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
