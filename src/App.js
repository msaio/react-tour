import React from 'react';
import './App.css';
import Nav from './components/Navigation';
import { canvasHighContrast } from '@instructure/ui-themes';
import MTour from './components/Tour';
import { Grid, } from '@instructure/ui-grid';
import DashBoard from './components/DashBoard';

canvasHighContrast.use()

function App() {

  return (
    <div className="App" id="app">
      <MTour />
      
      <Nav accountName="Ngô Quốc Hải" courseName="CSoC" />
      <div style={{ marginLeft: "84px" }}>
        <DashBoard />
      </div>


      <div id="tray" >
      </div>
      
    </div >
  );

}


export default App;
