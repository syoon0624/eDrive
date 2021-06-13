import { Card, Center, Divider, Table, Text } from '@mantine/core';
import React from 'react';

function Detail({ filename, writer, filePath, createdDate }) {
  const rows = (
    <>
      <tr>
        <td>
          <Text style={{ width: 50 }} weight={700}>
            문서명
          </Text>
        </td>
        <td>
          <Text>{filename}</Text>
        </td>
      </tr>
      <tr>
        <td>
          <Text weight={700}>작성자</Text>
        </td>
        <td>
          <Text>{writer}</Text>
        </td>
      </tr>
      <tr>
        <td>
          <Text weight={700}>파일 경로</Text>
        </td>
        <td>
          <Text>{filePath}</Text>
        </td>
      </tr>
      <tr>
        <td>
          <Text weight={700}>파일 생성일</Text>
        </td>
        <td>
          <Text>{createdDate}</Text>
        </td>
      </tr>
    </>
  );
  return (
    <Card>
      <Center>
        <Text weight={700}>파일 정보</Text>
      </Center>
      <Divider />
      <Table striped>
        <thead>
          <tbody>{rows}</tbody>
        </thead>
      </Table>
    </Card>
  );
}

export default Detail;
