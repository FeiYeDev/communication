import React from "react";
import './App.css';
import ButtonItem from './components/ButtonItems';
import IndexTitle from './components/IndexTitle';
import Chat from './components/Chat';
import Email from './components/Emails';
import RtcChat from './components/RtcChat';

function App() {

  return (
    <div className="App">
      <IndexTitle />
      <ButtonItem />
      <div className="inner">
        <Email />
        <Chat />
        <RtcChat />
      </div>
    </div>
  );
}

export default App;
