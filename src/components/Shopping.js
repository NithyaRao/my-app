import React, {Component} from 'react'; // this will be a stateful component
import md5 from 'md5'; // need to npm i md5 --save
class Shopping extends Component {
  constructor() {
    super();
    this.state = {cart: []};
    this.add = this.add.bind(this);
  }

  add() {
    const name = this.refs.name.value;
    const category = this.refs.category.value;
    const time = Date.now(); // uses Sinon's fake timers
    const picked = false;
    const hash = md5(name+category+time);
    this.setState({cart: [...this.state.cart, {name, category, time, picked, hash}]}); // spread the original array into indivdual components, then add in values
  }


  render() {
    return (
      <div>
        <h1> shopping Cart </h1>
        <input type="text" ref="name" />
        <select ref="category">
          <option>Meat</option>
          <option>Produce</option>
        </select>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default Shopping;
