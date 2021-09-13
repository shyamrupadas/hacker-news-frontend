import React from 'react';
import { Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { StoryType } from '../../types/types';
import s from './StoryAttributes.module.css'

type StoryAttributesType = {
  story: StoryType
  linkToStoryInfo?: string
}

export const StoryAttributes: React.FC<StoryAttributesType> = ({ story, linkToStoryInfo }) => {
  return (
    <>
      <div className={s.mainCommentHeader}>
        {story.score} points by {story.by}
        <Divider type='vertical' style={{ borderColor: '#828282' }} />
        {story.time && formatDistanceToNow(new Date(story.time * 1000))} ago
        {story.kids?.length &&
        <span>
         <Divider type='vertical' style={{ borderColor: '#828282' }} />
          { linkToStoryInfo
            ? <NavLink to={linkToStoryInfo}>
              {story.descendants} comments
            </NavLink>
            : <>
              {story.descendants} comments
            </>
          }
         </span>}
      </div>
    </>
  )

}