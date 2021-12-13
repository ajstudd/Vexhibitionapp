import {
  chakra,
  Box,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
  Stack
} from "@chakra-ui/react";

function Content() {
  return (
    <Box>
      <HStack px={6} py={6} shadow="base" bg="white">
        <Heading size="lg">Vexhibition</Heading>
        <Spacer />
        <HStack spacing={4} color="blackAlpha.400">
          <Text color="black">Home</Text>
          <Text>Portfolio</Text>
          <Text>Contact us</Text>
          <Text>About us</Text>
          <Text>Gallery</Text>
        </HStack>
      </HStack>

      <SimpleGrid maxW="1616px" m="0 auto" columns={8} px={16} w="full">
        <GridItem colSpan={4} mt={12} d="flex">
          <Box position="relative">
            <Heading
              textTransform="capitalize"
              fontWeight="semibold"
              size="3xl"
              lineHeight={1.3}
            >
              a picture is a poem without words
              <chakra.span ml={6} fontSize="md">
                - Horace
              </chakra.span>
            </Heading>
          </Box>
        </GridItem>

        <GridItem colStart={7} mt={12}>
          <Heading size="lg" fontWeight="normal">
            Partership
          </Heading>
          <Text mt={2} opacity={0.3}>
            Get in touch with us
          </Text>
        </GridItem>

        <GridItem colStart={8} mt={12}>
          <Stack opacity={0.3} spacing={4}>
            <Text>Email us</Text>
            <Text>Instagram</Text>
            <Text>Twitter</Text>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Content;
