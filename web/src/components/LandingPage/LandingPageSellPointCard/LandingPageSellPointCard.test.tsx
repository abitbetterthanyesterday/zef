import { render, screen } from '@redwoodjs/testing/web'

import LandingPageSellPointCard from './LandingPageSellPointCard'

describe('LandingPageSellPointCard', () => {
  const defaultProps = { title: 'hello', content: ['world', 'and', 'zefo'] }
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageSellPointCard {...defaultProps} />)
    }).not.toThrow()
  })

  it('should render the title, and the content', () => {
    render(<LandingPageSellPointCard {...defaultProps} />)

    expect(
      screen.getByRole('heading', { name: new RegExp(defaultProps.title, 'i') })
    ).toBeInTheDocument()

    for (const sentence of defaultProps.content) {
      expect(screen.getByText(new RegExp(sentence, 'i'))).toBeInTheDocument()
    }
  })
})
