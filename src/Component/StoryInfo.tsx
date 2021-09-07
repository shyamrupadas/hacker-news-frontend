import React, { useEffect, useState } from 'react';
import { RootComment } from './RootComment';
import { RouteComponentProps } from 'react-router-dom';
import { getStory } from '../API/api';
import { StoryType } from '../types/types';

type MatchParams = {
  id: string
};


export const StoryInfo = ({match}: RouteComponentProps<MatchParams>) => {
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