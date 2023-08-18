import { Flex, Text, Image } from "@chakra-ui/react"
import { SideBar } from "./util"
import comingsoon from "/coming-soon.png"

function Timetable() {
  return (
    <Flex zIndex={1} flexDir={"row"}>
      <SideBar bg="brand.grey" />
      <TimetableContainer />
    </Flex>
  )
}

function TimetableContainer() {
    return (
      <Flex
          w="100%"
          minH={["calc(100vh - 70px)", "calc(100vh - 70px)", "calc(100vh - 140px)", "calc(100vh - 140px)"]}
          flexDirection={"column"}
          id="Timetable"
          bg="brand.red"
        >
          <Text textAlign="center" w="100%" mt="15px" className={"stretchpro"} fontSize={["12vw", "12vw", "10vw", "8xl"]} fontWeight={"extrabold"} color={"white"}>
          Timetable
          </Text>
        <Flex w="100%" h="100%" pb="20px" alignItems={"center"} justifyContent={"center"}>
          <Image src={comingsoon} boxSize={"300px"} alt="timetable" />
        </Flex>
      </Flex>
    );
  }

export default Timetable