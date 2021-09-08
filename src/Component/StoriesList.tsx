import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../API/api';
import { Story } from './Story';
import { useTypedSelector } from '../hooks/useTypedSelector';


export const StoriesList = () => {
  const {stories} = useTypedSelector(state => state.storyReducer);
  const [storyIds, setStoryIds] = useState<Array<number>>([]);

  console.log(stories)
  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return <>
    <h1>Hacker News</h1>
    {storyIds.map((storyId: number, index: number) => <Story key={storyId} storyId={storyId} index={index} />)}
  </>
};
