import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import Content from "./Content";

function App() {
  return (
    <Box m="0 auto" maxW="1616px" position="relative" className="app">
      <Box zIndex={1} position="absolute">
        <Content />
      </Box>
      <SimpleGrid
        opacity={0.2}
        top={0}
        zIndex={0}
        columns={4}
        minH="100vh"
        px={16}
        position="absolute"
        w="full"
        maxW="1616px"
        m="0 auto"
      >
        {new Array(4).fill(null).map((_, id) => {
          return (
            <GridItem
              border="1px"
              borderColor="#a6a6a6"
              borderLeft={id > 0 ? "0px" : "1px solid #a6a6a6"}
              borderTop="0px"
              borderBottom="0px"
            ></GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default App;
