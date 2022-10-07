import React from 'react';
import styled from 'styled-components';
import Featured from '../Featured';
import Projects from '../Projects';

const WorksSection = styled.section`
  flex-direction: column;
  padding-top: 120px;

  h1 {
    margin-bottom: 2rem;
  }

  h1::before {
    content: '03.';
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0;

    h1,
    h2 {
      padding: 0 2rem;
    }
  }
`;

function Works() {
  return (
    <WorksSection id='works'>
      <Featured />
      <h2 style={{ marginBottom: '1rem' }}>Other Projects</h2>
      {/* <a style={{ marginBottom: '1rem' }}>View Archive</a> */}
      <Projects />
    </WorksSection>
  );
}

export default Works;
