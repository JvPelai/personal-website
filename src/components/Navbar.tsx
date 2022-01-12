import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box marginY={5}>
      <Breadcrumb spacing={2} separator={''}>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
            href="#home"
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
            href="#experience"
            bg={useColorModeValue('gray.100', 'gray.800')}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            borderRadius={5}
            padding={2}
          >
            Experience
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            href="#contact"
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
