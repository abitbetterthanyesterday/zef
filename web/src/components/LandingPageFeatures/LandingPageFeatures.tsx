import { Box, Heading, Stack, VStack } from '@chakra-ui/react'

import LandingPageFeatureCard from '../LandingPageFeatureCard/LandingPageFeatureCard'
const LandingPageFeatures = () => {
  return (
    <Box>
      <VStack>
        <Heading>Feature packed</Heading>
        <Stack>
          <LandingPageFeatureCard />
        </Stack>
      </VStack>
    </Box>
  )
}

export default LandingPageFeatures
