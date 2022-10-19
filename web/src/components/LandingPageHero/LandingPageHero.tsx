import { Flex, Button, Box, Input } from '@chakra-ui/react'
const LandingPageHero = () => {
  return (
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
      <Input />
      <Button size="lg">Post an ad</Button>
    </Flex>
  )
}

export default LandingPageHero
