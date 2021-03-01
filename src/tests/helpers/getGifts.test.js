import { getGifts } from '../../helpers/getGifts'

describe('Pruebas con getGifts Fetch', () => {
    
    test('Debe de traer 10 elementos', async() => {
        const gifts = await getGifts('Dragon Ball');       
        expect(gifts.length).toBe(10);
    })

    test('Debe de traer un array vacio si no existe categoria', async() => {
        const gifts = await getGifts('');       
        expect(gifts.length).toBe(0);
    })
    
})
