import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const Comment = ({ comments }) => {
  return (
    <div
      className="box-center"
      style={{ fontSize: "14px", marginTop: "-15px" }}
    >
      <ChatBubbleOutlineOutlinedIcon style={{ fontSize: "14px" }} />
      &nbsp;
      {comments}
    </div>
  );
};

export default Comment;
