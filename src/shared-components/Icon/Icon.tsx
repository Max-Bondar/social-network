import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { ThemeI, ColorsT } from 'libs/declarations-ts/interfaces/theme';
import { InlineSVGStyled } from './Icon.styled';

type IconPropsObligatoryT = {
  fileName: string;
};

export type IconPropsOptionalT = {
  width?: string;
  height?: string;
  color?: keyof ColorsT;
  fill?: keyof ColorsT;
};

export const Icon: React.FC<
  IconPropsObligatoryT & IconPropsOptionalT
> = props => {
  const { width, height, fileName } = props;
  const beforeInjection = (theme: ThemeI) => (svg: Element) => {
    const setThemeColor = (attrName: 'fill' | 'color') => {
      const val = props[attrName];
      if (val) {
        svg.setAttribute(attrName, theme.color[val]);
      }
    };

    setThemeColor('fill');
    setThemeColor('color');
  };

  return (
    <ThemeConsumer>
      {theme => (
        <InlineSVGStyled
          src={require(`../../static/icons/${fileName}`)}
          beforeInjection={beforeInjection(theme)}
          width={width}
          height={height}
        />
      )}
    </ThemeConsumer>
  );
};

export default Icon;

/**
 * Put SVG to avoid it's loading and show it immediately with bad connection
 */
export const SpinnerIcon = (props: IconPropsOptionalT) => (
  <Icon fileName="spinner.svg" width="16px" height="15px" {...props} />
);

export const EyeOpenIcon = (props: IconPropsOptionalT) => (
  <Icon fileName="eye-open.svg" width="16px" height="auto" {...props} />
);

export const EyeCloseIcon = (props: IconPropsOptionalT) => (
  <Icon fileName="eye-close.svg" width="16px" height="auto" {...props} />
);

export const ArrowRightIcon = (props: IconPropsOptionalT) => (
  <Icon fileName="arrow-right.svg" width="8px" height="auto" {...props} />
);

export const ArrowLeftIcon = (props: IconPropsOptionalT) => (
  <Icon fileName="arrow-left.svg" width="8px" height="auto" {...props} />
);

export const LikeIcon = (props: IconPropsOptionalT) => (
  <Icon fileName="like.svg" height="12px" width="12px" {...props} />
);

export const CloseIcon = (props: IconPropsOptionalT) => (
  <Icon fileName="close.svg" {...props} />
);

export const DeleteIcon = (props: IconPropsOptionalT) => (
  <Icon fileName="delete.svg" {...props} />
);
