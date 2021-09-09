import { CommentType } from '../../types/types';

export type rootCommentsState = {
  rootComments: CommentType[]
  loading: boolean
  error: null | string
};

export enum RootCommentsActionEnum {
  FETCHING_ROOT_COMMENTS = 'FETCHING_COMMENTS',
  FETCH_ROOT_COMMENTS_SUCCESS = 'FETCH_STORIES_COMMENTS',
  FETCH_ROOT_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR'
};

type FetchingRootCommentsAction = {
  type: RootCommentsActionEnum.FETCHING_ROOT_COMMENTS
};

type FetchRootCommentsSuccessAction = {
  type: RootCommentsActionEnum.FETCH_ROOT_COMMENTS_SUCCESS
  payload: CommentType[]
};

type FetchRootCommentsErrorAction = {
  type: RootCommentsActionEnum.FETCH_ROOT_COMMENTS_ERROR
  payload: string
};

export type RootCommentsAction =
  FetchingRootCommentsAction | FetchRootCommentsSuccessAction | FetchRootCommentsErrorAction;