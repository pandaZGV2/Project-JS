import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import React, { Component } from 'react';
import "./css/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '0',
      previous: []
    }
  }
  reset = () => {
    this.setState({
      result: '0',
      current: 0
    })
  }
  addtoCurrent = (symbol) => {
    console.log(symbol)
    this.setState({ current: this.state.current + symbol });
  }

  render() {
    const buttons = [
      { symbol: 'C', cols: 3, action: this.reset },
      { symbol: '/', cols: 1, action: this.addtoCurrent },

      { symbol: '7', cols: 1, action: this.addtoCurrent },
      { symbol: '8', cols: 1, action: this.addtoCurrent },
      { symbol: '9', cols: 1, action: this.addtoCurrent },
      { symbol: 'X', cols: 1, action: this.addtoCurrent },

      { symbol: '4', cols: 1, action: this.addtoCurrent },
      { symbol: '5', cols: 1, action: this.addtoCurrent },
      { symbol: '6', cols: 1, action: this.addtoCurrent },
      { symbol: '-', cols: 1, action: this.addtoCurrent },

      { symbol: '1', cols: 1, action: this.addtoCurrent },
      { symbol: '2', cols: 1, action: this.addtoCurrent },
      { symbol: '3', cols: 1, action: this.addtoCurrent },
      { symbol: '+', cols: 1, action: this.addtoCurrent },

      { symbol: '0', cols: 1, action: this.addtoCurrent },
      { symbol: '.', cols: 1, action: this.addtoCurrent },
      { symbol: '=', cols: 2, action: this.addtoCurrent }
    ];
    return (
      <div className="App">
        <input value={this.state.current} className="result" type="text" value={this.state.current} />
        <div>{
          buttons.map((btn, i) => {
            return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)} />

          })
        }
        </div>
      </div>
    );
  }
}

export default App;
