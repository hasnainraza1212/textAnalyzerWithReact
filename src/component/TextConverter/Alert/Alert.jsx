import React from 'react'
import AlertCss from './Alert.module.css'
const Alert = (props) => {
  return (
   
       props.alert && <div className={`alert ${AlertCss.alertbox} ms-lg-4 alert-success animate__animated animate__bounceInRight `} role="alert">
        <strong>{props.alert.type}</strong> <span>{props.alert.message}</span>
        </div>
   
  )
}

export default Alert