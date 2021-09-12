import React, { useEffect } from 'react';
import { RootComments } from './RootComments';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchStory, updateStory } from '../../store/action-creators/storyAC';
import { Divider } from 'antd';
import { useRefreshPage } from '../../hooks/useRefreshPage';
import { formatDistanceToNow } from 'date-fns';
import { Menu } from './Menu';

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
      <Menu storyId={storyId} story={story} loading={loading}  />
      <h1>{story.title}</h1>
      <div className='mainCommentHeader'>
        {story.score} points by {story.by}
        <Divider type='vertical' style={{ borderColor: '#828282' }} />
        {formatDistanceToNow(new Date(story.time * 1000))} ago
        {story.kids?.length &&
       <span>
         <Divider type='vertical' style={{ borderColor: '#828282' }} />
        {story.descendants} comments
         </span>}
      </div>
      {story.kids?.map((kid: number) =>
        <RootComments key={kid} kid={kid} />
      )}
    </div>
  ) : null;
};