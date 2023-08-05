import { Flex, Box, Text, Spacer } from "@chakra-ui/react";
import { LeftSideBar } from "./util";


function Tickets() {
  return (
    <Flex zIndex={1} flexDir={"row"}>
      <LeftSideBar display={["none", "none", "none", "flex", "flex"]}/>
      <TicketContainer />
    </Flex>
  )
}

function TicketContainer() {
  return (
    <Flex
          w={"100%"}
          minH={"80vh"}
          alignItems={"center"}
          justifyContent={"start"}
          direction={"column"}
          id="tickets"
          bg="brand.green"
        >
        <Text mt="15px" className={"stretchpro"} fontSize={"6xl"} fontWeight={"extrabold"} color={"white"}>
        Tickets
      </Text>
      <Box color={"white"} className="faktum-bold" fontSize={"2xl"} maxW={'6xl'}>
        <Text align={"center"}>
        All events hosted in the library are free for all audiences.
        <br/><br/>
        Families can purchase low cost single-day, or weekend tickets to access all events occuring in the Town Hall, The Atrium and the Counihan Gallery.
        </Text>
      <Spacer />
      </Box>
      <Flex h="100%" alignItems={"center"} justifyContent={"center"}>
        <Box
          border={"4px"}
          borderRadius={"full"}
          maxWidth={"max-content"}
          whiteSpace={"nowrap"}
          px={3}
          color={"white"}
          className={"stretchpro"}
        >
          <Text mr="15px" ml="15px">
            buy tickets
          </Text>
        </Box>
      </Flex>
      </Flex>
  );
}

export default Tickets