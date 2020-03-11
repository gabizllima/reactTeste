import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//O componente Square renderiza um único <button> 
class Square extends React.Component {
    //O método render retorna uma descrição do que você deseja ver na tela
    render() {
      return (
        //A prop onClick do DOM embutida no componente <button> diz ao React para criar event listener
        <button className="square" 
        onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  //O componente Board renderiza 9 squares
  class Board extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              squares: Array(9).fill(null),
          };
      }

    handleClick(i) {
        //slice() para criar uma cópia do array de quadrados para o modificar ao invés de faze-lo no array existente
        const squares = this.state.squares.slice();
        squares[i] = 'x';
        this.setState({squares: squares});
    }

    // define o valor a partir do estado
    renderSquare(i) {
      return (
      <Square 
        value={this.state.squares[i]}
        //Em React a convenção é usar nomes on[Event] para props que representam eventos e handle[Event] para metodos que manipulam os eventos
        onClick={() => this.handleClick(i)}
      />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
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
        </div>
      );
    }
  }
  //O componente Game renderiza um Board com valores que modificaremos mais tarde
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );