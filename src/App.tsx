import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';

function App() {
  const options = [
    { path: '/', label: 'Home', page: <Home /> },
    { path: '/home', label: 'Home', page: <Home /> },
  ];

  return (
    <React.Suspense>
      <Routes>
        {options.map((page) => (
          <Route key={page.label} path={page.path} element={page.page}></Route>
        ))}
        <Route path="*" element={<Navigate replace to=""></Navigate>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
