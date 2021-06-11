import React, { useRef, useState } from 'react';
import { Card, TextInput } from '@mantine/core';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from './common/Button';

const Background = styled.div``;

const ModalWrapper = styled.div`
  width: 400px;
  height: 300px;
`;

const ModalContent = styled.div`
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  align-content: left;
`;

const SearchWrap = styled.div`
  position: absolute;
  top: 80%;
  left: 20%;
`;

const CloseWrap = styled.div`
  position: absolute;
  top: 80%;
  right: 20%;
`;

const StandardWrap = styled.div`
  position: absolute;
  width: 250px;
  top: 15px;
  left: 30%;
`;

const AdvancedWrap = styled.div`
  width: 250px;
  position: absolute;
  top: 75px;
  left: 30%;
`;

const TextWrap = styled.div`
  position: absolute;
  width: 360px;
  top: ${props => props.top};
  right: ${props => props.right};
  border-bottom: 2px solid #dee2e6;
  padding-left: 20px;
  padding-bottom: ${props => props.bottom};
`;

const Modal = ({ showModal, setShowModal }) => {
  const [query, setQuery] = useState('');
  const [keywordQuery, setKeywordQuery] = useState('');
  const [writerQuery, setWriterQuery] = useState('');
  const [dateQuery, setDateQuery] = useState('');
  const history = useHistory();
  const modalRef = useRef();
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal}>
          <Card shadow="lg">
            <ModalWrapper>
              <ModalContent>
                <TextWrap top="6%" right="10%" bottom="4%" height="40px">
                  기본검색
                </TextWrap>
                <StandardWrap>
                  <TextInput
                    inputStyle={{
                      marginBottom: 18,
                      fontSize: 15,
                    }}
                    placeholder="내용을 입력해 주세요."
                    type="text"
                    value={decodeURIComponent(query)}
                    onChange={e => setQuery(e.target.value)}
                    onKeyPress={e => {
                      if (e.key === 'Enter') {
                        if (query === '') {
                          alert('검색어를 입력 해 주세요.');
                          return;
                        }
                        const params = new URLSearchParams({ query });
                        history.push(
                          `search?${decodeURIComponent(params.toString())}`
                        );
                      }
                    }}
                  />
                </StandardWrap>
                <TextWrap top="24%" right="10%" bottom="31%">
                  고급검색
                </TextWrap>
                <AdvancedWrap>
                  <TextInput
                    inputStyle={{
                      marginBottom: 18,
                      fontSize: 15,
                    }}
                    placeholder="단어/문장 검색"
                    type="text"
                    value={decodeURIComponent(keywordQuery)}
                    onChange={e => setKeywordQuery(e.target.value)}
                  />
                  <TextInput
                    inputStyle={{
                      marginBottom: 18,
                      fontSize: 15,
                    }}
                    placeholder="작성자"
                    type="text"
                    value={decodeURIComponent(writerQuery)}
                    onChange={e => setWriterQuery(e.target.value)}
                  />
                  <TextInput
                    inputStyle={{
                      marginBottom: 18,
                      fontSize: 15,
                    }}
                    placeholder="생성 날짜"
                    type="text"
                    value={decodeURIComponent(dateQuery)}
                    onChange={e => setDateQuery(e.target.value)}
                  />
                </AdvancedWrap>
              </ModalContent>
              <CloseWrap onClick={() => setShowModal(prev => !prev)}>
                <Button width="100px" color="blue">
                  닫기
                </Button>
              </CloseWrap>
              <SearchWrap>
                <Button width="100px" color="gray">
                  검색
                </Button>
              </SearchWrap>
            </ModalWrapper>
          </Card>
        </Background>
      ) : null}
    </>
  );
};
export default Modal;
