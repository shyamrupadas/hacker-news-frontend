import React from 'react';
import { StoryType } from '../../types/types';
import { NavLink } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns'

type StoryPropsType = {
  story: StoryType
  index: number
}

export const Story: React.FC<StoryPropsType> = ({ story, index }) => {
  const linkToStoryInfo = `/story/${story.id}`

  return story && story.url && story.time ? (
    <>
      <h4><NavLink to={linkToStoryInfo}>{index + 1}. {story.title}</NavLink></h4>
      <p>By: {story.by} | Score: {story.score} | {formatDistanceToNow(new Date(story.time * 1000))} ago
        {story.kids?.length &&
        <NavLink to={linkToStoryInfo}>{` | ${story.kids.length} comments`}</NavLink>
        }</p>
    </>
  ) : null;
};