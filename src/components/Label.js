const Label = ({ label }) => {
  const whiteTexts = [
    "Type: Bug",
    "React Core Team",
    "Status: New",
    "dependencies",
    "Component: Fast Refresh",
  ];

  const textColor = whiteTexts.includes(label.name) ? "white" : "black";

  return (
    <span
      style={{
        borderRadius: "20px",
        fontSize: "13px",
        marginLeft: "15px",
        padding: "2px 7px",
        background: `#${label.color}`,
        color: textColor,
      }}
    >
      {label.name}
    </span>
  );
};

export default Label;
