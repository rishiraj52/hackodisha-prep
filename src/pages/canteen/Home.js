import { Button } from "@mui/material";
import React from "react";
import "./Home.css";

import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

import SvgIcon from "@mui/material/SvgIcon";

function BagIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
    </SvgIcon>
  );
}
function ArrowIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        fill-rule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </SvgIcon>
  );
}

export default function CantHome() {
  return (
    <>
      <div className="Container">
        <img
          src={require("./Canteen 1.jpg")}
          alt="CanteenPic"
          className="Cant-BgImg"
        />
        <div className="Canteen-Navbar">
          <div className="Canteen-logo">
            <Avatar alt="baskEat" src="./BaskEat.png">
              {" "}
            </Avatar>
          </div>
          <div className="Canteen-btns">
            <li>
              <Button>Home</Button>
              <Button>College</Button>
              <Button>Canteen</Button>
              <Button>Stationary</Button>
              <Button>
                <BagIcon sx={{ fontSize: 30 }} />
              </Button>
            </li>
          </div>
        </div>
        <div className="Canteen-body">
          <div className="Cant-welcm">
            <h1>WELCOME </h1>
            <h1> TO </h1>
            <h1>CANTEEN</h1>
          </div>
          <div className="Cant-Menu">
            <div className="Menu-heading">
              <h1>Menu:-</h1>
              <h2>Today's Special</h2>
              <div className="Menu-items">
                <div className="veg">Veg</div>
                <div className="Nonveg">Non veg</div>
                <div className="item">
                  <Button>item</Button>
                </div>
                <div className="item">
                  <Button>item</Button>
                </div>
                <div className="item">
                  <Button>item</Button>
                </div>
                <div className="item">
                  <Button>item</Button>
                </div>
                <div className="item">
                  <Button>item</Button>
                </div>
                <div className="item">
                  <Button>item</Button>
                </div>
                <div className="item">
                  <Button>item</Button>
                </div>
                <div className="item">
                  <Button>item</Button>
                </div>
              </div>
            </div>
            <div className="Menu-arrow">
              <h1>
                <ArrowIcon sx={{ fontSize: 60 }} />
              </h1>
            </div>
            <div className="Menu-card">
              <div className="Menu-pic">
                <div className="Menu-pic-front">
                  <div className="Pic-heading">
                    <h1>PIZZA</h1>
                  </div>
                  <div className="Pic-img">
                    <img
                      src={require("./pizza.png")}
                      alt="ItemPic"
                      className="Item-pic"
                    />
                  </div>
                  <div className="Pic-price">
                    <h1>Price:-100/-</h1>
                  </div>
                </div>
                <div className="Menu-pic-back">
                  <h1>PIZZA</h1>
                  <p>
                    Consists of jalepeno, capsicum, onion , paneer , tomato and
                    cheese.
                  </p>
                  <Button>Add to Bag+</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
