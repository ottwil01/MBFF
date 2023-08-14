import { Flex, Text, Image } from "@chakra-ui/react"
import { LeftSideBar } from "./util"
import timetable from "/timetable.png"

function Timetable() {
  return (
    <Flex zIndex={1} flexDir={"row"}>
      <LeftSideBar display={["none", "none", "none", "flex", "flex"]}/>
      <TimetableContainer />
    </Flex>
  )
}

function TimetableContainer() {
    return (
      <Flex
            w={"100%"}
            minH={"80vh"}
            alignItems={"center"}
            justifyContent={"start"}
            flexDirection={"column"}
            gap={10}
            id="Timetable"
            bg="brand.red"
          >
          <Text textAlign="center" w="100%" mt="15px" className={"stretchpro"} fontSize={["12vw", "12vw", "10vw", "8xl"]} fontWeight={"extrabold"} color={"white"}>
          Timetable
        </Text>
        <Flex maxW={"6xl"}>
          <Image src={timetable} alt="timetable" />
        </Flex>
      </Flex>
    );
  }

export default Timetable