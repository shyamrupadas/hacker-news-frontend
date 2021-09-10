import React from 'react';
import { StoryType } from '../../types/types';
import { NavLink } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns'
import { Divider } from 'antd';

type StoryPropsType = {
  story: StoryType
  index: number
}

export const Story: React.FC<StoryPropsType> = ({ story, index }) => {
  const linkToStoryInfo = `/story/${story.id}`

  return story && story.url && story.time ? (
    <>
      <h4><NavLink to={linkToStoryInfo}>{index + 1}. {story.title}</NavLink></h4>
      <p className='commentHeader'>
        {story.score} points by {story.by}
        <Divider type='vertical' style={{ borderColor: '#828282' }} />
        {formatDistanceToNow(new Date(story.time * 1000))} ago
        {story.kids?.length &&
        <span>
          <Divider type='vertical' style={{ borderColor: '#828282' }} />
          <NavLink to={linkToStoryInfo}>
            {story.kids.length} comments
          </NavLink>
        </span>}
      </p>
    </>
  ) : null;
};