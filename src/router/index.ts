import React from 'react';
import { StoriesListPage } from '../Component/StoriesListPage/StoriesListPage';
import { StoryInfoPage } from '../Component/StoryInfoPage/StoryInfoPage';

export type Route = {
  path: string
  component: React.ComponentType
  exact?: boolean
}

export const routes: Route[] = [
  {path: '/', exact: true, component: StoriesListPage},
  {path: '/story/:id', exact: false, component: StoryInfoPage}
];
