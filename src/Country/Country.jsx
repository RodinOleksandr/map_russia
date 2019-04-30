import React from 'react'


function  Country(props){
  return (

        <path className = {props.classes}

              d = {props.coords}
              onClick = {(event , item ) =>props.onClick(event , props.item )}
        />


  )
}

export default Country
