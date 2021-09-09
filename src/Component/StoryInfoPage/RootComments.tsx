import React, { useEffect, useState } from 'react';
import { getComment } from '../../api/api';
import { CommentType } from '../../types/types';
import { Comment } from './Comment';
import { formatDistanceToNow } from 'date-fns';

type CommentProps = {
  kid: number
}

export const RootComments: React.FC<CommentProps> = ({kid}) => {

  const [comment, setComment] = useState<CommentType>({});
  const [showComment, setShowComment] = useState<boolean>(false)

  useEffect(() => {
    getComment(kid).then(data => data && setComment(data));
  }, [kid]);

  return comment.time ? <div className='Comment'>
    <p>
      {comment.by} | {formatDistanceToNow(new Date(comment.time * 1000))} ago
      {comment.kids?.length && ` | ${comment.kids?.length} comments`}
    </p>
    {comment.text && <p onClick={() => setShowComment(!showComment)} dangerouslySetInnerHTML={{ __html: comment.text }} />}

    {showComment && comment.kids && comment.kids.map((kid: number) =><Comment key={comment.id} kid={kid}/>)}
  </div>
    : null;
}