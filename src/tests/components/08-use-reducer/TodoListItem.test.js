import React from 'react'
import { TodoListItem } from '../../../components/08-use-reducer/TodoListItem';;
import { demoTodos } from '../../fixtures/demoTodos';
import {shallow} from 'enzyme';



describe('Pruebas en <TodoListItem />', () => {
    const handleDelete = jest.fn();         //Asigno funciones jest a variables
    const handleToggle = jest.fn();
    
    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />);
    
    test('Todo debe funcionar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    
    test('Debe de llamar la funcion handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith( demoTodos[0].id);            //Pruebo si fueron llamadas
    });
    
    test('Debe de llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith( demoTodos[0].id);
    });

    test('Debe de mostrar el texto correctamente', () => {
        const parrafo = wrapper.find('p').text();
        expect(parrafo.trim()).toBe('1. Aprender React')
    });

    test('Debe de tener la clase complete si el TODO.done = true', () => {
        
        const todo = demoTodos[0];
        todo.done = true;
        
        const wrapper = shallow(
            <TodoListItem
                todo={todo}
            />);

        const parrafo = wrapper.find('p');
        expect(parrafo.hasClass('complete')).toBe(true);
        
    });
    
    
    
})
