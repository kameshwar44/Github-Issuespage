import { footerTitles } from "../utils/constants";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        color: "blue",
      }}
    >
      <p style={{ fontSize: "15px",margin: "32px" }}>© 2023 GitHub, Inc.</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          padding: "22px",
          color: "blue",
          margin: "10px",
        }}
      >
        {footerTitles[0].map((title) => (
          <span key={title}>{title}</span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          padding: "22px",
          color: "blue",
          marginTop: "10px",
        }}
      >
        {footerTitles[1].map((title) => (
          <span key={title}>{title}</span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
