import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../API/API';


export const StoryList = () => {
  const [storyIds, setStoryIds] = useState<any>([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <div>{storyIds.map((id: number) => <div key={id}>{id}</div>)}</div>
  );
}
