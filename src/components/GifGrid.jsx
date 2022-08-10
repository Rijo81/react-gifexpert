//GRID
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = (  { category } ) => {

  //Custom Hooks crear desde cero....
  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
        <h3> { category } </h3>
        {/* Visualizacion de que esta cargando la pagina Loaging.... */}
        {
          isLoading && ( <h2>Cargando...</h2> )
        }
        {/*<h5 > { counter } </h5>
        <button onClick={ () => setCounter(counter + 1)}>+1</button>*/}
        <div className="card-grid">
          { 
              images.map( ( image ) => (
                  <GifItem key={ image.id } { ...image } />
              ))
          }
        </div>
    </>
  )
}
/*title= { image.title }
                          url = { image.url }*/