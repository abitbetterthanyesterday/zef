// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LandingPageFab> = (args) => {
//   return <LandingPageFab {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LandingPageFab from './LandingPageFab'

export const generated = () => {
  return <LandingPageFab />
}

export default {
  title: 'Components/LandingPageFab',
  component: LandingPageFab,
} as ComponentMeta<typeof LandingPageFab>
