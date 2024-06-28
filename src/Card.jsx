import React from 'react'
import '../src/Card.css'

export default function Card(props) {
  return (
    <>
        <div className="p1">
            <div className="imgDiv">
            <img src={props.img} alt="" />
            </div>

            <h1>{props.text}</h1>

        </div>


    </>
  )
}
