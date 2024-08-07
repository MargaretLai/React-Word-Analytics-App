import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  function handleChange(e) {
    let txt = e.target.value;
    if (txt.includes("script")) {
      txt = txt.replace("script", " ");
      setWarningText("No script tag allowed!");
    } else if (txt.includes("@")) {
      txt = txt.replace("@", " ");
      setWarningText("No @ symbol allowed!");
    } else {
      setWarningText("");
    }

    setText(txt);
  }

  return (
    <div className="textarea">
      <textarea
        value={text}
        className="textarea"
        placeholder="Enter your text"
        spellCheck="false"
        onChange={handleChange}
      ></textarea>
      <Warning warningText={warningText} />
    </div>
  );
}
