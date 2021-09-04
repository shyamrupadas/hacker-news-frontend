import React, { useEffect, useState } from 'react';
import { getStory } from '../API/API';
import { StoryType } from '../types/types';

type StoryPropsType = {
  storyId: number
}

export const Story: React.FC<StoryPropsType> = ({storyId}) => {
  const [story, setStory] = useState<StoryType>({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return <div>I'm story id - {story.title}</div>
}