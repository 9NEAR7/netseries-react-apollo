import React from 'react';
import CreateSerie from './CreateSerie';
import Header from './Header';
import SerieList from './SerieList';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<SerieList/>} />
          <Route
            path="/create"
            element={<CreateSerie/>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;