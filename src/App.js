// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [labelText, setLabelText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-danger");
  // };
  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setLabelText("Enable Light Mode");
      showAlert("Dark Mode has been enabled !", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setLabelText("Enable Dark Mode");
      showAlert("Light Mode has been enabled !", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        labelText={labelText}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter Text Below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/home"
            element={
              <TextForm
                heading="Enter Text Below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
