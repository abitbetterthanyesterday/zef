// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LandingPageFeatures> = (args) => {
//   return <LandingPageFeatures {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LandingPageFeatures from './LandingPageFeatures'

export const generated = () => {
  return <LandingPageFeatures />
}

export default {
  title: 'Components/LandingPageFeatures',
  component: LandingPageFeatures,
} as ComponentMeta<typeof LandingPageFeatures>
