import styled from 'styled-components';
import ReactPopup from 'reactjs-popup';

export const PopupWrapStyled = styled(ReactPopup)`
  ${({ theme }) => `
    &-content {
      max-width: 500px;
      max-height: 650px;
      width: 100%;
      padding: 20px;  
      border-radius: ${theme.other.borderRadius};
      background-color: ${theme.color.layoutPaper};
      box-shadow: ${theme.color.shadowPaper}; 
      
      ${theme.devices.mobile}{
        max-height: 100vh;  
        height: 100%;
        min-width: 100%; 
      }
    }

    &-overlay {
      background: ${theme.color.shadowPopupOverlay}; 
    }
  `}
`;

export const CrossButtonStyled = styled.button`
  ${({ theme }) => `
    color: ${theme.color.textMain};
  `}
`;

export const ButtonWrapStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;
