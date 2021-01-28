import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button className={`column-${this.props.cols}`} class="calc-button" onClick={(e) => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
        )
    }

}
export default Button;