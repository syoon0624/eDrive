import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import Input from './common/Input';

const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  width: 400px;
  height: 350px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
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
  width: 50px;
  top: 15px;
  left: 30%;
`;

const AdvancedWrap = styled.div`
  width: 50px;
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
          <ModalWrapper>
            <ModalContent>
              <TextWrap top="15px" right="20px" bottom="19px">
                기본검색
              </TextWrap>
              <StandardWrap>
                <Input float="left" color="blue" width="140px" size="10px" />
              </StandardWrap>
              <TextWrap top="75px" right="20px" bottom="137px">
                고급검색
              </TextWrap>
              <AdvancedWrap>
                <Input
                  float="left"
                  color="blue"
                  width="140px"
                  size="10px"
                  placeholder="단어/ 문장검색"
                />
                <br /> <br />
                <Input
                  float="left"
                  color="blue"
                  width="140px"
                  size="10px"
                  placeholder="최초 작성자"
                />
                <br /> <br />
                <Input
                  float="left"
                  color="blue"
                  width="140px"
                  size="10px"
                  placeholder="최종 수정자"
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
        </Background>
      ) : null}
    </>
  );
};
export default Modal;