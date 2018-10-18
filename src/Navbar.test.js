import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar/Navbar';
import App from './App';

import { TestWrapper } from './App.test.js';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />',() => {
  const wrapper = shallow(<TestWrapper><Navbar/></TestWrapper>);
  console.log(wrapper.debug());
});

// class LocalStorageMock {
//   constructor() {
//     this.store = {};
//   }
//
//   clear() {
//     this.store = {};
//   }
//
//   getItem(key) {
//     return this.store[key] || null;
//   }
//
//   setItem(key, value) {
//     this.store[key] = value.toString();
//   }
//
//   removeItem(key) {
//     delete this.store[key];
//   }
// };
//
// global.localStorage = new LocalStorageMock;
