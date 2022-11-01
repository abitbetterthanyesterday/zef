import { Box, Heading, Stack } from '@chakra-ui/react'

import LandingPageSellPointCard from '../LandingPageSellPointCard/LandingPageSellPointCard'

import { sellPointsContent } from './content'

const LandingPageSellPointsList = () => {
  return (
    <Box as="section" paddingBottom={8}>
      <Stack alignItems={'center'} gap={2}>
        <Heading>Why Zefo?</Heading>
        {sellPointsContent.map((content, key) => (
          <LandingPageSellPointCard key={key} {...content} />
        ))}
      </Stack>
    </Box>
  )
}

export default LandingPageSellPointsList
