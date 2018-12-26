import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
    it('renders the form title', () => {
        const wrapper = shallow(<App/>);
        const title = wrapper.find('.form-title').text();

        expect(title).toEqual('React FizzBuzz Form');
    });
});
