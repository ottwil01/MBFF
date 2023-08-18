import { Flex, Box, Text, Spacer, Button, IconButton} from "@chakra-ui/react"
import { SideBar } from "./util"
import { motion } from "framer-motion"


function Tickets() {
  return (
    <Flex zIndex={1} flexDir={"row"}>
      <SideBar bg="brand.grey" />
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
      flexDir={"column"}
      id="Tickets"
      bg="brand.green"
    >
      <Text textAlign="center" w="100%" mt="15px" className={"stretchpro"} fontSize={["12vw", "12vw", "10vw", "8xl"]} fontWeight={"extrabold"} color={"white"}>
      Tickets
      </Text>
      <Box px="1vw" w="80%" color={"white"} className="faktum-bold" fontSize={["20", "23", "25"]} maxW={"1200px"}>
        <Text textAlign={"center"}>
          Except for our Town Hall Program, all activities and workshops at the Merri-bek Family Festival are completely free!
          <br /><br />
          However, for our workshop series, bookings are essential as space is limited. Reserve your booking via the ticket link.  
          <br /><br />
          All tickets to Town Hall Program are $13 + bf. 
          <br />
          Town Hall Program includes: 
          <br />
          FRITZ - Saturday 23/9/23 10:15am 
          <br />
          Sticks Stones Broken Bones – Saturday 23/9/23 12:15pm & 3pm 
          <br />
          Ultra Galactic Hyper Spacescape – Sunday 24/9/23 From 1pm to 4pm (drop in and out)
        </Text>
      <Spacer />
      </Box>
      <Flex my="10px" h="50%" alignItems={"center"} justifyContent={"center"}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <IconButton
            as="a"
            boxSize={"auto"}
            aria-label="get-tickets"
            icon={<Button
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
                  </Button>}
            target="_blank"
            variant="unstlyed"
            href="https://events.humanitix.com/mbff"
          />
        </motion.div>
      </Flex>
    </Flex>
  );
}

export default Tickets

