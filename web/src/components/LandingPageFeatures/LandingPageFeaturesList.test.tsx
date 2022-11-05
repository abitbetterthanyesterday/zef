import { render, screen } from '@redwoodjs/testing/web'

import { featuresContent } from './content'
import LandingPageFeaturesList from './LandingPageFeaturesList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingPageFeatures', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageFeaturesList />)
    }).not.toThrow()
  })

  it('should render the all the content', () => {
    render(<LandingPageFeaturesList />)

    for (const { title, content } of featuresContent) {
      expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument()
      for (const sentence of content) {
        expect(screen.getByText(new RegExp(sentence, 'i'))).toBeInTheDocument()
      }
    }
  })
})
