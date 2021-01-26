// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line

class Application extends Component {
    constructor(props)
    {
        super(props);// Instantiates Parent Class not everytime its re-rendered
    };
    componentWillMount(props, state)
    {

    }
    componentDidMount(props, state)
    {
        console.log("Mounted with", props, state);

    }
    componentWillReceiveProps(props)
    {

    }
    componentWillUpdate(props, state)
    {
        
    }
    render() {
        let name = "Panda";
        return (<div>
            <h1>Hello, {name}</h1>
            <span>Hello there Mate</span>
        </div>
        );
    }


}

export default Application