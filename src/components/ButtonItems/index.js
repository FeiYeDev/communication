import React from "react";
import './index.css';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  const tabInfo = useSelector(state => state.tabPan);
  const shows = useSelector(state => state.showTab);
  const dispatch = useDispatch();

  const renderNewSession = () => {
    return (
      <div onClick={() => {dispatch({type:'modify',payload:'Start New Session'})}} className="newSession">
        New Session
      </div>
    )
  }

  return (
    <div className="buttonTitle">
      <div className="buttonItems">
        {
          tabInfo.map(item => {
            return (
              <Button
                className={["buttonItem", item.name===shows?  "buttonBlues" : null]}
                onClick={() => {dispatch({type:'modify',payload:item.name})}}
                key={item.name}
              >
                <i style={{transform: item.rotate}} class={item.value} aria-hidden="true"></i>
                {item.name}
              </Button>
            )
          })
        }
      </div>
      {
        shows === "Sessions" ?
        renderNewSession() :
        null
      }
    </div>
      
  );
}

export default App;
