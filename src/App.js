import React, { useState, useRef } from 'react';
import './App.css';
import Nav from './components/Navigation';
import { canvasHighContrast } from '@instructure/ui-themes';


import Tour from 'reactour';

canvasHighContrast.use()

function App() {
  const [isTourOpen, openTour] = useState(true);

  function closeTour() {
    openTour(!isTourOpen);
  }


  let tourCfg = [
    {
      selector: "#acc",
      content: 'This is my first Step',
      position: "right",
      observe: "#tray",
      action: () => { console.log("S1"); },
    },

    {
      selector: '#cour',
      content: 'This is my second Step',
      position: [100, 100],
      action: () => { console.log("S2"); },
    },
    {
      selector: '#help',
      content: 'This is my third Step',
      position: "bottom",
      action: () => { console.log("S3"); },
    },
  ];

  const [steps, changeSteps] = useState(tourCfg);
  function handleChangeSteps() {
    changeSteps(tourCfg);
  }

  return (
    <div className="App" id="app">
      <Nav accountName="Ngô Quốc Hải" courseName="CSoC" />

      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={closeTour}
        update="steps"
        getCurrentStep={
          (num) => { console.log(num); }
        }
      />

      <div id="tray">
      </div>
    </div>
  );

}


export default App;
