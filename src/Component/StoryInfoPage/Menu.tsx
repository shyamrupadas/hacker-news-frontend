import React from 'react';
import { NavLink } from 'react-router-dom';
import { Divider } from 'antd';
import { useDispatch } from 'react-redux';
import { StoryType } from '../../types/types';
import { RefreshButton } from '../UI/button/RefreshButton';

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
      <RefreshButton loading={loading} dispatch={dispatch} />
    </>
  )
}