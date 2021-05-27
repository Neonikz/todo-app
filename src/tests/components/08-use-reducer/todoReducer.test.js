import {todoReducer} from '../../../components/08-use-reducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReduer', () => {
    
    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos);
    });

    test('Debe agregar un nuevo TODO', () => {

        const newTodo = {
            id:3,
            desc:'Aprender Java',
            done:false
        };

        const action = {
            type:'add',
            payload:newTodo
        }
        const state = todoReducer(demoTodos,action);
        expect(state).toEqual([...demoTodos,newTodo]);
    });

    test('Debe de borrar un TODO', () => {
        const action = {
            type:'delete',
            payload: 1
        };
        const state = todoReducer(demoTodos,action);
        expect(state).toEqual([demoTodos[1]]);
    });

    test('Debe de hacer el TOGGLE del TODO', () => {
        const action = {
            type:'toggle',
            payload: 1
        };
        const state = todoReducer(demoTodos,action);
        expect(state[0].done).toBe(true);
    });
    
    
    
});
