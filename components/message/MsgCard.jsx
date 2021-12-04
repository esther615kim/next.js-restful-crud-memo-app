import MsgInput from "./MsgInput";

const MsgCard = ({ userId, timestamp, text }) => (
  <li className="message-card">
    <h5>
      {userId}
      <sub>
        {/* sub-subscript */}
        {new Date(timestamp).toLocaleString("en-UK", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </sub>
      {text}
      {/* text -edtable */}
    </h5>
  </li>
);
export default MsgCard;
