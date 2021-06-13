import React from 'react';
import { Anchor } from '@mantine/core';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import palette from '../../lib/styles/palette';

const File = ({ filename, filepath }) => {
  return (
    <Anchor style={{ color: palette.blue7 }} href={filepath} size="lg">
      {filename}
      <HiOutlineDocumentDownload />
    </Anchor>
  );
};
export default File;
