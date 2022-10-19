import { render } from '@redwoodjs/testing/web'

import LandingPageSellPointCard from './LandingPageSellPointCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingPageSellPointCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageSellPointCard />)
    }).not.toThrow()
  })
})
