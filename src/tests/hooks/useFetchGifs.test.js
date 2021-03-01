import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas del custom hook useFetchGifs.js', () => {

    test('Debe retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const { data, loading } = result.current;

        await waitForNextUpdate({timeout:1500});

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));

        await waitForNextUpdate();

        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    })

})
