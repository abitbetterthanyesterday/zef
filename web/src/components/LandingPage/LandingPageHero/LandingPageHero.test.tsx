import { render } from '@redwoodjs/testing/web'

import LandingPageHero from './LandingPageHero'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingPageHero', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageHero />)
    }).not.toThrow()
  })
})
