import React from 'react'
import { LoginScreen } from '../../../components/09-use-context/LoginScreen';
import { UserContext } from '../../../components/09-use-context/UserContext';
import {mount} from 'enzyme';

describe('Pruebas en <LoginScreen />', () => {
    
    const user = {
        id: 123,
        name: 'Nicolas'
    }
    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Debe de mostrar todo correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').prop('onClick')(user);
        expect(setUser).toHaveBeenCalledWith( {
            id: 123,
            name: 'Nicolas'
        } );
    });
    
});
