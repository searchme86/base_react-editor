import styled, { css } from 'styled-components';
import { AlignComponents } from '../../Config/Layout/Layout.style';
import {
  PrimaryButton,
  SeconDaryButton,
  BasicIconBtn,
  BasicButton,
} from '../../Assets/Styles/Button.style';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalLayer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 540px;
  max-width: 540px;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 16px;
  z-index: 9999;
  overflow: hidden;
  box-sizing: border-box;
`;

export const ModalLayOut = styled.div`
  position: relative;
`;

export const ModalHalf = styled.div`
  width: 250px;
  margin-right: ${({ mr }) => mr}px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const ModalCloseButton = styled(BasicIconBtn)`
  width: ${({ width }) => width};
  position: absolute;
  top: 11px;
  right: 20px;
`;

export const ModalContainer = styled.section`
  position: relative;
`;

export const ModalHeader = styled.header`
  padding: 25px 20px 20px 20px;
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  color: #000;
  word-break: keep-all;
`;

export const ModalContent = styled.div`
  padding: 0 20px 20px 20px;
`;

export const ModalForm = styled.form`
  display: block;
  width: 100%;
`;

export const ModalList = styled.ul`
  margin: 0 0 10px 0;
`;

export const ModalItem = styled.li`
  ${({ display }) =>
    display
      ? css`
          display: flex;
          align-items: center;
        `
      : ''}
  margin-bottom: ${({ mb }) => (mb ? mb : '10')}px;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ModalInfo = styled.div`
  background: #fbfbfb;
  padding: 10px;
`;

export const ModalInfoTitle = styled.strong`
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 8px 0;
`;

export const ModalInfoList = styled.ul`
  padding: 0 0 0 5px;
`;

export const ModalInfoDes = styled.p`
  margin: 0 0 0 5px;
  font-size: 12px;
`;

export const ModalInfoBold = styled.strong`
  display: inline-block;
  vertical-align: top;
  margin: 0 2px 0 2px;
  font-size: 12px;
`;

export const ModalDesTitle = styled.strong`
  display: block;
  font-size: 14px;
  font-weight: normal;
`;

export const ModalDesIndication = styled.span`
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #ff0000;
`;

export const ModalAction = styled(AlignComponents)`
  padding: 20px 0 20px 0;
`;

export const ModalPrimaryBtn = styled(PrimaryButton)`
  width: calc(100vw - 10px);
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed !important;
      pointer-events: all !important;
    `}
`;

export const ModalSeconDaryBtn = styled(SeconDaryButton)`
  width: calc(100vw - 10px);
`;

export const ResetButton = styled(BasicButton)`
  color: #fff;
  background: #ea035c;
`;
