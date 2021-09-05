import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { StoriesList } from './Component/StoriesList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StoryInfo } from './Component/StoryInfo';

export const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={StoriesList} />
        <Route path='/story/:id' component={StoryInfo} />
      </Switch>
    </BrowserRouter>
  );
}
