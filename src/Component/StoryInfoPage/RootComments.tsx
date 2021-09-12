import React, { useEffect, useState } from 'react';
import { getComment } from '../../api/api';
import { CommentType } from '../../types/types';
import { Comment } from './Comment';
import { formatDistanceToNow } from 'date-fns';
import { Divider } from 'antd';

type CommentProps = {
  kid: number
}

export const RootComments: React.FC<CommentProps> = ({ kid }) => {

  const [comment, setComment] = useState<CommentType>({});
  const [showComment, setShowComment] = useState<boolean>(false)

  useEffect(() => {
    getComment(kid).then(data => data && setComment(data));
  }, [kid]);

  if (comment.deleted) return null;

  return comment.time ? <div className='Comment'>
      <div className='commentHeader'>
      <span>
        {comment.by}
      </span>
        <Divider type='vertical' style={{ borderColor: '#828282' }} />
        <span>
        {formatDistanceToNow(new Date(comment.time * 1000))} ago
      </span>
        <span onClick={() => setShowComment(!showComment)}>
        {comment.kids?.length && !showComment &&
        <span>
          <Divider type='vertical' style={{ borderColor: '#828282' }} />
          <span className='pointer'>
            [{comment.kids?.length} more]
          </span>
        </span>
        }
          {comment.kids?.length && showComment &&
          <span>
          <Divider type='vertical' style={{ borderColor: '#828282' }} />
            <span className='pointer'>
              [-]
            </span>
        </span>
          }
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