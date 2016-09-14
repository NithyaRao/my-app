import React, {Component} from 'react'; // this will be a stateful component

class Hello extends Component {
  constructor() {
    super();
    this.hi = this.hi.bind(this); // to specify what "this" is
    this.state = {};
  }

  // hi() is a instance method and are stored in the prototype
  hi() {
    const name = this.refs.name.value;
    this.setState({greeting: `Hello, ${name}`});
  }


  render() {
    return (
      <div>
        <h1>
          Hello World
        </h1>
        <input type="text" ref="name" />
        <button onClick={this.hi}>Speak</button>
        <div id="greeting">{this.state.greeting}</div>
      </div>
    );
  }
}

export default Hello;
