import React from 'react'
import styled from 'styled-components'
import { PROJECTS } from '../constants'
import IconGitHub from './icons/github'
import IconLink from './icons/link'

const StyledProjectCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 0 40px;

  @media (max-width: 1000px) {
    display: flex;
    margin: 0;
    overflow-x: scroll;
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
    font-size: 0.9em;

    &:last-child {
      margin-right: 0;
    }
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
`

const StyledProjectCard = styled.div`
  margin: 1rem;
  padding: 2rem;
  border-radius: 8px;
  opacity: 0.9;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1))
    padding-box;
  backdrop-filter: blur(10px);
  min-width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProjectCard = (props: {
  project: {
    title: string
    desc: string
    techStack: string[]
    links: { site?: string; github?: string }
  }
}) => {
  const { project: work } = props
  return (
    <StyledProjectCard>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>{work.title}</h3>
        <p>{work.desc}</p>
      </div>
      <div>
        <hr />
        <StyledTechStack reverse={false}>
          {work.techStack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </StyledTechStack>
        <StyledLinks reverse={false}>
          {work.links.github && (
            <a href={work.links.github} target='_blank' rel='noreferrer'>
              <IconGitHub />
            </a>
          )}
          {work.links.site && (
            <a href={work.links.site} target='_blank' rel='noreferrer'>
              <IconLink />
            </a>
          )}
        </StyledLinks>
      </div>
    </StyledProjectCard>
  )
}

function Project() {
  return (
    <StyledProjectCards>
      {PROJECTS.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </StyledProjectCards>
  )
}

export default Project
