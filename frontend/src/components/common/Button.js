import React from 'react';
import styled from 'styled-components';
import { Button } from '@mantine/core';

const ButtonBlock = styled.div`
  width: ${props => props.width || '80px'};
  font-size: ${props => props.fontsize || '15px'};
  float: ${props => props.float || ''};
  border-radius: 0.3em;
  cursor: pointer;
`;

const Buttons = ({
  children,
  size = 'lg',
  color,
  float,
  width,
  fontsize,
  icon = '',
}) => {
  return (
    <ButtonBlock float={float} width={width} fontsize={fontsize}>
      <Button size={size} color={color || 'blue'} rightIcon={icon}>
        {children}
      </Button>
    </ButtonBlock>
  );
};

export default Buttons;
