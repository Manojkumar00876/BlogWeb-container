import React, { useRef, useState } from "react";

function TextChange() {
  const editorRef = useRef(null);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);

    const handleBoldClick = () => {
        document.execCommand("bold", false, null);
        setBold(!bold);
    };

    const handleItalicClick = () => {
        document.execCommand("italic", false, null);
        setItalic(!italic);
    };

    const handleUnderlineClick = () => {
        document.execCommand("underline", false, null);
      };

  return (
    <div>
      <button onClick={handleBoldClick}>Bold</button>
      <button onClick={handleItalicClick}>Italic</button>
      <button onClick={handleUnderlineClick}>underline</button>
      <div
        ref={editorRef}
        contentEditable
        onFocus={() => setBold(false)}
        onBlur={() => setItalic(false)}
      >
       Edit me
      </div>
    </div>
  );
}

export default TextChange;