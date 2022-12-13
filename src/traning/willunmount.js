import React, { Component } from 'react';
import Mounting from './mounting';

export default class WillUnmount extends Component {
    constructor(){
        super();
        this.state = {Mounting : true};
    }

    componentWillUnmount(){
        console.log("Component Will Unmounting")
    }
  render() {
    return (
      <div> 
      <p>I am render
      {this.state.Mounting && <Mounting/>}
      <button onClick={()=>{this.setState({Mounting:false})}}> click </button>
      </p>
      
      </div>
    )
  }
}
