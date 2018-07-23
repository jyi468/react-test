import React, { Component } from 'react';
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // (prevState, props) => stateChange
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    /*render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }*/

    // Render with arrow function (valid also)
    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle