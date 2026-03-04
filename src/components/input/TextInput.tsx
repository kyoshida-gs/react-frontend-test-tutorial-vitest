import { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter text"
      />
      <p>{text}</p>
    </div>
  );
};

export default TextInput;
