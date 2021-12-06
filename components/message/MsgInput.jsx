// form
import React, { useRef } from "react";

function MsgInput(mutate) {
  const textRef = useRef(null);
  const text = textRef.current.value;
  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation(); // stop bubbling
  };
  return (
    <div>
      <form action="submit" onSubmit={onSubmit}>
        <textarea ref={textRef} placeholder="write a memmo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default MsgInput;
