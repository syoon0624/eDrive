import React from 'react';
import Document from './document';

const Documents = ({ datas }) => {
  console.log(datas);
  return (
    <>
      {datas.map(data => {
        const {
          content,
          created_date: createdDate,
          file_path: filePath,
          filename,
          writer,
          images,
        } = data;
        console.log(data);
        return (
          <Document
            content={content.raw}
            createdDate={createdDate.raw}
            filePath={filePath.raw}
            filename={filename.raw}
            writer={writer.raw}
            images={images.raw}
          />
        );
      })}
    </>
  );
};

export default Documents;
