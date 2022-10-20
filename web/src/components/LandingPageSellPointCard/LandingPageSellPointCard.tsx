import { Box, Heading, Text, VStack } from '@chakra-ui/react'
const LandingPageSellPointCard = () => {
  return (
    <VStack
      flexGrow={1}
      w={'100%'}
      alignItems={'stretch'}
      padding={4}
      borderRadius={'xl'}
      border={'2px'}
    >
      <Heading>Heading</Heading>
      <Box
        h={2}
        border={'2px'}
        borderRadius={'full'}
        background={'yellow.300'}
      />
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde
        dolores ad, molestias quaerat, dolorem consequuntur, nemo eaque fugit
        eveniet quo molestiae! Soluta quo temporibus aspernatur saepe deserunt
        quas incidunt.
      </Text>
    </VStack>
  )
}

export default LandingPageSellPointCard
