import React from 'react'
import { TodoList } from "../../../components/08-use-reducer/TodoList"
import { demoTodos } from '../../fixtures/demoTodos';
import {shallow} from 'enzyme';
describe('Pruebas en <TodoList />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
        todos={demoTodos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        />
    )
    test('Debe de mostrar todo correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener 2 <TodoListItem />', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function));
    });
    
});
