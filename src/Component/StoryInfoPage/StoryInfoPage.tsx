import React, { useEffect } from 'react';
import { RootComments } from './RootComments';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchStory, updateStory } from '../../store/action-creators/storyAC';
import { NavLink } from 'react-router-dom';
import { Button, Divider } from 'antd';
import { useRefreshPage } from '../../hooks/useRefreshPage';
import { formatDistanceToNow } from 'date-fns';

export const StoryInfoPage = ({ match }: any) => {
  const storyId: number | null = +match.params.id;
  const { story, error, loading } = useTypedSelector(state => state.storyReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStory(storyId));
  }, [storyId]);

  useRefreshPage(() => updateStory(storyId));

  if (error) return <h1>{error}</h1>

  return story.time ? (
    <div className='container'>
      <NavLink to='/'>Back to news list</NavLink>
      <Divider type='vertical' style={{ borderColor: '#828282' }} />
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={story.url} target={'_blank'}>
        Read the original
      </a>
      <Divider type='vertical' style={{ borderColor: '#828282' }} />
      <Button loading={loading} size='small' onClick={() => dispatch(fetchStory(storyId))}>Refresh</Button>

      <h1>{story.title}</h1>
      <p>

      </p>

      <p className='commentHeader'>
        {story.score} points by {story.by}
        <Divider type='vertical' style={{ borderColor: '#828282' }} />
        {formatDistanceToNow(new Date(story.time * 1000))} ago
        {story.kids?.length &&
       <span>
         <Divider type='vertical' style={{ borderColor: '#828282' }} />
        {story.kids?.length} comments
         </span>}
      </p>
      {story.kids?.map((kid: number) => <RootComments key={kid} kid={kid} />)}

    </div>
  ) : null;
};