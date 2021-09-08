import { StoryAction, StoryActionEnum, storyState } from './types';

const initialState: storyState = {
  stories: [],
  loading: false,
  error: null
};

export const index = (state = initialState, action: StoryAction): storyState => {
  switch (action.type) {

    case StoryActionEnum.SET_STORIES:
      return {...state, stories: action.payload}

    default:
      return state;
  }
};