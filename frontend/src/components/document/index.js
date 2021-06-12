/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Text } from '@mantine/core';
import File from './File';
import Thumbnails from './Thumbnail';

const Document = ({
  content,
  createdDate,
  filePath,
  filename,
  writer,
  images,
}) => {
  const srcs = images.map(image => JSON.parse(image).image_path);
  console.log(content);
  const limit = 250;
  const toggleEllipsis = (str, _limit) => ({
    string: str.slice(0, _limit),
  });

  return (
    <Container
      style={{
        padding: '2rem 2rem',
        margin: '2rem 4rem',
        border: '1px solid black',
      }}
    >
      <File filename={filename} filepath={filePath} />
      <Text color="green">경로: {filePath}</Text>
      <Text>{toggleEllipsis(content, limit).string}...</Text>
      <Thumbnails
        srcs={srcs}
        // srcs={[
        //   'https://yoonsbucket.s3.amazonaws.com/book_report_1.png',
        //   'https://yoonsbucket.s3.amazonaws.com/book_report_2.png',
        // ]}
      />
    </Container>
  );
};

export default Document;
