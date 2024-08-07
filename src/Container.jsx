import Textarea from "./Textarea.jsx";
import Stats from "./Stats.jsx";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const numOfWords = text.split(" ").filter((word) => word !== "").length;
  const numOfCharacters = text.length;
  const numInstagram = 280 - text.length;
  const numFacebook = 2200 - text.length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats numOfWords={numOfWords} numofCharacters={numOfCharacters} numInstagram={numInstagram} numFacebook={numFacebook}/>
    </main>
  );
}
