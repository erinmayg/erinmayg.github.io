import React, { useState } from 'react'
import styled from 'styled-components'
import { JOBS } from '../../constants'
import IconSparkle from '../icons/sparkle'

const StyledTabPanel = styled.div`
  display: inline-block;
  max-width: 600px;
  height: 200px;
  margin: 0 2rem;

  svg {
    width: 10px;
    height: 10px;
    margin-right: 1rem;
    margin-top: 12px;
  }

  h2 {
    font-size: 1.4rem;
    font-family: var(--fontHead);
  }

  #company {
    color: var(--accent1);

    a {
      position: relative;
      color: inherit;
      cursor: pointer;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
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
  }

  @media (max-width: 768px) {
    margin: 0;
    width: auto;
    padding: 0 2rem;

    #company::before {
      display: block;
      content: '';
    }
  }

  p {
    font-size: 0.8rem;
    color: var(--grey);
    margin: 1rem 0;
  }

  div p {
    font-size: 0.9rem;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--light-grey);
    text-align: left;
  }
`

interface JobInterface {
  jobTitle: string
  date: string
  company: string
  companyLink: string
  desc: string[]
}

const TabPanel = (props: { job: JobInterface }) => {
  const { jobTitle, date, company, companyLink, desc } = props.job
  return (
    <StyledTabPanel>
      <h2>
        {jobTitle}{' '}
        <span id={'company'}>
          @{' '}
          <a href={companyLink} target='_blank' rel='noreferrer'>
            {company}
          </a>
        </span>
      </h2>
      <p>{date}</p>
      <div>
        {desc.map((d, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '32px auto',
            }}
          >
            <IconSparkle />
            <p>{d}</p>
          </div>
        ))}
      </div>
    </StyledTabPanel>
  )
}

const StyledJobPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: block;
    width: 100vw;
    overscroll-x: scroll;
  }
`

const StyledTabList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: var(--transition);

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: space-evenly;
    width: 100vw;
  }
`

const StyledTabListButton = styled.button`
  width: 200px;
  padding: 0.5rem 1rem;
  border-left: 2px solid
    ${(props: { isActive: boolean }) =>
      props.isActive ? 'var(--lightgrey)' : 'var(--darkaccent)'};

  &:hover,
  &:focus {
    background: var(--lightgrey-2);
  }

  font-family: var(--fontMono);
  text-align: left;

  @media (max-width: 768px) {
    width: auto;
    flex-grow: 1;
    margin-bottom: 2rem;
    height: 64px;
    border-left: none;
    border-top: 2px solid
      ${(props: { isActive: boolean }) =>
        props.isActive ? 'var(--lightgrey)' : 'var(--darkaccent)'};
  }
`

const JobPanel = () => {
  const [activeTabId, setActiveTabId] = useState(0)
  const jobs = JOBS

  return (
    <StyledJobPanel>
      <StyledTabList>
        {jobs.map((job, i) => (
          <StyledTabListButton
            key={i}
            isActive={activeTabId === i}
            onClick={() => setActiveTabId(i)}
          >
            {job.company}
          </StyledTabListButton>
        ))}
      </StyledTabList>
      <TabPanel job={jobs[activeTabId]} />
    </StyledJobPanel>
  )
}

const ExperienceSection = styled.section`
  flex-direction: column;

  h1 {
    margin-bottom: 2rem;
  }

  h1::before {
    content: '02. ';
  }
  @media (max-width: 768px) {
    display: block;
    padding: 0;
    padding-top: 120px;

    h1 {
      padding: 0 2rem;
    }
  }
`

function Experience() {
  return (
    <ExperienceSection id={'experience'}>
      <div>
        <h1>Work Experience</h1>
        <JobPanel />
      </div>
    </ExperienceSection>
  )
}

export default Experience
