import '../../index.css'
import React, { useEffect, useState } from 'react';
import { getComment } from '../../api/api';
import { CommentType } from '../../types/types';
import { formatDistanceToNow } from 'date-fns';
import { Divider } from 'antd';

type CommentProps = {
  kid: number
}

export const Comment: React.FC<CommentProps> = ({ kid }) => {

  const [comment, setComment] = useState<CommentType>({});
  const [showComment, setShowComment] = useState<boolean>(false)

  useEffect(() => {
    getComment(kid).then(data => data && setComment(data));
  }, [kid]);

  if (comment.deleted) return null;

  return comment.time ? <div className='Comment'>
      <div className='commentHeader'>
        {comment.by}
        <Divider type='vertical' style={{ borderColor: '#828282' }} />
        {formatDistanceToNow(new Date(comment.time * 1000))} ago
        <span onClick={() => setShowComment(!showComment)}>
        {comment.kids?.length && !showComment &&
        <span>
            <Divider type='vertical' style={{ borderColor: '#828282' }} />
          <span className='pointer'>
            [{comment.kids?.length} more]
          </span>
        </span>}
          {comment.kids?.length && showComment &&
          <span>
          <Divider type='vertical' style={{ borderColor: '#828282' }} />
            <span className='pointer'>
              [-]
            </span>
        </span>}
          </span>
      </div>
      {comment.text &&
      <p className={ comment.kids && 'pointer'}
         onClick={() => setShowComment(!showComment)}
         dangerouslySetInnerHTML={{ __html: comment.text }} />}
      {showComment && comment.kids && comment.kids.map((kid: number) => <Comment key={kid} kid={kid} />)}
    </div>
    : null;
}