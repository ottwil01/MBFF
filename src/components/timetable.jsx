import { Flex, Text, Image } from "@chakra-ui/react"
import { SideBar } from "./util"
import timetableh from "/timetable-h.png"
import timetablev from "/timetable-v.png"


function Timetable() {
  return (
    <Flex id="Timetable" zIndex={1} flexDir={"row"}>
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
          bg="brand.red"
        >
          <Text textAlign="center" w="100%" mt="15px" className={"stretchpro"} fontSize={["12vw", "12vw", "10vw", "8xl"]} fontWeight={"extrabold"} color={"white"}>
          Timetable
          </Text>
        <Flex mb="20px" mx="20px" maxW="100%" objectFit={"cover"} justifyContent={"center"}>
          <Image  w="90%" display={["none", "none", "none", "flex", "flex"]} src={[timetableh]} boxSize={"max-content"} alt="horizontal-timetable"/>
          <Image w="90%" display={["flex", "flex", "flex", "none", "none"]} src={[timetablev]} alt="vertical-timetable" />
        </Flex>
      </Flex>
    );
  }

export default Timetable