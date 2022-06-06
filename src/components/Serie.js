import React from 'react';

const Serie = (props) => {
  const { serie } = props;
  return (
    <div>
      <div>
        {serie.name} 
        {serie.description} 
        {serie.year} 
        {serie.seasons}  
        ({serie.url})
      </div>
    </div>
  );
};



export default Serie;