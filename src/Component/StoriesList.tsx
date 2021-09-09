import React, { useEffect } from 'react';
import { Story } from './Story';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchStories } from '../store/action-creators/story';
import { StoryType } from '../types/types';


export const StoriesList = () => {
  const {stories, error, loading} = useTypedSelector(state => state.storyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories())
  }, []);

  if (loading) return <h1>Загрузка</h1>

  if (error) return <h1>{error}</h1>

  return <>

    <h1>Hacker News</h1>
    {stories.map((story: StoryType, index: number) => <Story key={story.id} story={story} index={index} />)}
  </>
};
