import { render, screen } from '@redwoodjs/testing/web'

import { featuresContent } from './content'
import LandingPageFeaturesList from './LandingPageFeaturesList'

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
