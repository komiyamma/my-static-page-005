import { render, screen, fireEvent } from '@testing-library/react'
import App from './App.jsx'

describe('App', () => {
  it('renders title and increments counter', async () => {
    render(<App />)
    // title
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('React 19 スターター')
    // button and click
    const btn = screen.getByRole('button', { name: /react count/i })
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
    expect(btn).toHaveTextContent('React Count: 1')
  })
})
