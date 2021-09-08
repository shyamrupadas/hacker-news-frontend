import { StoryType } from '../../types/types';

export type storyState = {
  stories: StoryType[]
  loading: boolean
  error: null | string
};

export enum StoryActionEnum {
  FETCHING_STORIES = 'FETCHING_STORIES',
  FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS',
  FETCH_STORIES_ERROR = 'FETCH_STORIES_ERROR'
}

type FetchingStoriesAction = {
  type: StoryActionEnum.FETCHING_STORIES
};

type FetchStoriesSuccessAction = {
  type: StoryActionEnum.FETCH_STORIES_SUCCESS
  payload: StoryType[]
};

type FetchStoriesErrorAction = {
  type: StoryActionEnum.FETCH_STORIES_ERROR
  payload: string
};

export type StoryAction =
  FetchingStoriesAction | FetchStoriesSuccessAction | FetchStoriesErrorAction;