import React from 'react'

export default function Button(props) {
    console.log(props)
  return (
    <button>{props.text}</button>
  )
}
