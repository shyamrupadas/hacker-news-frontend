import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Divider } from 'antd';
import { fetchStory } from '../../store/action-creators/storyAC';
import { useDispatch } from 'react-redux';
import { StoryType } from '../../types/types';

type MenuType = {
  story: StoryType
  storyId: number
  loading: boolean
};

export const Menu: React.FC<MenuType> = ({story, storyId, loading}) => {

  const dispatch = useDispatch();

  return (
    <>
    <NavLink to='/'>
      Back to news list
  </NavLink>
  <Divider type='vertical' style={{ borderColor: '#828282' }} />
  {/* eslint-disable-next-line react/jsx-no-target-blank */}
  <a href={story.url} target={'_blank'}>
    Read the original
  </a>
  <Divider type='vertical' style={{ borderColor: '#828282' }} />
  <Button loading={loading} size='small' onClick={() => dispatch(fetchStory(storyId))}>Refresh</Button>
    </>
  )
}