import React from 'react'
import './Lectura.css'

type tLectura = {
    title?: string,
    vel?: number,
    children?: React.ReactNode,
    font?: boolean,
}
function Lectura({title = '', vel = 1, font=true, children}: tLectura) {
  return (
    <div className={`Lectura ${font ? 'Font' : 'FontNone'}`}>
        <h1> {title} </h1>
        {children}
    </div>
  )
}

export default Lectura