import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import Label from "./Label";
import Comment from "./Comment";
import moment from "moment/moment";

const Issue = ({
  issue: {
    number,
    labels,
    title,
    comments,
    created_at,
    user: { login },
  },
  innerRef,
}) => {
  const time = moment(created_at).fromNow();

  return (
    <div
      className="issue-cont"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeigt: "50px",
        border: "1px solid #d0cece",
        borderLeft: "none",
        borderRight: "none",
        padding: "20px",
        fontSize: "1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <ModeStandbyIcon style={{ color: "green" }} />
        <div>
          <div
            style={{
              lineHeight: "25px",
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
          >
            <span className="issue-title">{title}</span>
            {labels.map((label) => {
              return <Label key={label.id} label={label} />;
            })}
          </div>
          <span ref={innerRef}>
            #{number} opened {time} by {login}
          </span>
        </div>
      </div>
      <div>{comments > 0 && <Comment comments={comments} />}</div>
    </div>
  );
};

export default Issue;
