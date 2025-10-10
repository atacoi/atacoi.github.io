import { useState } from "react";

export default function Skill({ img, text, path }) {
  const [hidden, setHidden] = useState(true);
  return (
    <a
      href={`https://en.wikipedia.org/wiki/${path}`}
      target="_blank"
      onMouseEnter={() => {
        setHidden(false);
      }}
      onMouseLeave={() => setHidden(true)}
    >
      <img src={img}></img>
      {hidden ? <div>‎ </div> : <div>{text}</div>}
    </a>
  );
}
