import { shallow } from "enzyme"
import '@testing-library/jest-dom'
import { AddCategory } from "../../components/AddCategory"
import React from 'react';

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value: value } });
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(value);
    })

    test('NO debe de postear la informacion onSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories() y limpiar la caja de texto', () => {
        const value = "Test text";
        wrapper.find('input').simulate('change', { target: { value: value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(wrapper.find('input').prop('value')).toBe('');
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenLastCalledWith(expect.any(Function));
    })


})
