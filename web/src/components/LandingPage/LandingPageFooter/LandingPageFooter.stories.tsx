// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LandingPageFooter> = (args) => {
//   return <LandingPageFooter {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LandingPageFooter from './LandingPageFooter'

export const generated = () => {
  return <LandingPageFooter />
}

export default {
  title: 'Components/LandingPageFooter',
  component: LandingPageFooter,
} as ComponentMeta<typeof LandingPageFooter>
