
import Nums from "./Nums";

const NavItem = ({ name, icon, num }) => {
  const borderBottom = name === "Issues" ? "3px solid orange" : "";
  const fontWeight = name === "Issues" ? "bold" : "normal";
  const minWidth = name === "Pull request" ? "80px" : "0px";
  return (
    <div
      style={{
        height: "50px",
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 10px",
        borderBottom,
        fontWeight,
        color: "#4d4c4c",
      }}
    >
      {icon} <div style={{ minWidth }}>{name}</div> {num && <Nums num={num} />}
    </div>
  );
};

export default NavItem;
