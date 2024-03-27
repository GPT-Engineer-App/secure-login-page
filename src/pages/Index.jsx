import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, useToast } from "@chakra-ui/react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    if (email === "user@example.com" && password === "password") {
      toast({
        title: "Login Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Invalid Credentials",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg="gray.100">
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            Login
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            </FormControl>
            <FormControl id="password" isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" mt={8} w="full">
              Login
            </Button>
          </form>
          <Text fontSize="sm" textAlign="center" mt={4}>
            Don't have an account? <a href="#">Sign up</a>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;
