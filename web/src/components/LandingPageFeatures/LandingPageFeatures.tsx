import { Box, Heading, Stack, VStack } from '@chakra-ui/react'

import LandingPageFeatureCard from '../LandingPageFeatureCard/LandingPageFeatureCard'
const LandingPageFeatures = () => {
  return (
    <Box>
      <VStack>
        <Heading>Feature packed</Heading>
        <Stack gap="sm">
          <LandingPageFeatureCard />
          <LandingPageFeatureCard />
          <LandingPageFeatureCard />
          <LandingPageFeatureCard />
        </Stack>
        <Heading>And more to come</Heading>
        <Box
          style={{
            WebkitMaskImage: 'linear-gradient(black, transparent 90%)',
            zIndex: -1,
          }}
        >
          <Stack gap={'sm'}>
            <LandingPageFeatureCard />
            <LandingPageFeatureCard />
            <LandingPageFeatureCard />
            <LandingPageFeatureCard />
          </Stack>
        </Box>
      </VStack>
    </Box>
  )
}

export default LandingPageFeatures
