import { Box, Container } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'
import LandingPageHero from 'src/components/LandingPage/LandingPageHero/LandingPageHero'
import LandingPageFab from 'src/components/LandingPageFAB/LandingPageFAB'
import LandingPageFeatures from 'src/components/LandingPageFeatures/LandingPageFeatures'
import LandingPageFooter from 'src/components/LandingPageFooter/LandingPageFooter'
import LandingPageSellPointsList from 'src/components/LandingPageSellPointsList/LandingPageSellPointsList'

const LandingPage = () => {
  return (
    <>
      <MetaTags
        title="Zefo"
        description="The no BS second hand paragliding marketplace"
      />

      <Box
        position={'relative'}
        backgroundImage={'logo-bg-2.png'}
        backgroundSize={'32rem'}
      >
        <Container as="main">
          <LandingPageHero />
          <LandingPageFab />
          <LandingPageSellPointsList />
          <LandingPageFeatures />
        </Container>
        <LandingPageFooter />
      </Box>
    </>
  )
}

export default LandingPage
