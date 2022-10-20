import { Box, Text, Flex, Heading, VStack } from '@chakra-ui/react'

const LandingPageFeatureCard = () => {
  return (
    <Flex border={'2px'}>
      <Box flexGrow={0}>🚀</Box>
      <VStack alignItems={'flex-start'}>
        <Heading>Feature name</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          dignissimos at, ullam quo necessitatibus inventore sit earum sapiente.
        </Text>
      </VStack>
    </Flex>
  )
}

export default LandingPageFeatureCard
