// form
import React, { useRef } from "react";
import styled from "styled-components";

function MsgInput({ mutate, text = "", id = undefined }) {
  const textRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation(); // stop bubbling
    textRef.current.value = "";
    mutate(text, id);
  };
  return (
    <div>
      <form action="submit" onSubmit={onSubmit}>
        <textarea
          ref={textRef}
          defaultValue={text}
          placeholder="write a memmo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default MsgInput;
