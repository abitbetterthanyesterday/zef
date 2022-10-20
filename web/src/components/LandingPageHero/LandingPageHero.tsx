import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
const LandingPageHero = () => {
  return (
    <Box as="section">
      <Flex
        height={'100vh'}
        direction="column"
        justifyContent={'center'}
        alignItems={'center'}
        paddingBottom={16}
        gap={8}
        paddingX={8}
      >
        <Box background={'yellow.200'} height={80} width={80} />
        <InputGroup>
          <Input borderRadius={'xl'} border={'2px'} borderColor={'gray.900'} />
          <InputRightElement>🔍</InputRightElement>
        </InputGroup>
        <Button
          size="lg"
          leftIcon={<span>🚀</span>}
          border={'2px'}
          backgroundColor={'yellow.300'}
        >
          Post an ad
        </Button>
      </Flex>
    </Box>
  )
}

export default LandingPageHero
