// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LandingPageFeatureCard> = (args) => {
//   return <LandingPageFeatureCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LandingPageFeatureCard from './LandingPageFeatureCard'

export const generated = () => {
  return <LandingPageFeatureCard />
}

export default {
  title: 'Components/LandingPageFeatureCard',
  component: LandingPageFeatureCard,
} as ComponentMeta<typeof LandingPageFeatureCard>
