export interface SellPointContent {
  priority?: number
  title: string
  content: string[]
}

export const sellPointsContent: SellPointContent[] = [
  {
    title: 'Mi casa es su casa,your data is your data',
    content: [
      'We don’t collect your data. Zefo’s job, is simply to list your ad and let people see it. No more, no less.',
    ],
  },
  {
    title: 'No fuss to post ads.',
    content: ['No account ? No problem. We can sort that later.'],
  },
  {
    title: 'Open sourced. Free. Forever.',
    content: [
      'Zefo is free and open source, and will remain free and open source.',
    ],
  },
  {
    title: 'Ads? Yeah, nah, stuff that.',
    content: ['No ads. Period.'],
  },
  {
    title: 'For paragliders, by paragliders.',
    content: [
      'Don’t miss opportunities because you have entered the wrong keyword. Zefo is for paragliding only, which means that it is tailored for paragliding. ',
    ],
  },
  {
    title: 'Scammers, get out!',
    content: [
      'If a post looks fishy, we remove it. Zero tolerance for that crap.',
    ],
  },
]
