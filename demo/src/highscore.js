import React, { Component } from 'react';

class Highscore extends Component {
    render() {
        if (this.props.overTen) {
            return (
                <div>
                    <h3>This is highscore</h3>
                    <button onClick={this.props.onReset}>Reset</button>
                </div>
            );
            //Button takes onclick property by default. when the function that calls another funtion with the same input and output you can avoid passing the input. The button emits the event as a single parameter and passes it to the function onClick as a single parameter.
        }
        else {
            return null;

        }//The Component must always return something, if you dont want to return anything in particular then use null keyword.
        //Render nothing, return null.
    }

}
export default Highscore;