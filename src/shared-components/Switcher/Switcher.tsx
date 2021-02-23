import React, { useState } from 'react';
import { SwitcherWrapStyled, SwitchButtonStyled } from './Switcher.styled';

type SwitcherPropsT = {
  onClick: () => void;
};

const Switcher: React.FC<SwitcherPropsT> = ({ onClick }) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
    onClick();
  };

  return (
    <SwitcherWrapStyled>
      <SwitchButtonStyled
        type="button"
        isActive={isActive}
        onClick={handleClick}
      />
    </SwitcherWrapStyled>
  );
};

export default Switcher;
