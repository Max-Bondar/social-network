import styled from 'styled-components';

type SwitchButtonPropsT = {
  isActive: boolean;
};

export const SwitcherWrapStyled = styled.div``;

export const SwitchButtonStyled = styled.button<SwitchButtonPropsT>`
  ${({ theme, isActive }) => `
    display: block;
    position: relative;
    width: 48px;
    height: 22px;

    background: rgba(39, 117, 204, 0.2);
    border-radius: 30px;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 12px;
    width: 16px;
    height: 16px;

    background: ${theme.color.other2};
    transform: ${
      isActive
        ? `translateX(24px) translate(-50%, -50%);`
        : `translateZ(0px) translate(-50%, -50%)`
    };
    border-radius: ${theme.other.borderRadiusRound};
    transition: transform 0.2s cubic-bezier(0.75, 0, 0.08, 1) 0s;  
  }
  `}
`;
