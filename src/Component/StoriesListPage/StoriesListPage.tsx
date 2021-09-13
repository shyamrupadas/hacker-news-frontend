import React, { useEffect } from 'react';
import { Story } from './Story';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchStories, updateStories } from '../../store/action-creators/storyAC';
import { StoryType } from '../../types/types';
import { useRefreshPage } from '../../hooks/useRefreshPage';
import { RefreshButton } from '../UI/button/RefreshButton';

export const StoriesListPage = () => {
  const { stories, error, loading } = useTypedSelector(state => state.storyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, []);

  useRefreshPage(updateStories);

  if (error) return <h1>{error}</h1>

  return <div className='container'>
    <h1>Hacker News</h1>
    <RefreshButton loading={loading} dispatch={dispatch} mb />
    {stories.map((story: StoryType, index: number) => story &&
      <Story key={story.id} story={story} index={index} />
    )}
  </div>
};
