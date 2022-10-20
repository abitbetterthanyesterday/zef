import { Box, Button, Flex } from '@chakra-ui/react'

const LandingPageFab = () => {
  return (
    <Box as="section">
      <Flex position={'sticky'} top={'90vh'} justifyContent={'center'}>
        <Button size="lg">Let me in</Button>
      </Flex>
    </Box>
  )
}

export default LandingPageFab
