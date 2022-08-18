import React from "react";
import './index.css';
import {SettingFilled} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import SettingModal from './components/SettingModal/index';

function App() {
  const info = useSelector(state => state.showTab);
  const dispatch = useDispatch();

    const renderSetting = () => {
        return (
            <div className="titleRight">
                <div onClick={() => {dispatch({type:'setting',payload:true})}} className="setting">
                    <SettingFilled style={{marginRight:8}} />
                    Setting
                </div>
                <div onClick={() => {dispatch({type:'modify',payload:'Start New Session'})}} className="startSession">
                    Start a Session
                </div>
            </div>
        )
    }

  return (
    <div className="topPan">
        <div className="showTitle">
            {info}
        </div>
        {
            info==='Chat' ?
            renderSetting() :
            null
        }
        <SettingModal />
    </div>
  );
}

export default App;
