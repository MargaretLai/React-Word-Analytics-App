import { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState("");

  return (
    <textarea
      value={text}
      className="textarea"
      placeholder="Enter your text"
      spellCheck="false"
      onChange={(e) => {
        setText(e.target.value);
      }}
    ></textarea>
  );
}
