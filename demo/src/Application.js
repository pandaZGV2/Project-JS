// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line

class Application extends Component {
    constructor(props) {
        super(props);// Instantiates Parent Class not everytime its re-rendered
        this.state = {
            count: 0,
            overTen: false
        }
    };
    // componentWillMount(props, state) {

    // }
    // componentDidMount(props, state) {
    //     console.log("Mounted with", props, state);

    // }
    // componentWillReceiveProps(props) {

    // }
    // componentWillUpdate(props, state) {
    //     if (this.props.name !== props.name) {
    //         //Do something
    //     }
    // }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });

    }
    componentDidUpdate(props, state) {
        if (this.state.count > 10 && this.state.count != state.count && !this.state.overTen) {//Checks if state.count is over 10 then checks if the state.count is not equal to state.count then checks if overTen is set already
            //If overTen is set to true then statements are ignored otherwise they will be rendered.
            //Prevents errors due to Maximum Depth Reached
            console.log("Updating over 10");
            this.setState({ overTen: true });
        }
        //this.setState({count: this.state.count  + 1});//Doesnt work as it repeatedly triggers componentDidUpdate so you get Maximum Depth exceeded error.
    }
    render() {
        let name = "Panda";
        let { count } = this.state;
        return (<div>
            <h1>You clicked the button {count} times.</h1>
            {(this.state.overTen) ?
                <h1>You have crossed 10</h1>
                : null
            }
            <span><button onClick={(e) => this.handleClick()}>Click Me!</button></span>
        </div>
        );
        //Includes a ternary statement, syntax is similar to cpp but needs to be enclosed if {} as its JS. 
        //null indicates nothing is there to be done
        //if the condition is true then the html tag comes in place and the web pages is re-rendered
    }


}

export default Application