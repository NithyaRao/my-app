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
import Shopping from '../../src/components/Shopping';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Shopping />, div);
});

it('should be initialized with an empty array', () => {
  const wrapper = shallow(<Shopping />);
  expect(wrapper.state('cart')).to.have.length(0);
});

it('should get 1 item added to cart when button is clicked', () => {
   const clock = sinon.useFakeTimers(300);
   const wrapper = mount(<Shopping />);
   wrapper.ref('name').get(0).value = 'Steak';
   wrapper.ref('category').get(0).value = 'Meat';
   wrapper.find('button').simulate('click');
   expect(wrapper.state('cart')).to.have.length(1);
   expect(wrapper.state('cart')[0].picked).to.be.false;
   // how would i know the hash code before go to md5 online hash generator enter SteakMeat300
   expect(wrapper.state('cart')[0].hash).to.equal('b696d1c6b7b3e1ad8900357fb7b3f901');
   sinon.restore();
   clock.restore();
});
