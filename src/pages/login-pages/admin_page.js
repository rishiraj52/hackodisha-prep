import React from "react";
import { Button } from "@mui/material";

import "./admin_page.css";

export default function adminPage() {
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
          
        </div>
        {/* content of page ends here */}
      </div>
      {/* main container ends here */}
    </>
  );
}
