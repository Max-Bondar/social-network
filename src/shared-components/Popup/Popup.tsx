import React from 'react';
import { CloseIcon } from 'shared-components';
import {
  PopupWrapStyled,
  CrossButtonStyled,
  ButtonWrapStyled,
} from './Popup.styled';

type PopupPropsT = {
  isOpen: boolean;
  onClose?: () => void;
};

const Popup: React.FC<PopupPropsT> = ({ children, isOpen, onClose }) => {
  return (
    <PopupWrapStyled open={isOpen} onClose={onClose}>
      <>
        <ButtonWrapStyled>
          <CrossButtonStyled type="button" onClick={onClose}>
            <CloseIcon />
          </CrossButtonStyled>
        </ButtonWrapStyled>
        {children}
      </>
    </PopupWrapStyled>
  );
};

export default Popup;
