import React from 'react';

const Serie = (props) => {
  const { serie } = props;
  return (
    <div className='container-info'>
      <div className='container-object'>
        <b className='titulo'>{serie.name}</b><br></br> 
        <ul>            
            <li>
                <b><span className='titulos2'>Descripción</span></b><br></br>
                <p> </p><b className='pdes'>{serie.description}</b>
            </li>
            
            <li>
                <b><span className='titulos2'>Año de lanzamiento</span></b><br></br>
                <b className='pdes'>{serie.year}</b>
            </li>
         
            <li>
                <b><span className='titulos2'>Temporadas</span></b><br></br>
                <b className='pdes'>{serie.seasons}</b>
            </li>   
        </ul>
        <div className='image-container'>
        <img src= {serie.url} className="imagenSerie"></img>
        </div>
        
      </div>
    </div>
  );
};



export default Serie;