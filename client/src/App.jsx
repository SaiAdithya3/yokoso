import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App