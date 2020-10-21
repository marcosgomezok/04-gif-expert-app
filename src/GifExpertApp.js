import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = ({defaultCategories = []}) => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    // no se suele usar arreglos constantes porque luego no se les puede agregar elementos
    //luego se cambia la key category por la id de la db, no se usa el indice i
    const [categories, setCategories] = useState(defaultCategories);
    //const [categories, setCategories] = useState('One pnch man');
    
    /* const handleAdd = () =>{
        //categories.push('HunterXHunter'); no es una buena practica
        //setCategories('HunterXhunter') asi no se agregan elementos
        setCategories([...categories,'HunterXHunter'])
        //setCategories(cats =>[...categories,'HunterXHunter'])
        console.log(categories);
    } */
    //console.log(categories);
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>



           <ol>
               {
               categories.map(category => (
               <GifGrid key={category} category={category}/>
               ))
                   
                }
           </ol>
        </div>
    )
}
//            <button onClick={handleAdd}>Agregar</button>
//<AddCategory/>
//<AddCategory setCategories={setCategories}/>
//const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);