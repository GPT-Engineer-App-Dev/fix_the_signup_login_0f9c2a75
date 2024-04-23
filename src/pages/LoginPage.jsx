import { Box, FormControl, FormLabel, Input, Button, VStack, Text, Divider } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Box>
      <VStack spacing={6} my={8}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button size="lg" colorScheme="blue" w="full" mt={4} boxShadow="md">
          Log In
        </Button>
        <Text>Or log in with:</Text>
        {/* Add SSO options */}
        <Button size="lg" colorScheme="red" w="full" mt={4} boxShadow="md">
          Google
        </Button>
        <Button size="lg" colorScheme="facebook" w="full" mt={4} boxShadow="md">
          Facebook  
        </Button>
        <Divider />
        <Text>Don't have an account? <a href="/signup">Sign up</a></Text>
      </VStack>
    </Box>
  );
};

export default LoginPage;