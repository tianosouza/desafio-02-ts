import { Box, Flex } from "@chakra-ui/react";
import { Card } from "../components/Card/Card";

export const Home = () => {
  return (
    <Flex>
      <Box minHeight="100vh" backgroundColor="black" minWidth="100vw">
        <Card />
      </Box>
    </Flex>
  );
};
