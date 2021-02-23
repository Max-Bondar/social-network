import styled from 'styled-components';

type ContainerPropsT = {
  hasSidePaddingMobile?: boolean;
};

export const Container = styled.div<ContainerPropsT>`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 20px;

  ${({ theme, hasSidePaddingMobile }) => `
    ${theme.devices.mobile} {
      ${hasSidePaddingMobile ? '' : 'padding: 0;'}
    }
  `}
`;
