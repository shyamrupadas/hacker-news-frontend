import React, { useEffect, useState } from 'react';
import { getComment } from '../API/API';
import { CommentType } from '../types/types';

type CommentProps = {
  kid: number
}

export const Comment: React.FC<CommentProps> = ({kid}) => {

  const [comment, setComment] = useState<CommentType>({});

  useEffect(() => {
    getComment(kid).then(data => data && setComment(data));
  }, [kid]);


  return <>
    <p>{comment.text}</p>
    <p>
      By: {comment.by} | Data: {comment.time}
    </p>
    {comment.kids && comment.kids.map((kid: number) =><div key={comment.id}><a href='#'>Дочерний коммент {kid}</a></div>)}
  </>
}