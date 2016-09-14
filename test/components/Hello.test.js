import React from 'react';
import ReactDOM from 'react-dom'; // tree of nodes.
// React renders a virtual DOM (or shadow DOM), compares it with original,
// then sends the differences to the browser

// need to:
// npm i react-addons-test-utils chai enzyme sinon --save-dev
import TestUtils from 'react-addons-test-utils';
import {mount, shallow, render} from 'enzyme'; // {} object destructuring
import {expect} from 'chai'; // assertions
import sinon from 'sinon'; // mocking
import Hello from '../../src/components/Hello';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hello />, div);
});

it('should render Hello World in an h1', () => {
  //we use enzyme here when it renders; it renders shallow or full rendering default start with shallow then use full
  const wrapper = shallow(<Hello />); // render hello in memory shallow
  expect(wrapper.find('h1').text()).to.equal('Hello World');
   // this is saying find an H1 tag, and look at the text in it, and does it equal 'Hello World'?
  console.log(wrapper.debug());

});

// spy on function using sinon to test if the function got called
it('should call the function hi() when the button is clicked', () => {
  sinon.spy(Hello.prototype, 'hi'); // hi() method in Hello.Prototype
  const wrapper = mount(<Hello />); // mount in enzyme is a full render for clicking, input etc
  wrapper.find('button').simulate('click');   // go inside the component and find the button and simulate clicking
  // to find by id use find('#id')
  expect(Hello.prototype.hi.calledOnce).to.be.true;
});

// integration test for the particular Component
it('should render Hello, Bob', () => {
  const wrapper = mount(<Hello />);
 // find ref with 'name' get(0) turns enzyme componet to react componet
  wrapper.ref('name').get(0).value = 'Bob';
  wrapper.find('button').simulate('click');
  // if we have multiple div use id its easier to find with id
  expect(wrapper.find('#greeting').text()).to.equal('Hello, Bob');
  // check state in memory as we set the state it re renders the page
  expect(wrapper.state('greeting')).to.equal('Hello, Bob');  
});
