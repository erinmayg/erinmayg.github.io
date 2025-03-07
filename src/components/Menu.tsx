import React, { useState } from 'react'
import styled from 'styled-components'
import { NAVLINKS, RESUME } from '../constants'
import IconMenu from './icons/menu'

const StyledMenu = styled.div`
  display: none;

  svg {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 5;
  }

  @media (max-width: 768px) {
    display: block;
    position: relative;
  }
`

const StyledSidebar = styled.aside`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;

    width: 100vw;
    height: 100vh;
    overflow: hidden;

    visibility: ${(props: { isOpen: boolean }) =>
      props.isOpen ? 'visible' : 'hidden'};
    backdrop-filter: ${(props: { isOpen: boolean }) =>
      props.isOpen ? 'blur(10px)' : 'none'};

    transition: var(--transition);

    ol {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      position: fixed;
      padding: 2rem;
      top: 0;

      transition: var(--transition);
      right: ${(props: { isOpen: boolean }) => (props.isOpen ? '0' : '-300px')};

      background-color: var(--bgColor);
      width: 300px;
      height: 100%;

      li {
        list-style: none;
        margin: 2rem;
      }

      a {
        margin: 1rem;
        cursor: pointer;
        transition: var(--transition);

        &:hover {
          color: var(--accent1);
        }
      }
    }
  }
`

function Menu() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <StyledMenu>
      <button
        style={{ cursor: 'pointer' }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <IconMenu />
      </button>
      <StyledSidebar isOpen={openMenu}>
        <ol>
          {NAVLINKS &&
            NAVLINKS.map((navLink, i) => (
              <li key={i}>
                <a
                  href={navLink.link}
                  rel='noreferrer'
                  onClick={() => setOpenMenu(false)}
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          <li>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid',
                borderRadius: '8px',
                padding: '0.8rem 1.2rem',
              }}
              href={RESUME}
              target='_blank'
              rel='noreferrer'
            >
              Resume
            </a>
          </li>
        </ol>
      </StyledSidebar>
    </StyledMenu>
  )
}

export default Menu
