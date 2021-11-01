import React from 'react'
import './SnackBar.css';
const SnackBar = ({top, right, bottom, left, color, children}) => {
  return (
    <div 
      className="snackbar"
      style={{ 
        top: top || 'auto',
        right: right || 'auto', 
        bottom: bottom || 'auto',
        left: left || 'auto',
        backgroundColor: color || '#0984e3'
      }}
    >
      {children}
    </div>
  )
}

export default SnackBar
