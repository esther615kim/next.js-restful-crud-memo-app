import MsgCard from "./MsgCard";
import MsgInput from "./MsgInput";
import styled from "styled-components";
import { useState } from "react";

const randomIds = ["roy", "jay"];
const getRandomId = () => randomIds[Math.round(Math.random())]; // randomly pick either chuchu or macey

// #1 generate 50-item mock data
const mockMsgs = Array(20)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    userId: getRandomId(),
    timestamp: 1234567890123 + index * 1000 * 60, // i*second *minute =>  update per minute
    text: `${index + 1}th mock text msg`,
  }))
  .reverse(); // recent order;

const StyledUl = styled.ul`
  list-style: none;
`;

export default function MsgList() {
  const [msgs, setMsgs] = useState(mockMsgs);

  const addNewMsgs = (text) => {
    // new msg format
    const newMsg = {
      id: msgs.length, // +1
      userId: getRandomId(),
      timestamp: Date.now(),
      text: `${msgs.length} ${text}`, // +1
    };
    setMsgs((msgs) => [newMsg, ...msgs]); //
    console.log("msgs", msgs);
  };

  <StyledUl className="message-list">
    <MsgInput mutate={addNewMsgs} />
    {msgs.map((item) => (
      <MsgCard key={item.id} {...item} /> // spread => props
    ))}
  </StyledUl>;
}
