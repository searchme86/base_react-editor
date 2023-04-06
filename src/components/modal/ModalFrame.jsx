import React, { useEffect } from 'react';
import ModalPortal from './ModalPortal';

import {
  ModalContainer,
  ModalLayer,
  ModalWrapper,
  ModalCloseButton,
  ModalLayOut,
} from './Modal.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { OffScreenSpan } from '../../Assets/Styles/Common.style';

function ModalFrame({ children, isOpen, handleClose, domId }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ModalPortal wrapperId={domId}>
      <ModalWrapper>
        <ModalLayer>
          <ModalLayOut>
            <ModalCloseButton onClick={handleClose}>
              <OffScreenSpan>모달창 닫기 버튼</OffScreenSpan>
              <FontAwesomeIcon
                icon={faXmark}
                style={{ fontSize: 30, color: '#146ebe' }}
              />
            </ModalCloseButton>
            <ModalContainer>{children}</ModalContainer>
          </ModalLayOut>
        </ModalLayer>
      </ModalWrapper>
    </ModalPortal>
  );
}

export default ModalFrame;
