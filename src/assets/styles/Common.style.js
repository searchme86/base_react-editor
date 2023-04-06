import styled from 'styled-components';

export const OffScreen = styled.p`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  border: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
`;

export const OffScreenSpan = styled.span`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  border: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
`;

export const OffScreenStrong = styled.strong`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  border: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
`;

export const OffScreenTitle = styled.h1`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  border: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
`;

export const BasicUl = styled.ul`
  margin: 0 auto;
`;

export const BasicLi = styled.li`
  display: inline-block;
  vertical-align: top;
  text-align: center;
`;
