import { Box, Button, Flex, Input } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import LandingPageFab from 'src/components/LandingPageFAB/LandingPageFab'
import LandingPageHero from 'src/components/LandingPageHero/LandingPageHero'
import LandingPageSellPointsList from 'src/components/LandingPageSellPointsList/LandingPageSellPointsList'

const HomePage = () => {
  return (
    <Box as="main">
      <MetaTags
        title="Zefo"
        description="The no BS second hand paragliding marketplace"
      />
      <LandingPageHero />
      <LandingPageFab />
      <LandingPageSellPointsList />
    </Box>
  )
}

export default HomePage
