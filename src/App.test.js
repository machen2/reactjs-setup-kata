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
    it('renders a one when the evaluate button is clicked', () => {
        const wrapper = shallow(<App/>);
        wrapper.find('button').simulate('click');

        expect(wrapper.find('.fizz-buzz-result').text()).toEqual('1');
    });
});
