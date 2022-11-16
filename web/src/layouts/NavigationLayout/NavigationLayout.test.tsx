import { render, screen } from '@redwoodjs/testing/web'

import NavigationLayout, { mobileNavButtons } from './NavigationLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NavigationLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationLayout />)
    }).not.toThrow()
  })

  it('renders the right buttons', () => {
    render(<NavigationLayout />)

    mobileNavButtons.map(({ label }) => {
      expect(
        screen.getByRole('button', { name: new RegExp(label, 'i') })
      ).toBeInTheDocument()
    })
  })
})
