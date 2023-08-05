import { Flex, Text, Image } from "@chakra-ui/react"
import mbLogo from "/merri-bek1.png"
import vicLogo from "/vic-gov1.png"
import bunk from "/bunk-puppets1.png"
import redStar from "/red-star.png"
import puppet from "/puppet-crop.png"
import { RightSideBar } from "./util"

const logos = [mbLogo, vicLogo, bunk]
const things = ["Theatre", "Music", "Dance", "Workshops", "Installations", "VR"]

function Landing() {
  return (
    <Flex zIndex={1} flexDir={["column", null, "row-reverse"]} minH="calc(100vh)" overflowX={"clip"} id="landing" mt={["70px", "70px", "140px"]}>
      {/* <RightSideBar display={["none", "none", "flex", "flex"]} /> */}
      <ImageBox />
      {/* <InfoBox /> */}
    </Flex>
  )
}

function ImageBox() {
  return (
    <Flex w={["100%", "100%", "60%"]} h={["35vh", "42vh", "90vh"]} bg="black" px={4} pt={["0", "10"]} alignItems={"center"} justifyContent={"space-between"}>
      <Flex flexDir={"column"} h={["35vh", "42vh", "90vh"]} color="white" alignItems={"start"} justifyContent={"center"}>
        {things.map((thing, index) => {
          return <Text key={index} className="stretchpro" fontWeight="bold" fontSize={["3.3vh", null, "2xl", "4xl", "5xl"]} color="brand.yellow" h="23px">{thing}</Text>
        })}
        <Flex pos={"relative"} alignSelf={"center"} boxSize={["17.5vh", "16vh", "300px"]}>
          <Image src={redStar} />
          <Text className="faktum" fontSize={["1.5vh", "lg", "xl"]} align="center" pos={"absolute"} mt="5.5vh" ml="5vh" transform={"rotate(-15deg)"} >You won't<br/>believe your<br/>eyes</Text>
        </Flex>
      </Flex>
      <Flex >
      <Image src={puppet} boxSize={["34vh", "34vh", "82vh", "82vh"]} objectFit={"contain"} mt={["-8", "none"]} />
      </Flex>
    </Flex>
  )
}

function InfoBox() {
  return (
    <Flex w={["100%", null, "40%"]} h={["55%", "48%", "100%"]} bg='brand.green' flexDir={"column"} color="white" px={8} py={16} alignItems={"center"} gap={4} fontSize={["xl", null, "1xl", "1.5vw"]}>
      <Text verticalAlign={"top"} className="faktum-bold" maxW={'2xl'}>
      High quality art for the whole family, and either low-cost or free!
      <br/><br/>
      Running from the Brunswick Library, Brunswick Town Hall and Counihan Gallery from September 18th - 24th.
      <br/><br/>
      The Merri-bek Family Festival is the latest endeavour from local theatre company Bunk Puppets, supported by Merri-bek City Council and the State Government.

      </Text>
      <Flex w={["90%", null, "100%"]}>
        {logos.map((logo, index) => {
          return <Image key={index} src={logo} w={1 / 3} />
        })}
      </Flex>
    </Flex>
  )
}

export default Landing
