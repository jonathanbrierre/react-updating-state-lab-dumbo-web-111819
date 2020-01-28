// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {
    state={
        timesClicked: 0
    }
    onClick = (e) => {
        const newNumber = this.state.timesClicked +=1
        this.setState({timesClicked : newNumber})
    }
    render() {
        return (
            <div>
                <button onClick={this.onClick} >{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
