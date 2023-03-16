import React from 'react'
import {RxDoubleArrowRight } from "react-icons/rx";
const Kecid = (props) => {
  return (
    <div className="galery-content">
    <h1>{props.name}</h1>
    <h3>Ana səhifə <RxDoubleArrowRight className="routeIcon"/>{props.name}</h3>
    </div>
  )
}

export default Kecid