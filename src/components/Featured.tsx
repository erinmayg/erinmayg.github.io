import React from 'react'
import styled from 'styled-components'
import { FEATURED } from '../constants'
import IconCTA from './icons/cta'
import IconGitHub from './icons/github'
import IconLink from './icons/link'

const StyledFeaturedWork = styled.div`
  display: flex;
  flex-direction: ${(props: { reverse: boolean }) =>
    props.reverse ? 'row-reverse' : 'reverse'};
  margin-bottom: 4rem;

  line-height: 24px;
  text-align: ${(props: { reverse: boolean }) =>
    props.reverse ? 'left' : 'right'};

  h2 {
    font-family: var(--fontHead);
  }

  @media (max-width: 768px) {
    display: block;
    position: relative;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), transparent);
    backdrop-filter: blur(10px);

    padding: 1rem;
    margin: 2rem;
    text-align: left;
  }
`

const StyledImage = styled.a`
  position: relative;
  margin: 0 2rem;

  display: inline-block;
  width: 400px;
  height: 300px;

  background-color: var(--accent2);
  border-radius: 8px;

  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 60px;

  img {
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 2;

    width: 400px;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;

    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%) saturate(1);
  }

  svg {
    position: absolute;
    ${(props: { reverse: boolean }) =>
      props.reverse ? 'right: -60px' : 'left: -60px'};
    bottom: -60px;
    opacity: 0;
    transition: var(--transition);

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8));
  }

  &:hover {
    svg {
      opacity: 1;
    }

    img {
      mix-blend-mode: normal;
      filter: none;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    mix-blend-mode: luminosity;
    opacity: 0.2;

    width: 100%;
    height: 100%;

    overflow: hidden;

    img {
      width: 102%;
      height: 102%;
    }

    &:hover {
      svg {
        opacity: 0;
      }

      img {
        mix-blend-mode: multiply;
        filter: grayscale(0%) contrast(1) brightness(90%);
      }
    }
  }
`

const StyledTechStack = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: ${(props: { reverse: boolean }) =>
    props.reverse ? 'flex-start' : 'flex-end'};
  color: var(--accent1);

  li {
    margin: 1rem 0;
    margin-right: 2rem;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props: { reverse: boolean }) =>
    props.reverse ? 'flex-start' : 'flex-end'};

  svg {
    margin-right: ${(props: { reverse: boolean }) =>
      props.reverse ? '24px' : '0'};
    margin-left: ${(props: { reverse: boolean }) =>
      props.reverse ? '0' : '24px'};
    width: 24px;
    height: 24px;
    transition: var(--transition);

    &:hover {
      color: var(--accent1);
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

const FeaturedWork = (props: {
  featured: {
    title: string
    desc: string
    image: string
    techStack: string[]
    links: { site?: string; github: string }
  }
  reverse: boolean
}) => {
  const { featured, reverse } = props

  return (
    <StyledFeaturedWork reverse={reverse}>
      <StyledImage
        reverse={reverse}
        href={featured.links.site || featured.links.github}
        target='_blank'
        rel='noreferrer'
      >
        <img src={featured.image} alt={featured.title} />
        <IconCTA reverse={reverse} />
      </StyledImage>
      <div style={{ padding: '0 2rem', maxWidth: '500px' }}>
        <p
          style={{
            color: 'var(--accent1)',
            letterSpacing: '0.25em',
            marginBottom: '1rem',
          }}
        >
          Featured Work
        </p>
        <h2 style={{ marginBottom: '1rem' }}>{featured.title}</h2>
        <p>{featured.desc}</p>
        <StyledTechStack reverse={reverse}>
          {featured.techStack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </StyledTechStack>
        <StyledLinks reverse={reverse}>
          {featured.links.github && (
            <a href={featured.links.github} target='_blank' rel='noreferrer'>
              <IconGitHub />
            </a>
          )}
          {featured.links.site && (
            <a href={featured.links.site} target='_blank' rel='noreferrer'>
              <IconLink />
            </a>
          )}
        </StyledLinks>
      </div>
    </StyledFeaturedWork>
  )
}

const Featured = () => (
  <div>
    <h1>Projects I've Done</h1>
    {FEATURED.map((work, i) => (
      <FeaturedWork featured={work} reverse={i % 2 === 0} key={i} />
    ))}
  </div>
)

export default Featured
