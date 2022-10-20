import { Box, Heading, Stack } from '@chakra-ui/react'

import LandingPageSellPointCard from '../LandingPageSellPointCard/LandingPageSellPointCard'

const LandingPageSellPointsList = () => {
  return (
    <Box as="section">
      <Stack alignItems={'center'} gap={8}>
        <Heading>Why Zefo?</Heading>
        <LandingPageSellPointCard />
        <LandingPageSellPointCard />
        <LandingPageSellPointCard />
        <LandingPageSellPointCard />
      </Stack>
    </Box>
  )
}

export default LandingPageSellPointsList
