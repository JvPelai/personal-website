import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box marginY={5} marginX={2}>
      <Breadcrumb spacing={'1em'} separator={''}>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            bg={useColorModeValue('gray.100', 'gray.800')}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            borderRadius={5}
            padding={2}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            bg={useColorModeValue('gray.100', 'gray.800')}
            borderRadius={5}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            padding={2}
          >
            About
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
            href="#"
            bg={useColorModeValue('gray.100', 'gray.800')}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            borderRadius={5}
            padding={2}
          >
            Contact
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export { Navbar };
