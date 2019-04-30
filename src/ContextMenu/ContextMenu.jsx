import React from 'react'

function  ContextMenu(props){

  return (

        <div  className = 'info' style = {{left : props.coordX , top : props.coordY}}>

        <span> {props.name} </span>

        </div>
  )
}

export default ContextMenu
