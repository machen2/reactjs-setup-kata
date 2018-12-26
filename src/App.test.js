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
    it('displays the number the user inputs upon button click', () => {
        const wrapper = shallow(<App/>);

        wrapper.find('input').simulate('change', { target: { value: '2' } });
        wrapper.find('button').simulate('click');

        expect(wrapper.find('.fizz-buzz-result').text()).toEqual('2');
    });

    it('displays Fizz upon button click when the user inputs a 3', () => {
        const wrapper = shallow(<App/>);

        wrapper.find('input').simulate('change', { target: { value: '3' } });
        wrapper.find('button').simulate('click');

        expect(wrapper.find('.fizz-buzz-result').text()).toEqual('Fizz');
    });
});
