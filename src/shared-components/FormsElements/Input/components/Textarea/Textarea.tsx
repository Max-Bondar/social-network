import React from 'react';
import { Input, InputPropsT } from '../../Input';
import { TextareaStyled } from './Textarea.styled';

const Textarea: React.FC<InputPropsT> = props => {
  return <Input as={TextareaStyled} {...props} />;
};

export default Textarea;
