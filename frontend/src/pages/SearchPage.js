import React from 'react';
import { useSelector } from 'react-redux';
import Documents from '../components/Documents';
import Header from '../components/Header';

const SearchPage = () => {
  const { documents } = useSelector(state => state.parsedDocuments);
  return (
    <>
      <Header />
      {documents.length === 0 ? (
        <div>검색 결과가 없습니다.</div>
      ) : (
        <Documents datas={documents} />
      )}
    </>
  );
};

export default SearchPage;
