import { Button } from 'antd';
import { fetchStories } from '../../../store/action-creators/storyAC';
import React from 'react';
import { Dispatch } from 'redux';
import s from './RefreshButton.module.css'

type RefreshButtonType = {
  loading: boolean
  dispatch: Dispatch<any>
  mb?: true | undefined
};

export const RefreshButton: React.FC<RefreshButtonType> = ({ loading, dispatch, mb }) => {
  return (
    <Button
      className={mb && s.mainButton}
      loading={loading}
      size='small'
      onClick={() => dispatch(fetchStories())}>
      Refresh
    </Button>
  )
}