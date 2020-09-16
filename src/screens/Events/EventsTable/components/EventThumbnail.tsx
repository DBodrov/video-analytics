import React from 'react';

export function EventThumbnail({ thumbnail }: { thumbnail: string }) {
  return (
    <div css={{ width: 82, height: 52 }}>
      <img
        src={thumbnail}
        css={{ width: '100%', height: '100%', borderRadius: 4 }}
        alt="Event thumbnail"
      />
    </div>
  );
}
