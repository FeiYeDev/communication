import React from "react";
import './App.css';
import ButtonItem from './components/ButtonItems';
import IndexTitle from './components/IndexTitle';
import Chat from './components/Chat';
import Email from './components/Emails';

function App() {

  return (
    <div className="App">
      <IndexTitle />
      <ButtonItem />
      <div className="inner">
        <Chat />
        <Email />
      </div>
    </div>
  );
}

export default App;
