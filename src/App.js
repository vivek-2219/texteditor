import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Input from './components/Input';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState("");
  const [display, setDisplay] = useState("none");
  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState("secondary");
  const [textColor, setTextColor] = useState("dark");
  const [backColor, setBackColor] = useState("white");
  const showAlert = (type, message) => {
    setAlert(message);
    setAlertType(type);
    setTimeout(() => {
      setAlert("");
      setAlertType("");
      setDisplay("none");
    }, 1600);
  }
  const displayChanger = () => {
    setDisplay("block");
    setTimeout(() => {
      setDisplay("none")
    }, 1600);
  }
  const lightMode = () => {
    setTheme("light");
    setMode("secondary");
    setTextColor("dark");
    setBackColor("white");
    showAlert("Success", "Light mode has been enabled!");
    setDisplay("block");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  const darkMode = () => {
    setTheme("dark");
    setMode("primary");
    setTextColor("white");
    setBackColor("rgb(1 14 80)");
    showAlert("Success", "Dark mode has been enabled!");
    setDisplay("block");
    document.body.style.backgroundColor = "rgb(1 14 80)";
    document.body.style.color = "white";
  }
  const cobaltMode = () => {
    setTheme("success");
    setMode("success");
    setTextColor("white");
    setBackColor("#025a19");
    showAlert("Success", "Cobalt mode has been enabled!");
    setDisplay("block");
    document.body.style.backgroundColor = "#025a19";
    document.body.style.color = "white";
  }
  const bloodMode = () => {
    setTheme("danger");
    setMode("danger");
    setTextColor("white");
    setBackColor("#760015");
    showAlert("Success", "Blood mode has been enabled!");
    setDisplay("block");
    document.body.style.backgroundColor = "#760015";
    document.body.style.color = "white";
  }
  return (
    <>
      <Navbar title={"TextEditor"} theme={theme} mode={mode} textColor={textColor} lightMode={lightMode} darkMode={darkMode} cobaltMode={cobaltMode} bloodMode={bloodMode} />
      <Alert mode={mode} alert={alert} alertType={alertType} display={display} />
      <Input heading={"Enter your text here to Analyse"} mode={mode} backColor={backColor} textColor={textColor} showAlert={showAlert} displayChanger={displayChanger} />
      <About backColor={backColor} textColor={textColor} />
    </>
  );
}

export default App;
