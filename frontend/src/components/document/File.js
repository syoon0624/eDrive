import React from 'react';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const File = ({ filename }) => {
  return (
    <Link style={{ color: palette.blue6 }} to="/">
      {filename}
    </Link>
  );
};
export default File;
