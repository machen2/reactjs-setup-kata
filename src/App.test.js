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
        wrapper.find('#input-box').simulate('change', { target: { value: '2' } });
        wrapper.find('form').simulate('submit');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('2');
    });

    it('displays Fizz upon button click when the user inputs a 3', () => {
        wrapper.find('#input-box').simulate('change', { target: { value: '3' } });
        wrapper.find('form').simulate('submit');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('Fizz');
    });

    it('displays Buzz upon button click when the user inputs a 5', () => {
       wrapper.find('#input-box').simulate('change', { target: { value: '5' } });
        wrapper.find('form').simulate('submit');

       const displayText = wrapper.find('.fizz-buzz-result').text();

       expect(displayText).toEqual('Buzz');
    });

    it('displays Fizz upon button click when a multiple of 3 is input', () => {
        wrapper.find('#input-box').simulate('change', { target: { value: '6' } });
        wrapper.find('form').simulate('submit');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('Fizz');
    });

    it('displays Buzz upon button click when a multiple of 5 is input', () => {
        wrapper.find('#input-box').simulate('change', { target: { value: '10' } });
        wrapper.find('form').simulate('submit');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('Buzz');
    });

    it('displays FizzBuzz upon button click when 15 is input', () => {
        wrapper.find('#input-box').simulate('change', { target: { value: '15' } });
        wrapper.find('form').simulate('submit');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('FizzBuzz');
    });

    it('displays FizzBuzz upon button click when a multiple of 15 is input', () => {
        wrapper.find('#input-box').simulate('change', { target: { value: '30' } });
        wrapper.find('form').simulate('submit');

        const displayText = wrapper.find('.fizz-buzz-result').text();

        expect(displayText).toEqual('FizzBuzz');
    });

    it('does not display text upon page load when no input is given and the button is clicked', () => {
        wrapper.find('form').simulate('submit');

        expect(wrapper.find('.fizz-buzz-result').exists()).toEqual(false);
    });
});
