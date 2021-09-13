import React from 'react';
import { StoryType } from '../../types/types';
import { NavLink } from 'react-router-dom';
import { StoryAttributes } from '../UI/StoryAttributes';

type StoryPropsType = {
  story: StoryType
  index: number
}

export const Story: React.FC<StoryPropsType> = ({ story, index }) => {
  const linkToStoryInfo = `/story/${story.id}`

  return story && story.url && story.time ? (
    <>
      <h4>
        <NavLink to={linkToStoryInfo}>
          {index + 1}. {story.title}
        </NavLink>
      </h4>
      <StoryAttributes story={story} linkToStoryInfo={linkToStoryInfo} />
    </>
  ) : null;
};