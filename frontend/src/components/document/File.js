import React from 'react';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import palette from '../../lib/styles/palette';

const File = ({ filename, filepath }) => {
  return (
    <a style={{ color: palette.blue6 }} href={filepath}>
      {filename}
      <HiOutlineDocumentDownload />
    </a>
  );
};
export default File;
