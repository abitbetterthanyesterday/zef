import {
  Box,
  Button,
  ButtonProps,
  Flex,
  IconButtonProps,
  VStack
} from '@chakra-ui/react'
import {
  HomeIcon,
  MagnifyingGlassIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline'

type NavigationLayoutProps = {
  children?: React.ReactNode
}

type NavButton = {
  label: string
  icon: ButtonProps['leftIcon']
  ariaLabel: IconButtonProps['aria-label']
  order: number
}

export const mobileNavButtons: NavButton[] = [
  { icon: <HomeIcon />, ariaLabel: 'home', label: 'home', order: 0 },
  {
    icon: <MagnifyingGlassIcon />,
    ariaLabel: 'search ads',
    label: 'search',
    order: 1,
  },
  {
    icon: <NewspaperIcon />,
    ariaLabel: 'post an ad',
    label: 'post an ad',
    order: 2,
  },
]

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <VStack minH={'100vh'} alignItems="stretch">
      <Box flexGrow={1}>{children}</Box>
      <Flex
        as="nav"
        flexShrink={0}
        position="sticky"
        bottom={0}
        justifyContent="space-evenly"
        padding={2}
        background="gray.200"
      >
        {mobileNavButtons
          .sort(({ order: orderA }, { order: orderB }) =>
            orderA > orderB ? 1 : -1
          )
          .map(({ icon, label, ariaLabel }, idx) => (
            <Button
              aria-label={ariaLabel}
              variant="ghost"
              height={'max-content'}
              key={idx}
            >
              <Flex direction={'column'} alignItems="center" padding={2}>
                <Flex
                  height="48px"
                  fontSize={'48px'}
                  width="48px"
                  flexShrink={0}
                >
                  {icon}
                </Flex>
                {label}
              </Flex>
            </Button>
          ))}
      </Flex>
    </VStack>
  )
}

export default NavigationLayout
