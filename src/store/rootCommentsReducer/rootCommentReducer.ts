import { RootCommentsAction, RootCommentsActionEnum, rootCommentsState } from './types';

const initialState = {
  rootComments: [],
  loading: false,
  error: null
};

export const rootCommentsReducer = (state = initialState, action: RootCommentsAction): rootCommentsState => {
  switch (action.type) {

    case RootCommentsActionEnum.FETCHING_ROOT_COMMENTS:
      return {...state, loading: true}

    case RootCommentsActionEnum.FETCH_ROOT_COMMENTS_SUCCESS:
      return {...state, loading: false, rootComments: action.payload}

    case RootCommentsActionEnum.FETCH_ROOT_COMMENTS_ERROR:
      return {...state, loading: false, error: action.payload}

    default:
      return state;
  }
};