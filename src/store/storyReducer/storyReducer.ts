import { StoryAction, StoryActionEnum, storyState } from './types';

const initialState: storyState = {
  stories: [],
  loading: false,
  error: null
};

export const storyReducer = (state = initialState, action: StoryAction): storyState => {
  switch (action.type) {

    case StoryActionEnum.FETCHING_STORIES:
      return {...state, loading: true}

    case StoryActionEnum.FETCH_STORIES_SUCCESS:
      return {...state, loading: false, stories: action.payload}

    case StoryActionEnum.FETCH_STORIES_ERROR:
      return {...state, loading: false, error: action.payload}

    default:
      return state;
  }
};