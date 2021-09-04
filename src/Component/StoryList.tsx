import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../API/API';
import { Story } from './Story';


export const StoryList = () => {
  const [storyIds, setStoryIds] = useState<Array<number>>([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return <>
    {storyIds.map((storyId: number) => <Story key={storyId} storyId={storyId} />)}
  </>
};
