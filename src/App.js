import React from 'react'
import data from './countries.json'
import './App.css'
import Text from 'react-svg-text';

import Country from './Country/Country'
import ContextMenu from './ContextMenu/ContextMenu'

class  App extends React.Component  {

    state = {
      countriesData : data,
      code : null,
      name : '',
      coordX : null,
      coordY : null,
      activeCountry : [33, 21, 35, 78, 22, 13, 54, 72, 34, 27, 86, 5, 6, 39, 61]
    }

    handleClick = (event,item  ) =>{
      event.preventDefault()
      event.persist()

      this.setState(()=>{
        return {
          coordX : event.clientX,
          coordY : event.clientY,
          code : item.code,
          name : item.name,
          isClicked : true
        }
      })
    }

    componentWillUpdate(){
      console.log(this.ContextMenu)
    }
    render(){

      const countries = this.state.countriesData.map( item =>  {
      let isActive =  this.state.activeCountry.some((country) => {

        return country === item.id
      } )
      let classes = isActive ?  'active' : 'country'

        return  <Country item = {item}
                  coords = {item.coords}
                  key = {item.id}
                  onClick = {(event, item) => this.handleClick(event, item )}
                  classes = {classes}/>
            })
  return (

    <div  className= "map">
      <svg viewBox = "0 0 853 485">
      <Text style = {{cursor : 'pointer'}} x='125.53284' y =  '197.91788' fill = '#000' >СПБ</Text>
      <Text style = {{cursor : 'pointer'}} x="93.0071" y =  '248.94536' fill = '#000' >МСК</Text>
        {countries}


      </svg>
    {this.state.isClicked
    ? <ContextMenu code = {this.state.code}
                   name = {this.state.name}
                   coordX = {this.state.coordX}
                   coordY = {this.state.coordY}/>
    : null}


</div>

  )
}
}

export default App;
