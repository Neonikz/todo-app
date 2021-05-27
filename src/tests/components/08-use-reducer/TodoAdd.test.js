import React from 'react'
import { TodoAdd } from "../../../components/08-use-reducer/TodoAdd"
import { demoTodos } from '../../fixtures/demoTodos';
import {shallow} from 'enzyme';

describe('Pruebas en <TodoAdd />', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(
    <TodoAdd
        handleAddTodo={handleAddTodo}
    />
    );
    
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar el handleAddTodo', () => {
       const formSubmit = wrapper.find('form').prop('onSubmit');
       formSubmit({ preventDefault(){} }); 
       expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar la funcion handleAddTodo', () => {
        const value = 'Hola';
        const input = wrapper.find('input').simulate('change',{
            target: {
                value,
                name:'description'
            }
        })
        const form = wrapper.find('form').prop('onSubmit');
        form({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith( expect.any(Object));    //{}
        expect(handleAddTodo).toHaveBeenCalledWith( {
            id:expect.any(Number),
            desc:value,
            done:false
        } );

        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
    
    
});
