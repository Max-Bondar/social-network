import styled from 'styled-components';

export const Paper = styled.section`
  ${({ theme }) => `
    padding: 20px;
    margin-bottom: 15px;

    border-radius: ${theme.other.borderRadius};

    background-color: ${theme.color.layoutPaper};
    box-shadow: ${theme.color.shadowPaper};

    ${theme.devices.mobile}{
      padding: 20px 15px;
    }
  `}

  &:last-child {
    margin-bottom: 0;
  }
`;
