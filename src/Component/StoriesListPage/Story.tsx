import React from 'react';
import { StoryType } from '../../types/types';
import { NavLink } from 'react-router-dom';

type StoryPropsType = {
  story: StoryType
  index: number
}

export const Story: React.FC<StoryPropsType> = ({ story, index }) => {

  return story && story.url ? (
    <>
      <h4><NavLink to={`/story/${story.id}`}>{index + 1}. {story.title}</NavLink></h4>
      <p>By: {story.by} | Score: {story.score} | Data: {story.time}
        {story.kids?.length && ` | ${story.kids?.length} comments`}</p>
    </>
  ) : null;
};