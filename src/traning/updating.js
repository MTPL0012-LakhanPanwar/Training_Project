import React, { Component } from 'react'

export default class Updating extends Component {
    constructor() {
        super();
        console.log(" I am constructor");
        this.state = { color: "green" };
    }
    static getDerivedStateFromProps() {

        console.log("I am getDerivedStateFromProp");
        return{}
    }

    // componentDidMount() {
    //     this.setState({ color: "red" })
    //     console.log("I am component Did Mount")
    // }

    shouldComponentUpdate() {
        console.log("i am shouldComponentUpdate")
        // return false;
        return true;
    }

    getSnapshotBeforeUpdate(prevState){
        console.log("getSnapshot fore update",prevState.color);
        return {}
        
    }

    componentDidUpdate(){
        console.log("i am component Did Update");
    }

    render() {
        console.log(" I am Render", this.state.color)
        return (
            <div>
                I am Render {this.state.color}
            </div>
        )
    }
}
