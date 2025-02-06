import React, { useState } from 'react'
import styled from 'styled-components'
import { GITHUB, LINKEDIN, RESUME } from '../../constants'
import IconArrow from '../icons/arrow'

const HeroSection = styled.section`
  flex-direction: column;
  margin-top: 60px;

  h1 {
    font-size: 6rem;
    font-weight: normal;
    margin: 1rem 0;
  }

  h1::after {
    content: '.';
  }

  p {
    max-width: 800px;
  }
`

const SocMed = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  width: max-content;

  svg {
    width: 80px;
    height: 80px;
  }

  button {
    color: ${(props: { toggle: boolean }) => props.toggle && 'var(--accent1)'};
    fill: ${(props: { toggle: boolean }) => props.toggle && 'currentColor'};
  }

  button:hover {
    color: var(--accent1);
    fill: currentColor;
    transition: var(--transition);
  }
`

const Buttons = styled.div`
  position: absolute;
  left: 80px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

const Button = styled.a`
  font-family: var(--fontHead);
  margin: 0.5rem;

  &:hover {
    color: var(--accent1);
    transition: var(--transition);
  }
`

function Hero() {
  const [show, setShow] = useState(false)
  const [toggle, setToggle] = useState(false)

  return (
    <HeroSection>
      <div>
        <p>Hi, my name is</p>
        <h1>Erin May</h1>
        <p>
          I am a software engineer with a passion for design.
          <br />
          (and I sometimes doodle).
        </p>
        <SocMed
          toggle={toggle}
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <button onClick={() => setToggle(!toggle)}>
            <IconArrow />
          </button>
          {(toggle || show) && (
            <Buttons>
              <Button href={GITHUB} target='_blank' rel='noreferrer'>
                GitHub
              </Button>
              <Button href={LINKEDIN} target='_blank' rel='noreferrer'>
                LinkedIn
              </Button>
              <Button href={RESUME} target='_blank' rel='noreferrer'>
                Resume
              </Button>
            </Buttons>
          )}
        </SocMed>
      </div>
    </HeroSection>
  )
}

export default Hero
