import { render } from '@redwoodjs/testing/web'

import LandingPageFeatureCard from './LandingPageFeatureCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingPageFeatureCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageFeatureCard />)
    }).not.toThrow()
  })
})
