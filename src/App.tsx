import { Box, Flex } from "@chakra-ui/react";
import { Card } from "./components/Card/Card"
function App() {
  return (
    <>
      <Flex>
        <Box minHeight = "100vh" backgroundColor = "black" minWidth = "100vw">
          <Card/>
        </Box>
      </Flex>
    </>
  )
}

export default App;
