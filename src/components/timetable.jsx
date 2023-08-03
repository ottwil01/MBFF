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
            id="timetable"
            bg="brand.red"
          >
          <Text mt="15px" className={"stretchpro"} fontSize={"6xl"} fontWeight={"extrabold"} color={"white"}>
          Timetable
        </Text>
        <Flex maxW={"6xl"}>
          {/* <Image src={timetable} alt="timetable" /> */}
        </Flex>
      </Flex>
    );
  }

export default Timetable