import React from "react";
import {
  Link as ChakraLink,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
import {Logo} from "../components/general/Logo"


const LandingNavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo color="white" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle} >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box >
  );
};

const MenuItem = ({ children, link, ...rest }) => {
  return (
    <ChakraLink>
      <Link href={link} passHref={true} >
        <Text bg="white"
          color="black" display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </ChakraLink>
  );
};

const MenuLinks = ({ isOpen }) => {

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[2, 6]}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        bg="white"
        color="black"
        py={[4, 4, 0, 0]}
      >
        <MenuItem link="/talent">Hire Talent</MenuItem>
        <MenuItem link="/jobs">Get Hired </MenuItem>
        
        <Button
          size="sm"
          color="white"
          bg="blue.400"
          onClick={() => {}}
        >
          <Text>Launch App</Text>
        </Button>

      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Grid
      as="nav"
      position={["absolute", "unset"]}
      w="100%"
      zIndex="100"
      bg="white"
      color="black"
      shadow="md"
      templateColumns={["repeat(3, 1fr)", "repeat(5, 1fr)"]}
    >
      <GridItem colSpan={[0, 1]} />


      <GridItem colSpan={3} >
        <Flex
          p={4}
          wrap="wrap"
          align="center"
          justify="space-between"
          bg="white"
          color="black"
          minH={["7vh", "7vh"]}

          {...props}
        >
          {children}
        </Flex>
      </GridItem>
      <GridItem colSpan={[0, 1]} />
    </Grid>
  );
};

export default LandingNavBar;