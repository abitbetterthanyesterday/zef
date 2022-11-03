export interface FeatureContent {
  priority?: number
  title: string
  content: string[]
  isFuture: boolean
}

export const featuresContent: FeatureContent[] = [
  {
    title: 'Auto-stale detection',
    content: ['We purge old, unresponsive ad regularly.'],
    isFuture: false,
  },
  {
    title: 'Mobile-first experience',
    content: ['Because, what else do you do when you wait on the hill?'],
    isFuture: false,
  },
  {
    title: 'Advanced-yet-easy filtering',
    content: ['No more ‘keyword’ guessing. Find what you are after.'],
    isFuture: false,
  },
  {
    title: 'As fast as a Boomerang',
    content: ['Built on modern technologies - Zefo is fast.'],
    isFuture: true,
  },
  {
    title: "Don't call us, we'll call you",
    content: ["Set up notification so you don't miss that deal"],
    isFuture: true,
  },
]
