import { Flex, Text, Image, Box } from "@chakra-ui/react"
import mbLogo from "../assets/merri-bek1.png"
import vicLogo from "../assets/vic-gov1.png"
import bunk from "../assets/bunk-puppets1.png"
import redStar from "../assets/red-star.png"
import puppet from "../assets/puppet-crop.png"
import { RightSideBar } from "./util"

const logos = [mbLogo, vicLogo, bunk]
const things = ["Theatre", "Music", "Dance", "Workshops", "Installations", "VR"]

function Landing() {
  return (
    <Flex flexDir={["column", null, "row-reverse"]} height="1px" minH="calc(100vh)" overflowX={"clip"} id="landing" mt="10rem">
      <RightSideBar display={["none", "none", "flex", "flex"]} />
      <ImageBox />
      <InfoBox />
    </Flex>
  )
}

function ImageBox() {
  return (
    <Flex w={["100%", null, "60%"]} height="100%" bg='black' px={8} py={6} alignItems={"center"} justifyContent={"space-between"}>
      <Flex flexDir={"column"} color="white" alignItems={"start"} justifyContent={"center"}>
        {things.map((thing, index) => {
          return <Text key={index} className="stretchpro" fontSize={['xl', null, "4xl", "4xl", "5xl"]} color="brand.yellow">{thing}</Text>
        })}
        <Box pos={"relative"} boxSize={["160px", null, "300px"]} display="flex">
        {/* make display prop dynamic */}
          <Image src={redStar} />
          <Text className="faktum" fontSize={"xl"} pos={"absolute"} mt="98px" ml="100px" transform={"rotate(-15deg)"} >You won't<br></br>believe your<br></br>eyes</Text>
        </Box>
      </Flex>
      <Image src={puppet} boxSize={"750px"} objectFit={"contain"} mt="80px" />
    </Flex>
  )
}

function InfoBox() {
  return (
    <Flex w={["100%", null, "40%"]} height="100%" bg='brand.green' flexDir={"column"} color="white" px={8} py={6} alignItems={"center"} justifyContent={"center"} gap={4} fontSize={["xl", null, "2xl", "3xl", "4xl"]}>
      <Text className="faktum-bold" maxW={'2xl'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /><br />
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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