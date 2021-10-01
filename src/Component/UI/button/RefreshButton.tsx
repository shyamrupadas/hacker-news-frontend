import { Button } from 'antd';
import { fetchStories } from '../../../redux/storySlice';
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
    // Todo прокидывать коллбэк для обновления пропсами
    <Button
      className={mb && s.mainButton}
      loading={loading}
      size='small'
      onClick={() => dispatch(fetchStories())}>
      Refresh
    </Button>
  )
}