import { Flex, Box, Text, Spacer, Button, Link} from "@chakra-ui/react"
import { LeftSideBar } from "./util"


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
      minH={["calc(100vh - 70px)", "calc(100vh - 70px)", "calc(100vh - 140px)", "calc(100vh - 140px)"]}
      alignItems={"center"}
      justifyContent={"start"}
      direction={"column"}
      id="Tickets"
      bg="brand.green"
    >
      <Text textAlign="center" w="100%" mt="15px" className={"stretchpro"} fontSize={["12vw", "12vw", "10vw", "8xl"]} fontWeight={"extrabold"} color={"white"}>
      Tickets
      </Text>
      <Box px="1vw" w="80%" color={"white"} className="faktum-bold" fontSize={["20", "23", "25"]} maxW={"1200px"}>
        <Text textAlign={"center"}>
        All events hosted in the library are free for all audiences.
        <br/><br/>
        Families can purchase low cost single-day, or weekend tickets to access all events occuring in the Town Hall, The Atrium and the Counihan Gallery.
        </Text>
      <Spacer />
      </Box>
      <Flex my="10px" h="50%" alignItems={"center"} justifyContent={"center"}>
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
              Get Tickets
            </Text>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Tickets