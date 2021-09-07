import React, { useEffect, useState } from 'react';
import { RootComment } from './RootComment';
import { getStory } from '../API/api';
import { StoryType } from '../types/types';

export const StoryInfo = ({match}: any) => {
  const [story, setStory] = useState<StoryType>({});
  const storyId: number | null = +match.params.id;

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, [storyId]);

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