import styled from "styled-components";

const StyledLi = styled.li`
  border: 1px solid #ccc;
  min-width: 465px;
  padding: 5px 30px;
  border-radius: 10px;
  margin-bottom: 10px;
  div {
    color: #lavender;
    margin-bottom: none;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
    h5 {
      padding: 5px 10px;
      border-radius: 20%;
      color: #fff;
      background: skyblue;
    }
  }
  p {
    font-size: 20px;
    text-align: center;
  }
`;

const MsgCard = ({ userId, timestamp, text }) => (
  <StyledLi className="message-card">
    <div>
      <h5>{userId}</h5>
      <span>
        {/* sub-subscript */}
        {new Date(timestamp).toLocaleString("en-UK", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </span>
    </div>
    <p>{text}</p>
    {/* text -edtable */}
  </StyledLi>
);

export default MsgCard;
