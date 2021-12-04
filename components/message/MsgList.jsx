import MsgCard from "./MsgCard";

const userIds = ["chuchu", "macey"];
const getRarndomUserId = () => userIds(Math.round(Math.random())); // randomly pick either chuchu or macey

// #1 generate 50-item mock data
const msgs = Array(20).fill(0).map();

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

const MsgList = () => (
  <ul className="message-list">
    <MsgCard />
  </ul>
);
