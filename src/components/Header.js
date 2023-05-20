import React from "react";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import HeaderData from "./HeaderData";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ForkLeftIcon from "@mui/icons-material/ForkLeft";

import { navs } from "../utils/constants";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <div
      style={{
        background: "#f6f8fa",
        color: "gray",
        borderBottom: "1px solid lightgray",
        width: "100%",

      }}
    >
      <div
        style={{
          height: "8vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
          paddingLeft: '1rem',
          paddingRight: '1rem',

        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "235px",
          }}
        >
          <CollectionsBookmarkIcon style={{ fontSize: "20px" }} />
          <h3
            variant="h6"
            className="heading_link"
            style={{ color: "#0969da", cursor: "pointer" }}
          >
            reactjs
          </h3>
          /
          <h2
            variant="h6"
            className="heading_link"
            style={{ color: "#0969da", cursor: "pointer" }}
          >
            <strong>react.dev</strong>
          </h2>
          <div
            className="box-center"
            style={{
              border: "1px solid #d0cece",
              borderRadius: "20px",
              width: "50px",
            }}
          >
            Public
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
            color: "black",
            cursor: "pointer",
            gap: "10px",
          }}
        >
          <HeaderData
            icon={<NotificationsNoneIcon style={{ fontSize: "20px" }} />}
            text={"Notifications"}
          />
          <HeaderData
            icon={<StarBorderIcon style={{ fontSize: "20px" }} />}
            text={"Star"}
            nums={"175K"}
          />
          <HeaderData
            icon={<ForkLeftIcon style={{ fontSize: "20px" }} />}
            text={"Fork"}
            nums={"35.3K"}
          />
        </div>
      </div>
      <div
        className="box-centers "
        direction="row"
        gap={2}
        style={{
          margin: "0px 0px 0px 20px",
          overflow: "hidden",
        }}
      >
        {navs.map((nav) => {
          return (
            <NavItem
              key={nav.name}
              name={nav.name}
              icon={nav.icon}
              num={nav.num}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
