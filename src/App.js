import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Input from './components/Input';
import About from './components/About';

function App() {
  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState("secondary");
  const [textColor, setTextColor] = useState("dark");
  const [backColor, setBackColor] = useState("white");
  const lightMode = () => {
    setTheme("light");
    setMode("secondary");
    setTextColor("dark");
    setBackColor("white");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  const darkMode = () => {
    setTheme("dark");
    setMode("primary");
    setTextColor("white");
    setBackColor("rgb(1 14 80)");
    document.body.style.backgroundColor = "rgb(1 14 80)";
    document.body.style.color = "white";
  }
  const cobaltMode = () => {
    setTheme("success");
    setMode("success");
    setTextColor("white");
    setBackColor("#025a19");
    document.body.style.backgroundColor = "#025a19";
    document.body.style.color = "white";
  }
  const bloodMode = () => {
    setTheme("danger");
    setMode("danger");
    setTextColor("white");
    setBackColor("#760015");
    document.body.style.backgroundColor = "#760015";
    document.body.style.color = "white";
  }
  return (
    <>
      <Navbar title={"TextEditor"} theme={theme} mode={mode} textColor={textColor} lightMode={lightMode} darkMode={darkMode} cobaltMode={cobaltMode} bloodMode={bloodMode} />
      <Input heading={"Enter your text here to Analyse"} mode={mode} backColor={backColor} textColor={textColor} />
      <About backColor={backColor} textColor={textColor} />
    </>
  );
}

export default App;
