import { Image, Text } from '@mantine/core';
import React from 'react';

const Thumbnails = ({ srcs }) => {
  return (
    <>
      <Text style={{ marginTop: '1rem' }}>문서 내 이미지</Text>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {srcs.map(src => (
          <Image
            width={200}
            height={250}
            radius="md"
            src={src}
            withPlaceholder
          />
        ))}
      </div>
    </>
  );
};
export default Thumbnails;
