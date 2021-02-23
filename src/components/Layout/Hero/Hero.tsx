import React from 'react';
import { HeroStyled, InnerContainer, IconStyled } from './Hero.styled';

const Hero: React.FC = () => {
  return (
    <HeroStyled>
      <InnerContainer>
        <p>A place to share my React knowledge.</p>
        <IconStyled />
      </InnerContainer>
    </HeroStyled>
  );
};

export default Hero;
