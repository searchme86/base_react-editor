import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './Buttons';

const ToggleBtn = styled(Button)`
  width: 30px;
  height: 16px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    !props.toggle ? 'rgb(204, 205, 209)' : '#5b7eff'};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;

const Circle = styled.div`
  background-color: white;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(14px, 0);
      transition: all 0.2s ease-in-out;
    `}
`;

function Toggle({ title }) {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='toggle_wrap'>
      <span>{title}</span>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <Circle toggle={toggle} />
      </ToggleBtn>
      <span>{!toggle ? 'OFF' : 'ON'}</span>
    </div>
  );
}

export default Toggle;
