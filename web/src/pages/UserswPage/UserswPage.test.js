import { render } from '@redwoodjs/testing'

import UserswPage from './UserswPage'

describe('UserswPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserswPage />)
    }).not.toThrow()
  })
})
