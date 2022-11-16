import {
  Box,
  Button,
  Flex,
  IconButton,
  IconButtonProps,
  VStack,
} from '@chakra-ui/react'
import {
  HomeIcon,
  MagnifyingGlassIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline'

type NavigationLayoutProps = {
  children?: React.ReactNode
}

type NavButton = Pick<IconButtonProps, 'icon'> & {
  label: string
  ariaLabel: IconButtonProps['aria-label']
}

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  const navButtonStyle = {
    variant: 'ghost',
  }
  const mobileNavButtons: NavButton[] = [
    { icon: <HomeIcon />, ariaLabel: 'home', label: 'home' },
    { icon: <MagnifyingGlassIcon />, ariaLabel: 'search ads', label: 'search' },
    { icon: <NewspaperIcon />, ariaLabel: 'post an ad', label: 'post an ad' },
  ]
  return (
    <VStack minH={'100vh'} alignItems="stretch">
      <Box flexGrow={1}>{children}</Box>
      <Flex
        as="nav"
        flexShrink={0}
        position="sticky"
        bottom={0}
        justifyContent="space-evenly"
      >
        {mobileNavButtons.map(({ icon, label, ariaLabel }, idx) => (
          <Button
            aria-label={ariaLabel}
            key={idx}
            {...navButtonStyle}
          />
            {icon}
            {label}
          </Button>
        ))}
      </Flex>
    </VStack>
  )
}

export default NavigationLayout
