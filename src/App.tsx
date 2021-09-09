import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import AppRouter from './Component/AppRouter';

export const App = () => {
  return (
    <div className='app'>
      <AppRouter />
    </div>
  )
};
