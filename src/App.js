import './App.css';
import InputShortener from './components/InputShortener';
import LinkResult from './components/LinkResult';
import React, { useState } from "react";


function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
