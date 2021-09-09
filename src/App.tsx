import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import AppRouter from './Component/AppRouter';
import { Layout } from 'antd';

export const App = () => {
  return (
    <Layout >
      <AppRouter />
    </Layout>
  )
};
