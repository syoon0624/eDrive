import { Image, Text } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ImageContainer = styled.div`
  padding: 10px;
  border: 2px solid ${palette.gray3};
  display: inline-flex;
`;
const ImageWrapper = styled.div`
  box-shadow: 2px 1px 7px 1px rgba(0, 0, 0, 0.4);
  margin: 10px;
  border-radius: 10px;
`;
const Thumbnails = ({ srcs }) => {
  const [lists, setLists] = useState([]);
  const placeholder = () => {
    if (srcs.length < 4) {
      const list = [];
      const tempImgList = 4 - srcs.length;
      for (let i = 0; i < tempImgList; i += 1) {
        list.push(
          <ImageWrapper>
            <Image width={200} height={250} radius="md" withPlaceholder />
          </ImageWrapper>
        );
      }
      setLists(list);
    }
  };
  useEffect(() => {
    placeholder();
  }, [srcs]);
  return (
    <>
      <Text style={{ marginTop: '1rem' }} size="lg" weight={500}>
        문서 내 이미지
      </Text>
      <ImageContainer>
        {srcs.map(src => (
          <ImageWrapper>
            <Image
              width={200}
              height={250}
              radius="md"
              src={src}
              withPlaceholder
            />
          </ImageWrapper>
        ))}
        {lists}
      </ImageContainer>
    </>
  );
};

export default Thumbnails;
