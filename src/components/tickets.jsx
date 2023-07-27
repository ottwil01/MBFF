import { Flex, Box, Text } from "@chakra-ui/react";
import { LeftSideBar } from "./util";


function Tickets() {
  return (
    <Flex>
      <LeftSideBar />
      <ticketContainer />
    </Flex>
  )
}

function ticketContainer() {
  return (
    <Flex
          w={"full"}
          minH={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          gap={4}
          id="tickets"
          bg="brand.green"
        >
        <Text className={"stretchpro"} fontSize={"6xl"} fontWeight={"extrabold"} color={"white"}>
        Tickets
      </Text>
        <Box
          border={"4px"}
          borderRadius={"full"}
          maxWidth={"max-content"}
          whiteSpace={"nowrap"}
          px={3}
          color={"white"}
        >
        buy tickets
        </Box>
      </Flex>
  );
}

export default Tickets