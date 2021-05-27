import React from 'react'
import { HomeScreen } from '../../../components/09-use-context/HomeScreen'
import { UserContext } from '../../../components/09-use-context/UserContext';
import {mount} from 'enzyme';

describe('Pruebas en <HomeScreen />', () => {
    
    const user = {
        name:'Nicolas',
        email:'correo@correo.com',
    }

    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});
