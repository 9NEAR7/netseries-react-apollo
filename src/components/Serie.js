import React from 'react';

const Serie = (props) => {
  const { serie } = props;
  return (
    <div>
      <div>
        <b>{serie.name}</b><br></br> 
        <ul>            
            <li>
                <b><span>Descripción</span></b><br></br>
                {serie.description}
            </li>
            
            <li>
                <b><span>Año de lanzamiento</span></b><br></br>
                {serie.year}
            </li>
         
            <li>
                <b><span>Temporadas</span></b><br></br>
                {serie.seasons}
            </li>

            <li>
                <b><span>Imagen</span></b><br></br>
                <a href={serie.url}>{serie.url}</a>
            </li>    

        </ul>
        
      </div>
    </div>
  );
};



export default Serie;