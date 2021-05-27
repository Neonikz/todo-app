import {renderHook, act} from '@testing-library/react-hooks';
import {useForm} from '../../hooks/useForm';


describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Nicolas',
        email: 'correo@correo.com'
    };

    test('Debe de regresar un form por defecto ', () => {
        const { result } = renderHook( () => useForm(initialForm));

        const [values, handleInputChange,reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });
    
    
    test('Debe de cambiar el valor del name', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const [,handleInputChange] = result.current;
        
        act( () => {
            handleInputChange({
                target:{
                    name:'name',
                    value:'Carlos'
                }
            })
        });
        const [values] = result.current;
        expect(values).toEqual( {...initialForm,name:'Carlos'} );

    });

    test('Debe de restablecer el form con RESET', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const [,handleInputChange,reset] = result.current;
        
        act( () => {
            handleInputChange({
                target:{
                    name:'name',
                    value:'Carlos'
                }
            });
            reset();
        });
        const [values] = result.current;
        expect(values).toEqual( initialForm );

    });
    
})
