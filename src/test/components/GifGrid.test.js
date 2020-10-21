import '@testing-library/jest-dom';//ayuda con el autocompletado
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')



describe('Pruebas en el <GifGrid />', () => {
    
    const category = "One Punch"
    test('debe de mostrarse correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        
        expect(wrapper).toMatchSnapshot();

    })
    
    test('debe de mostrar items cuando se cargan imagentes useFetch', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquie/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquie/cosa.jpg',
            title: 'Cualquier cosa'
        }]

     

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
        
        


    })



  
    

})
