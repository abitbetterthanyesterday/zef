import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { MagnifyingGlassIcon, NewspaperIcon } from '@heroicons/react/24/outline'

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
          <Box position={'relative'}>
            <Heading fontSize={'12rem'}>Zefo</Heading>
            <Box position="absolute" top="-20%" left={'-15rem'} zIndex={-1}>
              <LogoV1 />
            </Box>
          </Box>
          <Heading size="2xl">
            The zero bullsh*t paragliding marketplace
          </Heading>
          <InputGroup>
            <Input
              borderRadius={'xl'}
              border={'2px'}
              borderColor={'gray.900'}
            />
            <InputRightElement>
              <MagnifyingGlassIcon height={24} />
            </InputRightElement>
          </InputGroup>
          <Button
            shadow="sm"
            size="lg"
            leftIcon={<NewspaperIcon height={24} width={24} />}
            border={'2px'}
            backgroundColor={'yellow.300'}
          >
            Post an ad
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default LandingPageHero
