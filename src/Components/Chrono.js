import React, { useState, useEffect} from 'react';

const Chrono = () => {
  let [chronoValue,setChronoValue] = useState(0);
  let [initialValue,setInitialValue] = useState(0);
  let [chronoState,setChronoState] = useState('Init')
  let [stopValue,setStopValue] = useState(0)
  

  useEffect( () => {
    let createClock = null
    switch (chronoState){
      case 'Start':
        createClock = setInterval( () => {
          console.log (initialValue);
          setChronoValue((Date.now() - initialValue + stopValue)/1000);
          }, 1000);
        console.log('start')
        break;
      default:
        console.log(` Pb chronostate à la valeur ${chronoState}`);
    }
    return () => clearInterval(createClock)
  }, [chronoState]);

  const btnStart = () => {
    setInitialValue(Date.now()); 
    console.log ('la valeur de initial value est',initialValue);
    setChronoState('Start') ;
    console.log(stopValue);
  }
  const btnStop = () => {
    setChronoState('Stop');
    setStopValue(Math.round(chronoValue * 1000))
    console.log('stopValue',stopValue);
    console.log('chronoValue',chronoValue);
  }
  const BtnReset = () => {
    setChronoValue(0);
    setChronoState('Init') ;
    setStopValue(0)
  }

  return (
    <>
      <p> Chronomètre: {chronoValue} s</p>
      <button type="button" onClick={btnStart}> Start </button>
      <button type="button" onClick={btnStop}>Stop</button>
      <button type="button" onClick={BtnReset}> Reset </button>
    </>
  )
}

export default Chrono