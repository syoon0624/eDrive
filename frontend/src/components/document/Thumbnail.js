import { Image, Text } from '@mantine/core';
import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
`;
const Thumbnails = ({ srcs }) => {
  return (
    <>
      <Text style={{ marginTop: '1rem' }}>문서 내 이미지</Text>
      <ImageWrapper>
        {srcs.map(src => (
          <Image
            width={200}
            height={250}
            radius="md"
            src={src}
            withPlaceholder
          />
        ))}
      </ImageWrapper>
    </>
  );
};
export default Thumbnails;
