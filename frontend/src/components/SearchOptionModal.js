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
  position: fixed;
  top: 50%;
  right: 43%;
`;

const CloseWrap = styled.div`
  position: fixed;
  top: 50%;
  right: 32%;
`;

const StandardWrap = styled.div`
  width: 50px;
  position: fixed;
  top: 18%;
  right: 43%;
`;

const AdvancedWrap = styled.div`
  width: 50px;
  position: fixed;
  top: 27%;
  right: 43%;
`;

const TextWrap = styled.div`
  position: fixed;
  width: 340px;
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
              <TextWrap top="18.5%" right="28.5%" bottom="19px">
                기본검색
              </TextWrap>
              <StandardWrap>
                <Input float="left" color="blue" width="140px" size="10px" />
              </StandardWrap>
              <TextWrap top="27%" right="28.5%" bottom="137px">
                고급검색
              </TextWrap>
              <AdvancedWrap>
                <Input float="left" color="blue" width="140px" size="10px" />
                <br /> <br />
                <Input float="left" color="blue" width="140px" size="10px" />
                <br /> <br />
                <Input float="left" color="blue" width="140px" size="10px" />
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
