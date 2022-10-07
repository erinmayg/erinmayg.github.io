import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Sidebar from './components/Sidebar';
import './App.css';
import Works from './components/sections/Works';

const StyledFooter = styled.footer`
  display: inline-block;
  font-size: 0.8rem;
  line-height: 24px;
  width: 100%;
  padding: 1rem 0;
  text-align: center;

  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8));

  a {
    &:hover {
      color: var(--accent1);
    }
  }
`;

function App() {
  return (
    <div className='App'>
      <header
        style={{
          backdropFilter: 'blur(10px)',
          width: '100%',
          position: 'fixed',
          left: '0',
          zIndex: '5',
        }}
      >
        <Nav />
      </header>
      <Hero />
      <About />
      <Experience />
      <Works />
      <StyledFooter>
        <Sidebar />
        <a
          href='https://github.com/erinmayg/v2'
          target='_blank'
          rel='noreferrer'
        >
          <div style={{ padding: '1rem', textAlign: 'center' }}>
            Designed and Built with ♡<br />
            by Erin May Gunawan
          </div>
        </a>
      </StyledFooter>
    </div>
  );
}

export default App;
