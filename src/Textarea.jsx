import { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState("");

  function handleChange(e) {
      let txt = e.target.value;
      if (txt.includes("script")) {
        alert("You can't enter script tag");
      }
      txt = txt.replace("script", " ");

      setText(txt);
  }

  return (
    <textarea
      value={text}
      className="textarea"
      placeholder="Enter your text"
      spellCheck="false"
      onChange={handleChange}
    ></textarea>
  );
}
