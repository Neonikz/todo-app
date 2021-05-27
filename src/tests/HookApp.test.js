import React from 'react'
import { HooksApp } from "../HookApp"
import {shallow} from 'enzyme';

describe('Pruebas en el HookApp', () => {
    test('Hacer el primer snapshot', () => {
        const wrapper = shallow(<HooksApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
