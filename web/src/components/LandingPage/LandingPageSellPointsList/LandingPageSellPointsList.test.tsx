import { render } from '@redwoodjs/testing/web'

import LandingPageSellPointsList from './LandingPageSellPointsList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingPageSellPointsList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageSellPointsList />)
    }).not.toThrow()
  })
})
