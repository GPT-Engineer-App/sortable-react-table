import { Container, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const data = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
];

const DataTable = () => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item) => (
          <Tr key={item.id}>
            <Td>{item.id}</Td>
            <Td>{item.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <DataTable />
    </Container>
  );
};

export default Index;
