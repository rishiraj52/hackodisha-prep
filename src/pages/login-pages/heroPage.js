import React from "react";
import { Button } from "@mui/material";

import "./heroPage.css";

export default function heroPage() {
  return (
    <>
      {/* main container */}
      <div className="Container">
        {/* navbar starts */}
        <div className="navbar text-center">
          <div className="navLogo">
            <img
              src={require("../canteen/BaskEat.png")}
              alt="baskEat"
              className="Logo"
            />
          </div>
          <div className="logoName"></div>
          <div className="navbtns">
            <li>
              <Button>LogIn</Button>
              <Button>SignUp</Button>
            </li>
          </div>
        </div>
        {/* navbar end */}

        {/* content of page starts here */}
        <div className="content">
          <img
            src={require("./pics/Cover.png")}
            alt="BgPic"
            className="BgImg"
          />
          <div className="welcome">Welcome to baskEat</div>
          <div className="mainButtons">
            <div>
              <Button variant="contained" style={{ background: "white" }}>
                Admin Login
              </Button>
            </div>
            <div>
              <Button variant="contained" style={{ background: "white" }}>
                Student Login
              </Button>
            </div>
          </div>
        </div>
        {/* content of page ends here */}
      </div>
      {/* main container ends here */}
    </>
  );
}
