import { Box, Container } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import LandingPageFab from 'src/components/LandingPageFAB/LandingPageFAB'
import LandingPageFeatures from 'src/components/LandingPageFeatures/LandingPageFeatures'
import LandingPageFooter from 'src/components/LandingPageFooter/LandingPageFooter'
import LandingPageHero from 'src/components/LandingPageHero/LandingPageHero'
import LandingPageSellPointsList from 'src/components/LandingPageSellPointsList/LandingPageSellPointsList'

const HomePage = () => {
  return (
    <Box
      position={'relative'}
      backgroundImage={'logo-bg.png'}
      backgroundSize={'32rem'}
    >
      <Container as="main">
        <MetaTags
          title="Zefo"
          description="The no BS second hand paragliding marketplace"
        />
        <LandingPageHero />
        <LandingPageFab />
        <LandingPageSellPointsList />
        <LandingPageFeatures />
      </Container>
      <LandingPageFooter />
    </Box>
  )
}

export default HomePage
