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
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('displays the number the user inputs upon button click', () => {
        wrapper.find('input').simulate('change', { target: { value: '2' } });
        wrapper.find('button').simulate('click');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('2');
    });

    it('displays Fizz upon button click when the user inputs a 3', () => {
        wrapper.find('input').simulate('change', { target: { value: '3' } });
        wrapper.find('button').simulate('click');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('Fizz');
    });

    it('displays Buzz upon button click when the user inputs a 5', () => {
       wrapper.find('input').simulate('change', { target: { value: '5' } });
       wrapper.find('button').simulate('click');

       const displayText = wrapper.find('.fizz-buzz-result').text();

       expect(displayText).toEqual('Buzz');
    });

    it('displays Fizz upon button click when a multiple of 3 is input', () => {
        wrapper.find('input').simulate('change', { target: { value: '6' } });
        wrapper.find('button').simulate('click');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('Fizz');
    });

    it('displays Buzz upon button click when a multiple of 5 is input', () => {
        wrapper.find('input').simulate('change', { target: { value: '10' } });
        wrapper.find('button').simulate('click');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('Buzz');
    });

    it('displays FizzBuzz upon button click when 15 is input', () => {
        wrapper.find('input').simulate('change', { target: { value: '15' } });
        wrapper.find('button').simulate('click');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('FizzBuzz');
    });

    it('displays FizzBuzz upon button click when a multiple of 15 is input', () => {
        wrapper.find('input').simulate('change', { target: { value: '30' } });
        wrapper.find('button').simulate('click');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('FizzBuzz');
    });
});
