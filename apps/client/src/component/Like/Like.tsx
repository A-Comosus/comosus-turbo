'use client';
import React, { useState } from 'react';

import { Button } from '@comosus/ui';

type LikeStatus = 'liked' | 'disliked' | null;

export function Like() {
  const [statusCounter, setStatusCounter] = useState({
    liked: 100,
    disliked: 25,
  });
  const [status, setStatus] = useState<LikeStatus>(null);

  const onStatusChange = (_status: LikeStatus) => {
    if (_status === 'liked')
      setStatusCounter((prev) => ({
        liked: status === _status ? prev.liked - 1 : prev.liked + 1,
        disliked: status === 'disliked' ? prev.disliked - 1 : prev.disliked,
      }));

    if (_status === 'disliked')
      setStatusCounter((prev) => ({
        liked: status === 'liked' ? prev.liked - 1 : prev.liked,
        disliked: status === _status ? prev.disliked - 1 : prev.disliked + 1,
      }));

    setStatus((prev) => (prev !== _status ? _status : null));
  };

  return (
    <div className="flex gap-4">
      <h1>{status ?? 'null'}</h1>
      <Button onClick={() => onStatusChange('liked')}>
        {`Like | ${statusCounter.liked}`}
      </Button>
      <Button onClick={() => onStatusChange('disliked')}>
        {`Dislike | ${statusCounter.disliked}`}
      </Button>
    </div>
  );
}
