import { render } from '@redwoodjs/testing/web'

import LandingPageFeatures from './LandingPageFeatures'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingPageFeatures', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageFeatures />)
    }).not.toThrow()
  })
})
