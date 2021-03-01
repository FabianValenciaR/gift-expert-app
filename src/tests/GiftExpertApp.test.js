import { shallow } from "enzyme"
import { GiftExpertApp } from "../GiftExpertApp"
import React from 'react';

describe('Pruebas de <GiftExpertApp />', () => {
    test('Debe de renderizar el componente', () => {
        const wrapper = shallow(<GiftExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['Dragon Ball', 'One Punch'];
        const wrapper = shallow(<GiftExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GiftGrid').length).toBe(categories.length);
    })


})
