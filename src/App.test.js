import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders withou crashing', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toBeTruthy();

});

test("renders without error", () => {
  const wrapper = shallow(<App ></App>);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders counter display", () => {

});

test("counter starts at 0", () => {

});

test("clicking on button increments counter display", () => {

});
