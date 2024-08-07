import Textarea from "./Textarea.jsx";
import Stats from "./Stats.jsx";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const numOfWords = text.split(" ").filter((word) => word !== "").length;
  const numofCharacters = text.length;
  const numInstagram = 280 - text.length;
  const numFacebook = 2200 - text.length;
  const stats = {
    numOfWords: numOfWords,
    numofCharacters: numofCharacters,
    numInstagram: numInstagram,
    numFacebook: numFacebook,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
