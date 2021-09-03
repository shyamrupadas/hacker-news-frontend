import React, { useEffect, useState } from 'react';
import { getStory } from '../API/API';

type StoryType = {
  storyId: number
}

export const Story: React.FC<StoryType> = ({storyId}) => {
  const [story, setStory] = useState<any>({});

  useEffect(() => {
    // @ts-ignore
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return <div>I'm story id - {story.title}</div>
}