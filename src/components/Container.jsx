import Textarea from "./Textarea.jsx";
import Stats from "./Stats.jsx";
import { useState } from "react";
import { FACEBOOK_LIMIT, INS_LIMIT } from "../lib/constants.js";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numOfWords: text.split(" ").filter((word) => word !== "").length,
    numofCharacters: text.length,
    numInstagram: INS_LIMIT - text.length,
    numFacebook: FACEBOOK_LIMIT - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
