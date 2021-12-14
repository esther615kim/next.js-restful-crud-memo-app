// form
import React, { useRef } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  border: 1px solid #ccc;
  min-width: 385px;
  background: #aaa;
  padding: 5px 30px;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  textarea {
    height: 100px;
    padding: 10px;
    border: none;
    width: 90%;
  }
  button {
    border: none;
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: 20%;
    border-right: 5px;
    background: #fff;
    color: #212121;
    :hover {
      background: skyblue;
      color: #fff;
    }
  }
`;

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
      <StyledForm action="submit" onSubmit={onSubmit}>
        <textarea
          ref={textRef}
          defaultValue={text}
          placeholder="write a memo"
        />
        <button type="submit">Add</button>
      </StyledForm>
    </div>
  );
}

export default MsgInput;
