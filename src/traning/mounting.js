import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor(){
        super();
        console.log(" I am constructor");
        this.state = {color : "green"};
    }
    static getDerivedStateFromProps(){

        console.log("I am getDerivedStateFromProp")
        return {}
    }

    componentDidMount(){
        this.setState({color : "red" })
        console.log("I am component Did Mount")
    }

    // componentWillUnmount(){
    //   console.log("I am Component Will Unmount");
    // }
  render() {
    console.log(" I am Render",this.state.color)
    return (
      <div>
        I am Render {this.state.color}
      </div>
    )
  }
}
