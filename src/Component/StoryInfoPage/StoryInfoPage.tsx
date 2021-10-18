import React, { useEffect } from 'react';
import { RootComments } from './RootComments';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchStory, updateStory } from '../../redux/storySlice';
import { Menu } from './Menu';
import { StoryAttributes } from '../UI/StoryAttributes';
import { useRefreshPage } from '../../hooks/useRefreshPage';

export const StoryInfoPage = ({ match }: any) => {
  const storyId: number | null = +match.params.id;
  const { story, error, loading } = useTypedSelector(state => state.toolkit);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStory(storyId));
  }, [storyId, dispatch]);

  useRefreshPage(() => updateStory(storyId));

  if (error) return <h1>{error}</h1>

  return story.time ? (
    <div className='container'>
      <Menu storyId={storyId} story={story} loading={loading} refreshCallback={() => fetchStory(storyId)}/>
      <h1>{story.title}</h1>
      <StoryAttributes story={story} />
      {story.kids?.map((kid: number) =>
        <RootComments key={kid} kid={kid} />
      )}
    </div>
  ) : null;
};