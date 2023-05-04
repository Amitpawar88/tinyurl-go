import './App.css';
import React, { useState } from "react";
import InputShortener from './components/InputShortener';
import LinkResult from './components/LinkResult';


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
   