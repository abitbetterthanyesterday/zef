import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'

import LogoV1 from '../LogoV1/LogoV1'
const LandingPageHero = () => {
  return (
    <Box as="section">
      <Flex
        height={'100vh'}
        paddingBottom={16}
        paddingX={8}
        position="relative"
      >
        <Flex
          zIndex={1}
          flexGrow={1}
          direction="column"
          justifyContent={'center'}
          alignItems={'center'}
          gap={8}
        >
          <Heading size="4xl">Zefo</Heading>
          <Heading size="2xl">
            The zero bullsh*t paragliding marketplace
          </Heading>
          <InputGroup>
            <Input
              borderRadius={'xl'}
              border={'2px'}
              borderColor={'gray.900'}
            />
            <InputRightElement>🔍</InputRightElement>
          </InputGroup>
          <Button
            shadow="sm"
            size="lg"
            leftIcon={<span>🚀</span>}
            border={'2px'}
            backgroundColor={'yellow.300'}
          >
            Post an ad
          </Button>
        </Flex>
        <Box height={80} width={80} position="absolute" zIndex={0} bottom={12}>
          <LogoV1 />
        </Box>
      </Flex>
    </Box>
  )
}

export default LandingPageHero
