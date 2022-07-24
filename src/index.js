import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import CantHome from "./pages/canteen/Home";
// import Hero from "./pages/login-pages/heroPage";
import AdminLogin from "./pages/login-pages/admin_login";
// import StudentLogin from "./pages/login-pages/student_login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Hero /> */}
    {/* <CantHome /> */}
    <AdminLogin />
    {/* <StudentLogin /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
