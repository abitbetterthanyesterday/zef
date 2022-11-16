import { render } from '@redwoodjs/testing/web'

import LogoV1 from './LogoV1'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LogoV1', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LogoV1 />)
    }).not.toThrow()
  })
})
