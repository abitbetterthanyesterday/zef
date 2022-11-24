import { render } from '@redwoodjs/testing/web'

import PostAdPage from './PostAdPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PostAdPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostAdPage />)
    }).not.toThrow()
  })
})
