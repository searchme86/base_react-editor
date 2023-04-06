import styled, { css } from 'styled-components';

export const CommonBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const BasicButton = styled(CommonBtn)`
  width: 100%;
  color: #fff;
  background: #000;
  height: 48px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  padding: 11px 16px;
  box-sizing: border-box;
  margin: 0 10px 0 0;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const CreateCategoryBtn = styled(CommonBtn)`
  margin: 0 10px 0 10px;
`;

export const PrimaryButton = styled(BasicButton)``;

export const SeconDaryButton = styled(BasicButton)`
  color: #767676;
  border: 1px solid #bcbcbc;
  background: #fff;
`;

export const BasicIconBtn = styled(CommonBtn)`
  z-index: 1;
  background: #fff;
  padding: 5px;
`;

export const EditButton = styled(CommonBtn)`
  position: absolute;
  right: 0;
  border-radius: 15px;
  padding: 0 20px;
  font-size: 16px;
  line-height: 42px;
  background: #f4f4f4;
  color: #666;
`;

export const HotItemButton = styled(CommonBtn)`
  padding: 10px;
  background-color: white;
  color: gray;
  font-weight: 600;
`;

export const PFormButton = styled(CommonBtn)`
  height: 40px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  padding: 11px 16px;
  box-sizing: border-box;
  border: 1px solid #767676;
  margin: 57px 0 0 0;
  ${({ checked }) =>
    checked &&
    css`
      border: 2px solid red;
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed !important;
      pointer-events: all !important;
    `}
  ${({ canSubmit }) =>
    canSubmit &&
    css`
      background: #ea035c;
      color: #fff;
    `}
`;

export const RegisterButton = styled(CommonBtn)`
  background: ${({ background }) => background};
  width: 100%;
  padding: 15px 0 15px;
  color: #fff;
  font-size: 17px;
  ${({ canSubmit }) =>
    canSubmit
      ? css`
          background: #ea035c;
          color: #fff;
        `
      : css`
          cursor: not-allowed !important;
          pointer-events: all !important;
        `}
`;

export const HeaderSearchBtn = styled(CommonBtn)`
  width: 50px;
`;

export const LoginBtn = styled(RegisterButton)`
  padding: 7px 0;
`;

export const Deletebtn = styled(CommonBtn)`
  display: inline-block;
  position: absolute;
  bottom: 9px;
  right: 16px;
  vertical-align: top;
`;
