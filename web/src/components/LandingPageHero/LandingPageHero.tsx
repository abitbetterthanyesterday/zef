import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  VStack,
} from '@chakra-ui/react'
import { MagnifyingGlassIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import { navigate, routes } from '@redwoodjs/router'

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
          alignItems={'stretch'}
          gap={8}
        >
          <Box position={'relative'} alignSelf={'center'}>
            <Heading fontSize={'12rem'}>Zefo</Heading>
            <Box
              position="absolute"
              top={['-30%', '-20%']}
              left={['50%', '-15rem']}
              zIndex={-1}
            >
              <LogoV1 />
            </Box>
          </Box>
          <Heading size="2xl">
            The zero bullsh*t paragliding marketplace
          </Heading>
          <Flex alignItems="stretch">
            <InputGroup flexGrow={1}>
              <Input
                borderRadius={'xl'}
                border={'2px'}
                borderColor={'gray.900'}
                background={'white'}
                size={'lg'}
                paddingY={2}
                paddingRight="10rem"
              />
              <InputRightElement
                width="min-content"
                display={['none', 'inline-flex']}
              >
                <Button
                  h="2.5rem"
                  size="lg"
                  marginTop="2"
                  marginRight=".25rem"
                  borderRadius={'lg'}
                  leftIcon={<MagnifyingGlassIcon height={24} width={24} />}
                  background={'yellow.300'}
                  border={'2px'}
                >
                  Search
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
          <VStack
            flexDirection={'column'}
            gap={8}
            width="max-content"
            alignSelf={'center'}
            alignItems={'stretch'}
          >
            <Button
              display={['flex', 'none']}
              size="lg"
              borderRadius={'lg'}
              leftIcon={<MagnifyingGlassIcon height={24} width={24} />}
              background={'yellow.300'}
              border={'2px'}
              shadow="sm"
              backgroundColor={'yellow.300'}
            >
              Search
            </Button>
            <Spacer display={['auto', 'none']} />
            <Button
              shadow="sm"
              size="lg"
              leftIcon={<NewspaperIcon height={24} width={24} />}
              border={'2px'}
              backgroundColor={'yellow.300'}
              onClick={() => navigate(routes.home())}
            >
              Post an ad
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default LandingPageHero
