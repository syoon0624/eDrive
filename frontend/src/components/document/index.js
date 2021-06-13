/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Popover, Text } from '@mantine/core';
import { FaSearchPlus } from 'react-icons/fa';
import File from './File';
import Thumbnails from './Thumbnail';
import Detail from '../Detail';

const Document = ({
  content,
  createdDate,
  filePath,
  filename,
  writer,
  images,
}) => {
  const srcs = images.map(image => JSON.parse(image).image_path);
  const limit = 250;
  const toggleEllipsis = (str, _limit) => ({
    string: str.slice(0, _limit),
  });
  const [opened, setOpened] = useState(false);

  return (
    <Container
      style={{
        padding: '2rem 2rem',
        margin: '0 4rem',
      }}
    >
      <div style={{ display: 'flex', margin: '0.5rem 0' }}>
        <File filename={filename} filepath={filePath} />
        <Popover
          opened={opened}
          onClose={() => setOpened(false)}
          target={
            <FaSearchPlus
              onMouseEnter={() => setOpened(true)}
              onMouseLeave={() => setOpened(false)}
              style={{
                marginTop: 3,
                marginLeft: 3,
                color: '#868e96',
                border: 'none',
                outline: 'none',
              }}
            />
          }
          position="bottom-start"
          gutter={50}
          bodyStyle={{ pointerEvents: 'none' }}
        >
          <Detail
            filename={filename}
            filePath={filePath}
            writer={writer}
            createdDate={createdDate}
          />
        </Popover>
      </div>
      <Text color="green">경로: {filePath}</Text>
      <Text>{toggleEllipsis(content, limit).string}...</Text>
      <Thumbnails srcs={srcs} />
    </Container>
  );
};

export default Document;
