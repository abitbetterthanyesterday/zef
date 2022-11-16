import { Button, Flex } from '@chakra-ui/react'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'

const LandingPageFab = () => {
  return (
    <Flex position={'sticky'} top={'90vh'} justifyContent={'center'} zIndex={3}>
      <Button
        backgroundColor={'yellow.300'}
        border={'2px'}
        size="lg"
        leftIcon={<RocketLaunchIcon height={24} />}
      >
        Let me in
      </Button>
    </Flex>
  )
}

export default LandingPageFab
