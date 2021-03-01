import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { GiftGrid } from "../../components/GiftGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas del componenete <GiftGrid />', () => {
    const category = 'Dragon Ball';

    test('Debe de crearse el componente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GiftGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/img.jpg',
            title: 'Title'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GiftGrid category={category} />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

})
