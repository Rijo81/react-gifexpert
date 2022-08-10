  //Custom Hooks crear desde cero....

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
//const [counter , setCounter ] = useState(10);  
const [images, setImages] = useState([]);
const [isLoading, setIsLoading] = useState( true );

const getImages = async() => {
  const newImages = await getGifs( category );
  setImages( newImages);
  setIsLoading( false );
}

//Este Hook esta controlando la salida para que no se repitan las listas de array
//Dispara un evento secundario a partir de uno...
useEffect(() => {
  getImages();

}, []);

        return {
            images,
            isLoading
        }
}