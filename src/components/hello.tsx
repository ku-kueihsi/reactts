import * as React from 'react'
import JSONEditor, { JSONEditorOptions } from 'jsoneditor'

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}

export interface ShoppingListProps { name: string }

export class ShoppingList extends React.Component<ShoppingListProps, undefined> {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export interface SquareProperties {
  value: string;
  onClick: () => void;
}

export class Square extends React.Component<SquareProperties, {}> {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}

export interface BoardStates {
  squares: string[];
}

export class Board extends React.Component<{}, BoardStates> {
  constructor() {
    super();
    this.state = {
      squares: Array(10).map(() => '') as string[],
    };
  }

  renderSquare(i: number) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
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

export interface JsonEditorProps { }

export class JsonEditor extends React.Component<JsonEditorProps, {}> {
  editor: JSONEditor

  constructor() {
    super();
  }

  componentDidMount() {
    let treeOptions: JSONEditorOptions = {
      mode: 'tree',
      modes: ['code', 'tree']
    };

    this.editor = new JSONEditor(this.refs.editor as HTMLElement, treeOptions);
  }

  render() {
    return (
      <div>
        <link href="../../node_modules/jsoneditor/dist/jsoneditor.css" rel="stylesheet" type="text/css"></link>
        <div ref="editor"></div >
      </div>);
  }
}

export class ExampleDiv extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Board />
        <JsonEditor />
      </div>);
  }
}