import type { ComponentMeta } from '@storybook/react'

import PostAdPage from './PostAdPage'

export const generated = () => {
  return <PostAdPage />
}

export default {
  title: 'Pages/PostAdPage',
  component: PostAdPage,
} as ComponentMeta<typeof PostAdPage>
