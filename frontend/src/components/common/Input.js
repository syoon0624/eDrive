import React, { useState, useEffect } from 'react';
import { TextInput } from '@mantine/core';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import { inputColorMap } from '../../lib/styles/palette';
import { esApi } from '../../lib/api/elasticsearch';
import { setParsedDocuments } from '../../features/parsedDocumentsSlice';

const InputBlock = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
`;

const InputWrap = styled.div`
  padding-top: ${props => props.paddingsize};
  position: relative;
  padding-left: 10px;
  height: 100%;
  color: ${props => inputColorMap[props.color].color};
  outline: none;
  font-size: ${props => props.size};
  border: 3px solid ${props => inputColorMap[props.color].borderColor};
  width: 100%;
`;
const SearchIconWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const MyInput = ({
  color,
  paddingsize = '10px',
  float,
  width,
  height = '50px',
  placeholder = '내용을 입력해 주세요.',
  display,
  fontsize = '20px',
}) => {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const { search } = useLocation();
  const name = decodeURIComponent(
    new URLSearchParams(search).get('query') || ''
  );
  const option = decodeURIComponent(
    new URLSearchParams(search).get('option') || ''
  );
  const dispatch = useDispatch();
  const { option: currentSearchOption } = useSelector(
    state => state.searchOption
  );

  useEffect(() => {
    const setSearchDatas = async () => {
      if (option === '') {
        const { results } = await esApi.search(name);
        dispatch(setParsedDocuments(results));
      } else {
        const { results } = await esApi.searchWithOption(name, option);
        dispatch(setParsedDocuments(results));
      }
    };
    setQuery(name);
    setSearchDatas();
  }, [name, option]);

  return (
    <InputBlock
      color={color}
      size={paddingsize}
      float={float}
      width={width}
      placeholder={placeholder}
      display={display}
      height={height}
    >
      <InputWrap color={color} paddingsize={paddingsize} float={float}>
        <TextInput
          inputStyle={{
            fontSize: fontsize,
          }}
          variant="unstyled"
          placeholder={placeholder}
          type="text"
          value={decodeURIComponent(query)}
          onChange={e => setQuery(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              if (query === '') {
                alert('검색어를 입력 해 주세요.');
                return;
              }
              const searchRequest = {};
              searchRequest.query = query;
              if (currentSearchOption === 'WRITER')
                searchRequest.option = 'writer';
              if (currentSearchOption === 'CONTENT')
                searchRequest.option = 'content';
              const params = new URLSearchParams(searchRequest);
              history.push(`search?${decodeURIComponent(params.toString())}`);
            }
          }}
        />
      </InputWrap>
      <SearchIconWrap
        onClick={() => {
          if (query === '') {
            alert('검색어를 입력 해 주세요.');
            return;
          }
          const searchRequest = {};
          searchRequest.query = query;
          if (currentSearchOption === 'WRITER') searchRequest.option = 'writer';
          if (currentSearchOption === 'CONTENT')
            searchRequest.option = 'content';

          const params = new URLSearchParams(searchRequest);
          history.push(`search?${decodeURIComponent(params.toString())}`);
        }}
      >
        <SearchBox color="blue" size="50px" display={display} />
      </SearchIconWrap>
    </InputBlock>
  );
};

export default MyInput;
