import { Box, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react'

import LandingPageSellPointCard from '../LandingPageSellPointCard/LandingPageSellPointCard'

const LandingPageSellPointsList = () => {
  return (
    <Stack alignItems={'center'} width={'100vw'} padding={4} gap={8}>
      <Heading>Why Zefo?</Heading>
      <LandingPageSellPointCard />
      <LandingPageSellPointCard />
      <LandingPageSellPointCard />
      <LandingPageSellPointCard />
    </Stack>
  )
}

export default LandingPageSellPointsList
