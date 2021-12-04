import MsgCard from "./MsgCard";
import styled from "styled-components";

const randomIds = ["roy", "jay"];
const getRandomId = () => randomIds[Math.round(Math.random())]; // randomly pick either chuchu or macey

// #1 generate 50-item mock data
const msgs = Array(20)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    userId: getRandomId(),
    timestamp: 1234567890123 + index * 1000 * 60, // i*second *minute =>  update per minute
    text: `${index + 1}th mock text msg`,
  }))
  .reverse(); // recent order;

// #2 create mock data manually
// const msgs = [
//   {
//     id: 1,
//     userId: getRarndomUserId(),
//     timestamp: 1234567890123,
//     text: "1 mock text", // needs 13-digit number
//   },
//   {
//     id: 2,
//     userId: getRarndomUserId(),
//     timestamp: 1234567890124,
//     text: "2 mock text", // needs 13-digit number
//   },
// ];
const StyledUl = styled.ul`
  list-style: none;
`;

const MsgList = () => (
  <StyledUl className="message-list">
    {msgs.map((item) => (
      <MsgCard key={item.id} {...item} /> // spread => props
    ))}
  </StyledUl>
);

export default MsgList;
