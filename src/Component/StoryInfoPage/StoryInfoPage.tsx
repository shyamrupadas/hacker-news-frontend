import React, { useEffect } from 'react';
import { RootComments } from './RootComments';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchStory, updateStory } from '../../store/action-creators/storyAC';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { useRefreshPage } from '../../hooks/useRefreshPage';

export const StoryInfoPage = ({ match }: any) => {
  const storyId: number | null = +match.params.id;
  const { story, error, loading } = useTypedSelector(state => state.storyReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStory(storyId));
  }, [storyId]);

  useRefreshPage(() => updateStory(storyId));

  if (loading) return <h1>Загрузка</h1>
  if (error) return <h1>{error}</h1>

  return (
    <div className='container'>
      <NavLink to='/'>К списку новостей</NavLink>
      <h1>{story.title}</h1>
      <Button>Обновить</Button>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={story.url} target={'_blank'}>
        Читать в источнике
      </a>
      <p>By: {story.by} | Score: {story.score} | Data: {story.time}
        {story.kids?.length && ` | ${story.kids?.length} comments`}
      </p>
      {story.kids?.map((kid: number) => <RootComments key={kid} kid={kid} />)}
    </div>
  )
};