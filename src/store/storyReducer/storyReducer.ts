import { StoryAction, StoryActionEnum, storyState } from './types';

const initialState: storyState = {
  stories: [],
  story: {
    by: '',
    descendants: undefined,
    id: undefined,
    kids: [],
    score: undefined,
    time: undefined,
    title: '',
    type: '',
    url: ''
  },
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

    case StoryActionEnum.FETCH_STORY_SUCCESS:
      return {...state, loading: false, story: action.payload}

    default:
      return state;
  }
};