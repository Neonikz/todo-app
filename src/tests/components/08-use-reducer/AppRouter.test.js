import React from 'react'
import { AppRouter } from '../../../components/09-use-context/AppRouter';
import { UserContext } from '../../../components/09-use-context/UserContext';
import {mount} from 'enzyme';

describe('Pruebas en <AppRouter />', () => {

    const user = {
        id: 1,
        name: 'Nicolas'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    )

    test('Debe de mostrar todo correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});
