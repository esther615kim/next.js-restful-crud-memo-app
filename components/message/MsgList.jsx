import React, { useState } from "react";
import MsgCard from "./MsgCard";

const randomIds = ["roy", "jay"];
const getRandomId = () => randomIds[Math.round(Math.random())]; // randomly pick either chuchu or macey

// #1 generate 50-item mock data
const mockMsgs = Array(20)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    user: getRandomId(),
    timestamp: 1234567890123 + index * 1000 * 60, // i*second *minute =>  update per minute
    text: `${index + 1}th mock text msg`,
  }))
  .reverse(); // recent order first

export default function MsgList() {
  const [msgs, setMsgs] = useState(mockMsgs);

  const addNewMsgs = (text) => {
    // new msg format

    const newMsg = {
      id: msgs.length, // +1
      user: getRandomId(),
      timestamp: Date.now(),
      text: `${msgs.length} ${text}`, // +1
    };
    setMsgs((msgs) => [newMsg, ...msgs]); //
    console.log("msgs", msgs);
  };

  return (
    <>
      {msgs.map((item) => (
        // card
        <MsgCard key={item.id} {...item} />
      ))}
    </>
  );
}
