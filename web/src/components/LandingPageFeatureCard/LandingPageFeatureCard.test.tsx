import { render, screen } from '@redwoodjs/testing/web'

import LandingPageFeatureCard from './LandingPageFeatureCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingPageFeatureCard', () => {
  const defaultProps = { title: 'hello', content: ['world', 'and', 'zefo'] }
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPageFeatureCard {...defaultProps} />)
    }).not.toThrow()
  })

  it('should render the title, and the content', () => {
    render(<LandingPageFeatureCard {...defaultProps} />)

    expect(
      screen.getByRole('heading', { name: new RegExp(defaultProps.title, 'i') })
    ).toBeInTheDocument()

    for (const sentence of defaultProps.content) {
      expect(screen.getByText(new RegExp(sentence, 'i'))).toBeInTheDocument()
    }
  })
})
