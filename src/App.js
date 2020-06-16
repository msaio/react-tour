import React from 'react';
import './App.css';
import Nav from './components/Navigation';
import { canvasHighContrast } from '@instructure/ui-themes';
import MTour from './components/Tour';

canvasHighContrast.use()

function App() {

  return (
    <div className="App" id="app">
      <Nav accountName="Ngô Quốc Hải" courseName="CSoC" />

      <MTour />
      <div id="tray" >
        
      </div>
    </div>
  );

}


export default App;
