import { StoryAction, StoryActionEnum } from '../storyReducer/types';
import { Dispatch } from 'redux';
import { getStoriesIds, getStory } from '../../api/api';
import { StoryType } from '../../types/types';

export const fetchStories = () => {
  return async (dispatch: Dispatch<StoryAction>) => {
    try {
      dispatch({ type: StoryActionEnum.FETCHING_STORIES });
      const data = await getStoriesIds();

      const promises = data
        .slice(0, 30)
        .map((storyId: number) => getStory(storyId));

      const result: StoryType[] = await Promise.all(promises);
      dispatch({type: StoryActionEnum.FETCH_STORIES_SUCCESS, payload: result});

    } catch (e) {
      dispatch({
        type: StoryActionEnum.FETCH_STORIES_ERROR,
        payload: 'Ошибка загрузки новостей'
      })
    }
  }
};