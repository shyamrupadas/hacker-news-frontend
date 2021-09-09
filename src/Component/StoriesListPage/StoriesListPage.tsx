import React, { useEffect } from 'react';
import { Story } from './Story';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchStories, updateStories } from '../../store/action-creators/storyAC';
import { StoryType } from '../../types/types';
import { Button } from 'antd';
import { useRefreshPage } from '../../hooks/useRefreshPage';

export const StoriesListPage = () => {
  const {stories, error, loading} = useTypedSelector(state => state.storyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, []);

  useRefreshPage(updateStories);

  if (error) return <h1>{error}</h1>

  return <>
    <h1>Hacker News</h1>
    <Button onClick={() => dispatch(updateStories())}>Обновить</Button>
    {loading && <h1>Загрузка</h1>}
    {stories.map((story: StoryType, index: number) => <Story key={story.id} story={story} index={index} />)}
  </>
};
