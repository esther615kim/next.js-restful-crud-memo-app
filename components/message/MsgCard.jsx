import styled from "styled-components";
import React, { useState } from "react";
import MsgInput from "./MsgInput";

const StyledDiv = styled.div`
  border: 1px solid #ccc;
  min-width: 80%;
  padding: 5px 30px;
  border-radius: 10px;
  margin-bottom: 10px;
  div {
    color: #lavender;
    display: flex;
    font-size: 14px;
    align-items: center;
    height: 50px;
    h5 {
      padding: 5px 10px;
      border-radius: 20%;
      color: #fff;
      border-right: 5px;
      background: skyblue;
    }
  }
  p {
    font-size: 20px;
    min-height: 10px;
    padding: 5px;
    text-align: center;
  }
`;

const MsgCard = ({ user, timestamp, id, text, updateMsgs, deleteMsgs }) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => {
    setIsEditing((prev) => !prev);
    console.log(isEditing);
  };

  return (
    <StyledDiv>
      <div>
        <h5>{user}</h5>
        <span>
          {new Date(timestamp).toLocaleString("en-UK", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true, // am/pm
          })}
        </span>
      </div>
      {/* input & text */}
      {isEditing ? (
        <>
          <MsgInput mutate={updateMsgs} text={text} id={id} />
        </>
      ) : (
        text
      )}

      <div>
        <button onClick={startEditing}>{isEditing ? "Done" : "Edit"}</button>
        <button onClick={deleteMsgs}>Delete</button>
      </div>
    </StyledDiv>
  );
};

export default MsgCard;
