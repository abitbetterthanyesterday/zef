import { Center, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { FireIcon } from '@heroicons/react/24/outline'

const LandingPageFeatureCard = () => {
  return (
    <Flex
      border={'2px'}
      borderRadius={'xl'}
      overflow={'hidden'}
      background={'white'}
    >
      <Center
        flexGrow={0}
        padding={4}
        alignItems={'center'}
        justifyContent="center"
        background={'yellow.300'}
      >
        <FireIcon height={24} />
      </Center>
      <VStack
        alignItems={'flex-start'}
        borderLeft={'2px'}
        padding={4}
        background={'white'}
      >
        <Heading size="sm">Feature name</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </VStack>
    </Flex>
  )
}

export default LandingPageFeatureCard
