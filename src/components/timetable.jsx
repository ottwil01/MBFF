import { Flex, Text, Image } from "@chakra-ui/react";
import { LeftSideBar } from "./util";

function Timetable() {
  return (
    <Flex>
      <LeftSideBar />
      <timetableContainer />
    </Flex>
  )
}

function timetableContainer() {
    return (
      <Flex
            w={"full"}
            minH={"100vh"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={4}
            id="timetable"
            bg="brand.red"
          >
          <Text className={"stretchpro"} fontSize={"6xl"} fontWeight={"extrabold"} color={"white"}>
          Timetable
        </Text>
        <Flex>
          <Image src={"https://placekeanu.com/700/500"} alt="timetable" />
        </Flex>
      </Flex>
    );
  }

export default Timetable