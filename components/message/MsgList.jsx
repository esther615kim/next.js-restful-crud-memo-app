import React, { useState } from "react";
import MsgCard from "./MsgCard";
import MsgInput from "./MsgInput";

const randomIds = ["Chu", "Macy"];
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
  const [editingId, setEditingId] = useState(null); // initial value =null;

  // 1. create new msg
  const createNewMsgs = (text) => {
    // new msg format
    const newMsg = {
      id: msgs.length + 1,
      user: getRandomId(),
      timestamp: Date.now(),
      text: `${msgs.length + 1} ${text}`,
    };
    setMsgs((msgs) => [newMsg, ...msgs]); //
    console.log("msgs", msgs);
  };

  // 2.update - needs text & target id
  const updateMsgs = (text, id) => {
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];

      // add updated text
      newMsgs.splice(targetIndex, 1, {
        ...msgs[targetIndex],
        text,
      });
      return newMsgs;
    });
    setEditingId(null); //delete eiditing Id
  };

  // 3.delete - only needs target id
  const deleteMsgs = (id) => {
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];

      // delete text
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  return (
    <>
      <MsgInput mutate={createNewMsgs} />
      {msgs.map((item) => (
        // card
        <MsgCard
          key={item.id}
          onUpdate={updateMsgs}
          onDelete={() => deleteMsgs(item.id)}
          isEditing={editingId === item.id}
          // startEdit={setEditingId(item.id)} // it causes Too many re-renders
          {...item}
        />
      ))}
    </>
  );
}
