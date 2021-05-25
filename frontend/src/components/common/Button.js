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

const Buttons = ({ children, color, float, width, fontsize }) => {
  return (
    <ButtonBlock float={float} width={width} fontsize={fontsize}>
      <Button fullWidth size="lg" color={color || 'blue'}>
        {children}
      </Button>
    </ButtonBlock>
  );
};

export default Buttons;
