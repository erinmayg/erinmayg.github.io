import React from 'react';
import styled from 'styled-components';
import { INSTAGRAM, NUS } from '../../constants';
import IconSparkle from '../icons/sparkle';

const AboutSection = styled.section`
  flex-direction: row;
`;

const AboutMe = styled.div`
  max-width: 600px;
  h1::before {
    content: '01. ';
  }
`;

const StyledContent = styled.div`
  margin: 1rem;
  padding: 1rem 2rem;

  border-left: 2px solid;
  border-image: linear-gradient(
      180deg,
      transparent 0%,
      var(--lightgrey) 49%,
      transparent 100%
    )
    1;

  p {
    line-height: 24px;
    margin-bottom: 1rem;
  }

  a {
    position: relative;
    color: var(--accent1);

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: var(--accent1);
      left: 0;
      bottom: 0;

      transform-origin: 0% 100%;
      transform: scale(0, 1);
      transition: var(--transition);
    }

    &:hover::after {
      transform: scale(1, 1);
    }
  }
`;

const StyledSkills = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(2, auto);
    font-size: 0.9rem;

    svg {
      width: 10px;
      height: 10px;
      margin-right: 1rem;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  p {
    font-size: 0.9rem;
    margin-top: 2rem;
  }
`;

const SkillsDiv = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;

  padding: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  display: block;
  position: relative;
  width: 100%;

  border-radius: 20px;

  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1))
    padding-box;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  opacity: 0.9;

  h2 {
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  ul {
    display: block;
    li {
      line-height: 2rem;
      opacity: 0.9;

      &::before {
        content: none;
      }
    }
  }
`;

const techStacks = [
  'JavaScript',
  'React',
  'Node.js',
  'MongoDB',
  'Docker',
  'Kubernetes',
];

function About() {
  return (
    <AboutSection id='about'>
      <AboutMe>
        <h1>About Me</h1>
        <StyledContent>
          <p>
            I am a Y4 Computer Science student at{' '}
            <a href={NUS} target='_blank' rel='noreferrer'>
              NUS
            </a>
            . I am interested in learning new things and I love to create stuff.
            I have years of experience working in Graphic Design and my hobby is
            to create digital art.
          </p>

          <p>
            My interest in web development started back in my first year of uni,
            where my friend and I made a{' '}
            <a
              href={'https://erinmayg.github.io/under-attack-website'}
              target='_blank'
              rel='noreferrer'
            >
              static website
            </a>{' '}
            from basic HTML and CSS for fun! Turns out coding can actually be
            quite fun when you can actually see your work come alive right
            before your eyes!
          </p>
        </StyledContent>
      </AboutMe>

      <StyledSkills>
        <SkillsDiv>
          <h2>Skills</h2>
          <ul>
            <li>Frontend Dev</li>
            <li>Web Design</li>
            <li>Graphic Design</li>
            <li>Digital Art</li>
          </ul>
        </SkillsDiv>
        <p>A few tech stacks I'm familiar with:</p>
        <ul>
          {techStacks.map((tech, i) => (
            <li key={i}>
              <IconSparkle />
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </StyledSkills>
    </AboutSection>
  );
}

export default About;
