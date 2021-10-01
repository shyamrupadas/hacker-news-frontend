import { Button } from 'antd';
import React from 'react';
import { Dispatch } from 'redux';
import s from './RefreshButton.module.css'

type RefreshButtonType = {
  loading: boolean
  dispatch: Dispatch<any>
  mb?: true | undefined
  refreshCallback: (id?: number) => void
};

export const RefreshButton: React.FC<RefreshButtonType> = ({ loading, dispatch, mb, refreshCallback }) => {
  return (
    <Button
      className={mb && s.mainButton}
      loading={loading}
      size='small'
      onClick={() => dispatch(refreshCallback())}>
      Refresh
    </Button>
  )
}