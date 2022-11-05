import { render, screen } from '@redwoodjs/testing/web'

import { sellPointsContent } from './content'
import LandingPageSellPointsList from './LandingPageSellPointsList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingPageSellPointsList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageSellPointsList />)
    }).not.toThrow()
  })

  it('should render the all the content', () => {
    render(<LandingPageSellPointsList />)

    for (const { title } of sellPointsContent) {
      expect(screen.getByText(title)).toBeInTheDocument()
      //FIXME how to espace characters?
      // for (const sentence of content) {
      // expect(screen.getByText(sentence)).toBeInTheDocument()
      // }
    }
  })
})
