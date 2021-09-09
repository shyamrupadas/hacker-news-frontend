import React, { useEffect } from 'react';
import { Story } from './Story';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchStories } from '../../store/action-creators/storyAC';
import { StoryType } from '../../types/types';
import { Button } from 'antd';


export const StoriesListPage = () => {
  const {stories, error, loading} = useTypedSelector(state => state.storyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, []);

  if (loading) return <h1>Загрузка</h1>
  if (error) return <h1>{error}</h1>

  return <>
    <h1>Hacker News</h1>
    <Button onClick={() => dispatch(fetchStories())}>Обновить</Button>
    {stories.map((story: StoryType, index: number) => <Story key={story.id} story={story} index={index} />)}
  </>
};