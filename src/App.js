import './App.css';
import About from './components/About';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alerts from './components/Alerts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "Black",
  });

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type || 'success', // success | error | warning | info
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
      setBtnText("Enable Light Mode");
      setStyle({
        backgroundColor: "Black",
        color: "White",
        border: "1px solid Black"
      });
      setBtnText("Enable Light Mode");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      setBtnText("Enable dark Mode");
      setStyle({
        backgroundColor: "white",
        color: "Black",
      });
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={<TextForm heading="Enter the text to analyse" mode={mode} />} />
            <Route exact path='/About' element={<About style={style} btnText={btnText} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
