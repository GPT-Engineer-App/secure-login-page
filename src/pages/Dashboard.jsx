import React from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={6}>
        Dashboard
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Column 1</Th>
            <Th>Column 2</Th>
            <Th>Column 3</Th>
          </Tr>
        </Thead>
        <Tbody>
          {}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Dashboard;