import React from 'react';
import { Comment } from './Comment';

type StoryInfoProps = {
  kids: Array<number> | undefined
  url: string | undefined
}

export const StoryInfo: React.FC<StoryInfoProps> = ({ kids, url }) => {

  return <>
    <a href={url}>
      Ссылка
    </a>
    <p>
      Comments:
    </p>
    {kids?.map(kid => <Comment key={kid} kid={kid}/>
    )}
  </>

}