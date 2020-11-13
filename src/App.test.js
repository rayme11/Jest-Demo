import React, { Component } from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App ></App>);

/**
* Factory function to create ShallowWrapper for the App Component
  * @function setup
  * @returns {ShallowWrapper}
*/

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders withou crashing', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();

});

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
})

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);

});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");

});

test("clicking on button increments counter display", () => {
  // find button
  const wrapper = setup();
  // click button
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate('click');
  // find the display and test number increase
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});
