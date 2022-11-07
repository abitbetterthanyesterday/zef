// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LandingPageSellPointCard> = (args) => {
//   return <LandingPageSellPointCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LandingPageSellPointCard from './LandingPageSellPointCard'

export const generated = () => {
  return <LandingPageSellPointCard />
}

export default {
  title: 'Components/LandingPageSellPointCard',
  component: LandingPageSellPointCard,
} as ComponentMeta<typeof LandingPageSellPointCard>
