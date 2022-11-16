// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LogoV1> = (args) => {
//   return <LogoV1 {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LogoV1 from './LogoV1'

export const generated = () => {
  return <LogoV1 />
}

export default {
  title: 'Components/LogoV1',
  component: LogoV1,
} as ComponentMeta<typeof LogoV1>
