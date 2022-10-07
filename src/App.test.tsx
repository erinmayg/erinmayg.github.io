import React from 'react'
import { render, screen } from '@testing-library/react'
import Nav from './components/Nav'
import Hero from './components/sections/Hero'

test('Nav render test', () => {
  render(<Nav />)
  expect(screen.getByText(/about/i)).toBeInTheDocument()
  expect(screen.getByText(/experience/i)).toBeInTheDocument()
  expect(screen.getByText(/work/i)).toBeInTheDocument()
})

test('Hero render test', () => {
  render(<Hero />)
  expect(screen.getByText(/Hi, my name is/i)).toBeInTheDocument()
  expect(screen.getByText(/Erin May/i)).toBeInTheDocument()
})
