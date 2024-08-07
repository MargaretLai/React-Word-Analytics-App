import Textarea from "./Textarea.jsx";
import Stats from "./Stats.jsx";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const numOfCharacters = text.length;
  console.log(numOfCharacters)

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats numofCharacters={numOfCharacters}/>
    </main>
  );
}
