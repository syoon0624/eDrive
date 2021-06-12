import React, { useState, useEffect } from 'react';
import { Container, Text } from '@mantine/core';
import File from './File';
import Thumbnails from './Thumbnail';

const Document = () => {
  const [files, setFiles] = useState([]); // 파일 정보를 담은 객체
  const [page, setPage] = useState(0); // 쿼리로 던져야 하는 페이지 넘버
  const limit = 250;
  const toggleEllipsis = (str, _limit) => {
    return {
      string: str.slice(0, _limit),
    };
  };
  const getFile = async () => {
    const temptext = `미친듯이 심플. 제목만 보더라도 이 책은 어떤 내용을 다루며, 글쓴이는 어떤 말을 하고 싶은지 느낄 수 있는 문구이다. 이 책에서도 언급하였지만, 나는 모든 사람, 더 나아가 모든 생명체들은 더욱 단순하고 간단한 프로세스를 본능적으로 추구한다는 것에 공감하고 심지어 체감한다. 이 수업을 듣기 전 글쓰기 라는 교양 수업을 들었을 때도 그 때 당시 교수님께서 하신 말씀이 떠오른다. 
이 책의 저자는 약 17년간 스티브 잡스와 함께 광고와 마케팅을 진행한 크리에이티브 디렉터이다. 그리고 이 자는 잡스와 함께 하며 단순함이란 무엇인지, 애플이 단순함을 추구하는 것은 어떤 것인지에 대한 내용을 인텔, 델과 같은 소위 대기업 이라 부르는 기업들과 비교 또는 비유하며 소개하고, 또한 그렇기 때문에 왜 단순함이 중요하며, 어떻게 써야하는지를 서술하였다.
애플이 추구하는 단순함을 활용하기 위한 여러가지 요소 중, 나는 심플 스틱 이라는 문구가 깊이 감명받았었다.이라는 것은 정의하자면 애플의 모든 것에 지독하리만치 단순함을 적용하려 했던 잡스의 경영 원칙을 상징하는 말이라고 할 수 있다. 애플 또는 잡스와 함께 일했던 사람들은 잡스가 휘두르는 심플 스틱이라는 것에 위협을 받기도 하였고, 이것을 통해 많은 영감을 받기도 하였다. 심플 스틱이라는 심볼은 회사의 구조를 간단하게 만들었으며, 고객에게 제품을 있는 그대로 사용하게 해줄 수 있는 원동력이 되며, 더욱 창의적인 생산활동을 할 수 있게 해준다. 회사에 빠져서는 안될 요소중 하나인 회의를 예로 들면 애플은 심플스틱을 활용하여 회의에 불필요한 인원이 들어오는 일이 없도록 간소화시키며, 회의시간은 되도록 짧게 하여 핵심만 다룰 수 있도록 하였다. 이렇게 함으로써 더욱 확실하고 효과적인 회의 시스템을 갖출 수 있게 된다. 또한 애플이 제공하는 혁신적인 경험들(아이폰, 아이맥, 아이패드 등), 경영 철학, 마케팅, 다른 기업들과의 차별화 되는 점에 대한 이유의 중심에는 언제나 심플스틱이 자리하고 있었다.
물론 이렇게 애플처럼 단순함을 추구함으로써 얻을 수 있는 성공의 확률은 극히 낮다고 생각한다. 사람들은 단순함을 추구하지만, 단순함을 추구하기 위해 복잡한 과정을 생각해내고 이 복잡한 과정들 마저 단순하고 간결화해야 한다. 경영, 생산, 마케팅등 회사가 돌아가는데 필요한 모든것이 단순함과 조화를 넘어 융화가 되어야만 극강의 효과를 볼 수 있을 것이다. 만약 이러한 단순함을 잘못 사용하여 제품을 출시하게 된다면, 사용자들은 이 제품을 사용하는데 복잡함이라는 번거로운 수고를 해야 할것이다.`;
    setPage(page + 1);
    const templist = [];
    templist.push(
      <Container
        style={{
          padding: '2rem 2rem',
          margin: '2rem 4rem',
          border: '1px solid black',
        }}
      >
        <File
          filename="book_report"
          filepath="https://yoonsbucket.s3.amazonaws.com/book_report.docx"
        />
        <Text color="green">
          경로: https://yoonsbucket.s3.amazonaws.com/book_report.docx
        </Text>
        <Text>{toggleEllipsis(temptext, limit).string}...</Text>
        <Thumbnails
          srcs={[
            'https://yoonsbucket.s3.amazonaws.com/book_report_1.png',
            'https://yoonsbucket.s3.amazonaws.com/book_report_2.png',
          ]}
        />
      </Container>
    );
    setFiles([...files, ...templist]);
  };
  // 파일이름
  // 본문 글 미리보기(짧게 ...으로짤림)
  // 문서 내 이미지
  useEffect(() => {
    getFile();
  }, []);

  return <>{files}</>;
};
export default Document;
