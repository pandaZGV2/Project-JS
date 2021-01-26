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
        if (this.state.count > 10) {
            this.setState({ overTen: true });
        }
        //this.setState({count: this.state.count  + 1});//Doesnt work as it repeatedly triggers componentDidUpdate so you get Maximum Depth exceeded error.
    }
    render() {
        let name = "Panda";
        let { count } = this.state;
        return (<div>
            <h1>You clicked the button {count} times.</h1>
            {(this.state.overTen && this.state.count != state.count) ?
                <h1>You have crossed 10</h1>
                : null
            }
            <span><button onClick={(e) => this.handleClick()}>Click Me!</button></span>
        </div>
        );
    }


}

export default Application