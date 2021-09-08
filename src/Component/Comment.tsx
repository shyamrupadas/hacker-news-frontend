import '../index.css'
import React, { useEffect, useState } from 'react';
import { getComment } from '../api/api';
import { CommentType } from '../types/types';

type CommentProps = {
  kid: number
}

export const Comment: React.FC<CommentProps> = ({kid}) => {

  const [comment, setComment] = useState<CommentType>({});
  const [showComment, setShowComment] = useState<boolean>(false)

  useEffect(() => {
    getComment(kid).then(data => data && setComment(data));
  }, [kid]);


  return <div className='Comment'>
    <div className='pstyle'>
      {comment.by} | {comment.time}
      {comment.kids?.length && ` | ${comment.kids?.length} comments`}
    </div>
    {comment.text && <p onClick={() => setShowComment(!showComment)} dangerouslySetInnerHTML={{ __html: comment.text }} />}

    {showComment && comment.kids && comment.kids.map((kid: number) =><Comment key={comment.id} kid={kid}/>)}
  </div>
}