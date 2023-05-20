import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { filters } from "../utils/constants";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const IssuesHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        height: "60px",
        marginLeft: "20px",
      }}
    >
      <div className="box-center issue-header">
        <div
          className="box-center"
          style={{ fontWeight: "bold", color: "#4d4c4c", gap: "10px" }}
        >
          <ModeStandbyIcon /> &nbsp;973 Open
        </div>
        <div
          className="box-center"
          style={{ fontWeight: "500", color: "gray", gap: "3px" }}
        >
          {" "}
          &nbsp;
          <DoneRoundedIcon />
          11,277 Closed
        </div>
      </div>
      <div
        className="box-center"
        style={{ fontWeight: "700", color: "gray", gap: "10px" }}
      >
        {filters.map((filter) => {
          return (
            <div gap={0.1} className="box-center" key={filter.name}>
              {filter.name} <ArrowDropDownRoundedIcon />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IssuesHeader;
