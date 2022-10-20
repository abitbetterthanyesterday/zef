import { Button, Flex } from '@chakra-ui/react'

const LandingPageFab = () => {
  return (
    <Flex position={'sticky'} top={'90vh'} justifyContent={'center'} zIndex={3}>
      <Button backgroundColor={'yellow.300'} border={'2px'} size="lg">
        Let me in
      </Button>
    </Flex>
  )
}

export default LandingPageFab
