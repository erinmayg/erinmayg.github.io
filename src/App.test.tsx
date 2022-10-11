import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from './components/sections/Hero'

test('Hero render test', () => {
  render(<Hero />)
  expect(screen.getByText(/Hi, my name is/i)).toBeInTheDocument()
  expect(screen.getByText(/Erin May/i)).toBeInTheDocument()
})
