import React, { Component } from 'react';

class Highscore extends Component {
    render() {
        if (this.props.overTen) {
            return (
                <div>
                    <h3>This is highscore</h3>
                    <button onClick={(e) => this.props.onReset(e)}>Reset</button>
                </div>
            );
        }
        else {
            return null;

        }//The Component must always return something, if you dont want to return anything in particular then use null keyword.
        //Render nothing, return null.
    }

}
export default Highscore;