import { Center, Flex, Heading, Text, VStack } from '@chakra-ui/react'

const LandingPageFeatureCard = () => {
  return (
    <Flex border={'2px'} borderRadius={'xl'} overflow={'hidden'}>
      <Center
        flexGrow={0}
        padding={4}
        alignItems={'center'}
        justifyContent="center"
        background={'yellow.300'}
      >
        🚀
      </Center>
      <VStack alignItems={'flex-start'} borderLeft={'2px'} padding={4}>
        <Heading size="sm">Feature name</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </VStack>
    </Flex>
  )
}

export default LandingPageFeatureCard
