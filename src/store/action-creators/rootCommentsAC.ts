import { Dispatch } from 'redux';
import { getComment } from '../../api/api';
import { CommentType } from '../../types/types';
import { RootCommentsAction, RootCommentsActionEnum } from '../rootCommentsReducer/types';

export const fetchComments = (commentsIds: Array<number> | undefined) => {
  return async (dispatch: Dispatch<RootCommentsAction>) => {
    try {
      debugger;
      dispatch({ type: RootCommentsActionEnum.FETCHING_ROOT_COMMENTS });

      if (commentsIds) {
          const promises = commentsIds.map((commentId: number) => getComment(commentId));
          const result: CommentType[] = await Promise.all(promises);
          dispatch({type: RootCommentsActionEnum.FETCH_ROOT_COMMENTS_SUCCESS, payload: result});
      }
    } catch (e) {
      dispatch({
        type: RootCommentsActionEnum.FETCH_ROOT_COMMENTS_ERROR,
        payload: 'Ошибка загрузки комментариев'
      })
    }
  }
};