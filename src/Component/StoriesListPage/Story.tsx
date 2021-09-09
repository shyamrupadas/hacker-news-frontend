import React from 'react';
import { StoryType } from '../../types/types';
import { NavLink } from 'react-router-dom';

type StoryPropsType = {
  story: StoryType
  index: number
}

export const Story: React.FC<StoryPropsType> = ({ story, index }) => {

  const linkToStoryInfo = `/story/${story.id}`
  return story && story.url ? (
    <>
      <h4><NavLink to={linkToStoryInfo}>{index + 1}. {story.title}</NavLink></h4>
      <p>By: {story.by} | Score: {story.score} | Data: {story.time} |
        {story.kids?.length &&
        <NavLink to={linkToStoryInfo}>{` ${story.kids.length} comments`}</NavLink>
        }</p>
    </>
  ) : null;
};