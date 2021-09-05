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
    <div>
      By: {comment.by} Data: {comment.time}
    </div>
    <div>{comment.text}</div>
  </>
}