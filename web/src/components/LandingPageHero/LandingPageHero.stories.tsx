// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LandingPageHero> = (args) => {
//   return <LandingPageHero {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LandingPageHero from './LandingPageHero'

export const generated = () => {
  return <LandingPageHero />
}

export default {
  title: 'Components/LandingPageHero',
  component: LandingPageHero,
} as ComponentMeta<typeof LandingPageHero>
