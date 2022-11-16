import { render } from '@redwoodjs/testing/web'

import LandingPageFooter from './LandingPageFooter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingPageFooter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageFooter />)
    }).not.toThrow()
  })
})
