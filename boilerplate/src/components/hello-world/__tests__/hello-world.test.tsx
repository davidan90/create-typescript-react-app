import * as React from 'react';
import { shallow } from 'enzyme';
import { HelloWorld } from '../hello-world';

describe('HelloWorld Component', ()=> {
    
    // let wrapper: any;
    // beforeEach(() => {
    //     wrapper = shallow(<HelloWorld greeting='hello'/>);
    // });

    it('Render default destination', () => {
        const wrapper = shallow(<HelloWorld greeting='hello'/>)
        expect(wrapper.contains(<h1 className='title'>hello World!</h1>)).toBe(true);
    });

    it('Render with destination', () => {
        const wrapper = shallow(<HelloWorld greeting='hello' destination='human'/>)
        expect(wrapper.text()).toEqual('hello human!');
    });

    it('Render h1 with .title class', () => {
        const wrapper = shallow(<HelloWorld greeting='hello'/>)
        expect(wrapper.is('.title')).toBe(true);
        expect(wrapper.find('h1.title')).toHaveLength(1);
    })
});
