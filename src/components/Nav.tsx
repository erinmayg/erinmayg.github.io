import React from 'react';
import styled from 'styled-components';
import { RESUME } from '../constants';
import IconDoc from './icons/doc';

const StyledNav = styled.nav`
  width: 100%;
  height: 60px;

  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
    font-size: 1rem;
  }

  backdrop-filter: blur(10px);
  border-bottom: 1px solid;
  border-image: linear-gradient(
      90deg,
      transparent 0%,
      var(--lightgrey) 49%,
      transparent 100%
    )
    1;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.25), transparent);

  transition: var(--transition);

  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: 1.2rem;

  a {
    padding: 1rem;

    &:hover {
      fill: var(--lightgrey);
    }
  }

  svg {
    position: absolute;
    box-sizing: padding-box;
    padidng: 1rem;
    width: 24px;
    height: 24px;
    fill: inherit;
  }
`;

const Button = styled.a`
  position: relative;
  padding: 0.8rem 1rem;
  margin: 0 1rem;
  text-transform: lowercase;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--lightgrey);
    left: 0;
    bottom: 48%;

    transform-origin: 0% 100%;
    transform: scale(0, 1);
    transition: var(--transition);
  }

  &:hover::after {
    transform: scale(1, 1);
  }
`;

const Logo = styled.a`
  fontfamily: var(--fontHead);
`;

function Nav() {
  return (
    <StyledNav>
      <Logo href='/#'>EMG</Logo>
      <div>
        <Button href='/#about'>About</Button>
        <Button href='/#experience'>Experience</Button>
        <Button href='/#works'>Works</Button>
        <a href={RESUME} target='_blank' rel='noreferrer'>
          <IconDoc />
        </a>
      </div>
    </StyledNav>
  );
}

export default Nav;
