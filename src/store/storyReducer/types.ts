import { StoryType } from '../../types/types';

export type storyState = {
  stories: StoryType[]
  loading: boolean
  error: null | string
};

type testAction = {
  type: 'TEST'
    payload: any
};

export type storyAction =
  testAction;