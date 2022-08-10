import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = ( ) => {
    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategories = ( newCategory ) => {
        //VALIDAR LAS CATEGORIAS O ITEMS PARA QUE NO SE REPITAN
        if (categories.includes(newCategory)) {
            return alert('Este gifs ya existe...');
        }
        setCategories([ newCategory, ...categories]);
    }
 
    return (
    <>

        {/* titulo */}
        <h1>GitExpertApp</h1>

        {/* Input */}
        <AddCategory 
            //setCategories={ setCategories }    
            //onNewCategory = { event => onAddCategory(event) }
            onNewCategory = { onAddCategories }
        />

        {/* Listado de Gif */}
        
            {
                /*categories.map(category => {
                    return <li key={ category }> { category }</li>
                })*/

                /*categories.map( ( category ) => (
                    <div key={ category }>
                        <h3> { category } </h3>
                        <li> { category } </li>
                    </div>
                ))*/

                categories.map( ( category ) => (
                    <GifGrid 
                    key={ category } 
                    category = { category }/>
                ))
            }
    
            {/* Gif items */}

    </>
  )
}
