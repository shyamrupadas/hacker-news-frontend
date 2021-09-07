import React from 'react';
import { StoriesList } from '../Component/StoriesList';
import { StoryInfo } from '../Component/StoryInfo';

export type Route = {
  path: string
  component: React.ComponentType
  exact?: boolean
}

export const routes: Route[] = [
  {path: '/', exact: true, component: StoriesList},
  {path: '/story/:id', exact: false, component: StoryInfo}
];
