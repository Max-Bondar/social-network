import styled from 'styled-components';

type AvatarPropsT = {
  src?: string;
  width?: string;
  height?: string;
  rightIndent?: string;
};

export const AvatarStyled = styled.button<AvatarPropsT>`
  display: block;
  flex: none;

  ${({ theme, src, width, height, rightIndent }) => `
    width: ${width ? width : '40px'};
    height: ${height ? height : '40px'};
    margin-right:  ${rightIndent ? rightIndent : '15px'};
    border-radius: ${theme.other.borderRadiusRound};
    border: 1px solid ${theme.color.textLight};
    background: url(${
      src ? src : require('../../static/images/default-avatar.jpg')
    }) no-repeat center;
    background-size: cover;
  `}
`;
