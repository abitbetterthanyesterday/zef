import { render } from '@redwoodjs/testing/web'

import LandingPageFab from './LandingPageFab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingPageFab', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageFab />)
    }).not.toThrow()
  })
})
