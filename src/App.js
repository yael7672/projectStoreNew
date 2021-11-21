import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import store from './Store/Store';
import Login from './Components/login'
import Home from './Components/Home'
import Menu from './Components/menu';
import Product from './Components/Product';
import ContactUs from './Components/ContactUs';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Game></Game> */}
      {/* <Login></Login> */}
      <BrowserRouter>
        <Menu></Menu>
      </BrowserRouter>
      {/* <Switch>
          <Provider store={store}>
          <Route exact path="/">
           <FirstLevel></FirstLevel> 
          </Route>
          <Route path="/secondLevel">
            <SecondLevel></SecondLevel>
          </Route>
          <Route path="/thirdLevel">
            <ThirdLevel></ThirdLevel>
          </Route>

        </Provider>
        </Switch> */}
    </div>
  );
}



function Square(props) {

  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }


    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  // handleClick(i)
  // {
  //   const squares = this.state.squares.slice();
  //   squares[i]=this.state ? 'X':'O';
  //   this.setState=({
  //     squares:squares,
  //     xIsNext:!this.state.xIsNext
  //   });
  // }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  }
  render() {
    const winner = calculateWinner(this.state.squares)
    let status;
    if (!winner) {
      status = "The Next Player:" + (this.state.xIsNext ? 'X' : 'O')
    } else {
      status = "The winner is :" + (winner)
    }
    // const status="The Next Player:"+(this.state.xIsNext?'X':'O' )
    // const Thewinner="The winner is :"+( winner)

    return (
      <>
        <div className="status"> {status}</div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </>
    )
  }
}
class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Board />
    )
  }
}
function calculateWinner(squares) {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default App;
