import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../API/API';
import { Story } from './Story';


export const StoriesList = () => {
  const [storyIds, setStoryIds] = useState<Array<number>>([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return <>
    <h1>Hacker News</h1>
    {storyIds.map((storyId: number, index: number) => <Story key={storyId} storyId={storyId} index={index} />)}
  </>
};
