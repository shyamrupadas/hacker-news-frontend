import { storyAction, storyState } from './types';

const initialState: storyState = {
  stories: [],
  loading: false,
  error: null
};

export const index = (state = initialState, action: storyAction): storyState => {
  switch (action.type) {

    default:
      return state;
  }
};