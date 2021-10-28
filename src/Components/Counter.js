import React, { useState} from 'react';

const Counter = () => {
  const [count,setCount] = useState(0)

  const handlePlus = () => {
    setCount(count + 1)
  }
  const handleReset = () => {
    setCount(0)
  }
  const handleMinus = () => {
    if (count >=1) {
      setCount(count - 1)
    } 
  }
  return (
    <>
      <p> Compteur: {count}</p>
      <button type="button" onClick={handlePlus}> + </button>
      <button type="button" onClick={handleReset}>Reset</button>
      <button type="button" onClick={handleMinus}> - </button>
    </>
  )
}

export default Counter
