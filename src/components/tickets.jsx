import { Flex, Box, Text, Spacer, Button, Link} from "@chakra-ui/react";
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
          id="Tickets"
          bg="brand.green"
        >
        <Text textAlign="center" w="100%" mt="15px" className={"stretchpro"} fontSize={["12vw", "12vw", "10vw", "8xl"]} fontWeight={"extrabold"} color={"white"}>
        Tickets
      </Text>
      <Box px="1vw" w="80%" color={"white"} className="faktum-bold" fontSize={["2xl", "3xl", "4xl"]} maxW={"1200px"}>
        <Text textAlign={"center"}>
        All events hosted in the library are free for all audiences.
        <br/><br/>
        Families can purchase low cost single-day, or weekend tickets to access all events occuring in the Town Hall, The Atrium and the Counihan Gallery.
        </Text>
      <Spacer />
      </Box>
      <Flex h="50%" alignItems={"center"} justifyContent={"center"}>
      <Link href="https://events.humanitix.com/mbff" isExternal>
      <Button
          border={"4px"}
          borderRadius={"full"}
          whiteSpace={"nowrap"}
          px={3}
          color={"white"}
          className={"stretchpro"}
          w="100%"
        >
          <Text mt="2px" mx="15px">
            buy tickets
          </Text>
        </Button>
      </Link>
      </Flex>
    </Flex>
  );
}

export default Tickets