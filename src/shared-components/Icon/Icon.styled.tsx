import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { IconPropsOptionalT } from './Icon';

export const InlineSVGStyled = styled(({ width, height, ...props }) => (
  <ReactSVG {...props} path={'../../static/icons/eye-close.svg'} />
))<IconPropsOptionalT>`
  svg {
    max-width: 100%;
    max-height: 100%;
    display: block;

    ${({ width }) => (width ? `width: ${width}` : '')};
    ${({ height }) => (height ? `height: ${height}` : '')};
  }
`;
