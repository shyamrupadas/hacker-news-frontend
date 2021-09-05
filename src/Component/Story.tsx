import React, { useEffect, useState } from 'react';
import { getStory } from '../API/API';
import { StoryType } from '../types/types';
import { NavLink } from 'react-router-dom';

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
      <h4><NavLink to={`/story/${storyId}`}>{index + 1}. {story.title}</NavLink></h4>
      <p>By: {story.by} | {story.kids?.length || 0} comment | Score: {story.score} | Data: {story.time}</p>
    </>
  ) : null;
};