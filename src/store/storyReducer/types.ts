import { StoryType } from '../../types/types';

export type storyState = {
  stories: StoryType[]
  loading: boolean
  error: null | string
};

export enum StoryActionEnum {
  SET_STORIES = 'SET_STORIES'
}

type SetStoriesAction = {
  type: StoryActionEnum.SET_STORIES
    payload: StoryType[]
};

export type StoryAction =
  SetStoriesAction;