import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


export const useRefreshPage = (callback: () => void) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshPage = setInterval(() => {
      dispatch(callback());
    },60000);
    return () => clearInterval(refreshPage);
  }, [callback, dispatch]);
};