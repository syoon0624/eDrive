import React from 'react';
import { Container, Text } from '@mantine/core';
import File from './File';
import Thumbnails from './Thumbnail';

const Document = () => {
  // 파일이름
  // 본문 글 미리보기(짧게 ...으로짤림)
  // 문서 내 이미지
  return (
    <Container
      style={{
        padding: '2rem 4rem',
        margin: '2rem 4rem',
        border: '1px solid black',
      }}
    >
      <File filename="Sample Document.docx" />
      <Text color="green">경로: /샘플부서/샘플폴더/Sample Document.docx</Text>
      <Text>
        {`네드 로렘(Ned Rorem 1923- )은 현존하는 미국의 대표적인 현대 작곡가이다.
        무엇 가곡 장르를 섭렵한 첫 번째 미국 작곡가로 많은 사람들에
        의해 미국 가곡 작곡가들의 선두에 있다고 여기질 만큼 뛰어난 가곡을 많이
        작곡한 현대 미...`}
      </Text>
      <Thumbnails />
    </Container>
  );
};
export default Document;
