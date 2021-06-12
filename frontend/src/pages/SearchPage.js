import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Main from '../components/document';

const SearchPage = () => {
  const parsedDocuments = useSelector(state => state.parsedDocuments);

  if (parsedDocuments.length === 0) {
    return (
      <>
        <Header />
        <div>검색 결과가 없습니다.</div>
      </>
    );
  }
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default SearchPage;
