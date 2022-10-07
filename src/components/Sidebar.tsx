import React from 'react'
import styled from 'styled-components'
import { EMAIL, GITHUB, INSTAGRAM, LINKEDIN } from '../constants'
import IconGitHub from './icons/github'
import IconInsta from './icons/insta'
import IconLinkedIn from './icons/linkedin'

const StyledSidebar = styled.div``

const Button = styled.a`
  svg {
    margin: 8px;
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: var(--accent1);
    transition: var(--transition);
  }
`

const StyledSocMed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;

  a {
    padding: 8px;
    margin: 0 40px;

    svg {
      padding: 0;
      margin: 0;
    }
  }

  &::after {
    display: block;
    content: '';
    width: 1px;
    height: 100px;
    margin: 0 auto;
    margin-top: 1rem;
    background-image: linear-gradient(180deg, var(--grey), transparent);
  }

  @media (max-width: 768px) and (min-height: 700px) {
    flex-direction: row;
    justify-content: center;
    position: relative;

    a {
      margin: 0 4px;
    }

    &::after {
      display: none;
    }
  }
`

const StyledEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 40px;

  &::after {
    display: block;
    content: '';
    width: 1px;
    height: 100px;
    margin: 0 auto;
    margin-top: 1rem;
    background-image: linear-gradient(180deg, var(--grey), transparent);
  }

  a {
    writing-mode: vertical-rl;
    font-size: 0.8rem;
    letter-spacing: 0.1em;

    &:hover {
      color: var(--accent1);
      transition: var(--transition);
    }
  }

  @media (max-width: 768px) and (min-height: 700px) {
    display: none;
  }
`

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledSocMed aria-orientation='vertical'>
        <Button href={GITHUB} target='_blank' rel='noreferrer'>
          <IconGitHub />
        </Button>
        <Button href={INSTAGRAM} target='_blank' rel='noreferrer'>
          <IconInsta />
        </Button>
        <Button href={LINKEDIN} target='_blank' rel='noreferrer'>
          <IconLinkedIn />
        </Button>
      </StyledSocMed>
      <StyledEmail>
        <a href={`mailto:${EMAIL}`} target='_blank' rel='noreferrer'>
          {EMAIL}
        </a>
      </StyledEmail>
    </StyledSidebar>
  )
}

export default Sidebar
