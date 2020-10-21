//import React,{useState, useEffect} from 'react'
//import { getGifs } from '../helpers/getGifs'; 
//el import de arriba se usa en el custom hook
import { GifGridItem } from './GifGridItem';
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {


//    const [images, setImages] = useState([]);
//    const state = useFetchGifs();
    const {data:images,loading} = useFetchGifs(category);


    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p>Loading</p>}
        <div className="card-grid animate__animated animate__flash">

            {
                images.map(img => (
                <GifGridItem key={img.id}
                {...img}
                />
                ))
            }
        </div> 
        </>
    )
}
GifGrid.propTypes ={
    category: PropTypes.string.isRequired
}

    //const [count, setCount] = useState(0)

    // getGifs();
/*

    useEffect(()=>{
        getGifs(category)
            .then(setImages);
    },[category]) */

//.then(imgs => setImages(imgs))


/*     const getGifs = async() =>{

   

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=dQaadwLZwFULzd2dI2vMmTfZdGI3SMuj`
        
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })
        console.log(gifs) 
        setImages(gifs);
    } */

    /* <h3>{count}</h3>
<button onClick={ () => setCount ( count + 1 ) }></button> */

//images.map(img => (
//sin desestructuracion linea 53
/* 
<ol>
{
    images.map(({id,title}) => (
                <li key={id}>{title}</li>
    ))
}
</ol>
 */

 /* <div className="card-grid">

            {
                images.map(img => (
                <GifGridItem key={img.id}
                {...img}
                />
                ))
            }
        </div> */