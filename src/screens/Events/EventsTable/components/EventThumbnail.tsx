import React from 'react';

export function EventThumbnail({ thumbnail }: { thumbnail: string }) {
  return (
    <div css={{ width: 82, height: 52 }}>
      <img
        src={thumbnail}
        css={{ maxWidth: '100%', height: 'auto', borderRadius: 4 }}
        alt="Event thumbnail"
      />
    </div>
  );
}
