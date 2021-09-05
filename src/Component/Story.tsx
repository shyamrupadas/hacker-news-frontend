import React, { useEffect, useState } from 'react';
import { getStory } from '../API/API';
import { StoryType } from '../types/types';
import { StoryInfo } from './StoryInfo';

type StoryPropsType = {
  storyId: number
  index: number
}

export const Story: React.FC<StoryPropsType> = ({ storyId, index }) => {
  const [story, setStory] = useState<StoryType>({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <>
      <h4>{index}. {story.title}</h4>
      <StoryInfo
        key={story.id}
        kids={story.kids}
        url={story.url}
      />
      <p>Рейтинг: {story.score}</p>
      <p>Автор: {story.by}</p>
      <p>Дата: {story.time}</p>
    </>
  ) : null;
};