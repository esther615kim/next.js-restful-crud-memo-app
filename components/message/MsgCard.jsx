import styled from "styled-components";
import React from "react";

const StyledDiv = styled.div`
  border: 1px solid #ccc;
  min-width: 465px;
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
    min-height: 50px;
    padding: 5px;
    text-align: center;
  }
`;

const MsgCard = ({ user, timestamp, text }) => (
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
    <p>{text}</p> {/* text -edtable */}
  </StyledDiv>
);

export default MsgCard;
