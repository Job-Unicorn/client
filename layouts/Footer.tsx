import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Box, Link, Stack, Text, TextProps } from '@chakra-ui/layout'

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Job Unicorn, Inc. All rights reserved.
  </Text>
)

const Logo = (props) => {
  return (
    <Box {...props}>
      <Link href="/">
        <Text fontSize="lg" cursor="pointer" fontWeight="bold" color="black" >
                    Job Unicorn
        </Text>
      </Link>
    </Box>
  );
};

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" href="https://github.com/Job-Unicorn" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" href="https://twitter.com/job_unicorn" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
  </ButtonGroup>
)

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <Logo />
          <SocialMediaLinks />
        </Stack>
        <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
      </Stack>
    </Box>
  )
}

export default Footer
