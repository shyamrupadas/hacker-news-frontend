import React, { useEffect } from 'react';
import { RootComment } from './RootComment';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchStory } from '../store/action-creators/story';

export const StoryInfo = ({match}: any) => {
  const storyId: number | null = +match.params.id;
  const {story, error, loading} = useTypedSelector(state => state.storyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStory(storyId));
  }, [storyId]);

  if (loading) return <h1>Загрузка</h1>
  if (error) return <h1>{error}</h1>

  return (
    <>
      <h1>{story.title}</h1>
      <a href={story.url}>
        Ссылка
      </a>
      <p>
        By: {story.by}
      </p>
      <p>
        Score: {story.score}
      </p>
      <p>
        Comments:
      </p>
      {story.kids?.map((kid: number) => <RootComment key={kid} kid={kid} />
      )}
    </>
  )
}