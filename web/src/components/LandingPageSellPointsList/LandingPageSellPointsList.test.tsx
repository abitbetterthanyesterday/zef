import { render, screen } from '@redwoodjs/testing/web'

import { sellPointsContent } from './content'
import LandingPageSellPointsList from './LandingPageSellPointsList'

describe('LandingPageSellPointsList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageSellPointsList />)
    }).not.toThrow()
  })

  it('should render the all the content', () => {
    render(<LandingPageSellPointsList />)

    for (const { title, content } of sellPointsContent) {
      expect(screen.getByText(title)).toBeInTheDocument()
      for (const sentence of content) {
        expect(screen.getByText(sentence)).toBeInTheDocument()
      }
    }
  })
})
