import React, { useState} from 'react';
import './App.css';
import Nav from './components/Navigation';
import { canvasHighContrast } from '@instructure/ui-themes';


import Tour from 'reactour';

canvasHighContrast.use()

function App() {
  const [isTourOpen, openTour] = useState(true);

  function closeTour(){
    openTour(!isTourOpen);
  }

  const steps = [
    {
      selector: '#acc',
      content: 'This is my first Step',
      position: [100, 10],
      action: ()=>{ console.log("S1"); observe(); },
    },
  
    {
      selector: '#cour',
      content: 'This is my second Step',
      position: [100, 100],
      action: ()=>{ console.log("S2"); },
    },
    {
      selector: '#help',
      content: 'This is my third Step',
      position: "bottom",  
      action: ()=>{ console.log("S3"); },
    },
  ];


  
  function observe(){
    const elem = document.getElementById("tray");
    const obs = new MutationObserver( (records) => { steps[0].selector = "#thisacc"; } );
    obs.observe(elem, {
      childList: true,
      subtree: true,
    });
  }

  return (
    <div className="App" id="app">
        <Nav accountName="Ngô Quốc Hải" courseName="CSoC"/>

        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={closeTour}
        />
        <div id="tray">
        </div>
    </div>
  );

}


export default App;
