import React from "react";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";

import "./student_login.css";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";

import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
          <div className="Left">
            <img
              src={require("./pics/student_login.png")}
              alt="Student"
              className="Student"
            />
          </div>
          <div className="right">
            <Box className="box">
              <img
                src={require("./pics/user.png")}
                alt="User"
                className="user"
              />
              <div className="boxHead">Student Login</div>
              <div className="name">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "15ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="filled-search"
                      label="Username"
                      type="Username"
                      variant="filled"
                    />
                  </div>
                </Box>
              </div>
              <div className="pass">
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <FormControl sx={{ m: 1, width: "15ch" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">
                      Password
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <img
                                src={require("./pics/visible.png")}
                                alt="Invisible"
                                className="visibility"
                              />
                            ) : (
                              <img
                                src={require("./pics/eye.png")}
                                alt="Visible"
                                className="visibility"
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </div>
              <div>
                <Button variant="contained" className="loginButn">
                  Login Now
                </Button>
              </div>
              <div>
                <Link href="#" underline="hover" className="forgotPass">
                  Forgot your password?
                </Link>
              </div>
            </Box>
          </div>
        </div>
        {/* content of page ends here */}
      </div>
      {/* main container ends here */}
    </>
  );
}
