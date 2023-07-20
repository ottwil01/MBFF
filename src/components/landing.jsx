import { Flex, Text, Image, Box, Spacer, Show, Hide } from "@chakra-ui/react";

import mbLogo from "../assets/merri-bek.png"
import vicLogo from "../assets/vic-gov.png"
import bunk from "../assets/bunk-puppets.png"
import redStar from "../assets/red-star.png"
import puppet from "../assets/puppet-crop.png"
import { useState } from "react";

const logos = [mbLogo, vicLogo, bunk]
const things = ["Theatre", "Music", "Dance", "Workshops", "Installations", "VR"]

function Landing() {
  const [h, setH] = useState(window.innerHeight)

  return (
    <Flex flexDir={["column", null, "row-reverse"]} height="1px" minH="calc(100vh)" overflowX={"clip"}>
      <ImageBox />
      <InfoBox />
    </Flex>
  )
}

function ImageBox() {
  return (
    <Flex w={["100%", null, "60%"]} height="100%" bg='black' px={8} py={6} alignItems={"center"} justifyContent={"space-between"}>
      <Flex flexDir={"column"} color="white" alignItems={"start"} justifyContent={"center"}>
        {things.map((thing) => {
          return <Text className="stretchpro" fontSize={['xl', null, "4xl", "4xl", "5xl"]} color="brand.yellow">{thing}</Text>
        })}
        <Box position={"relative"} boxSize={["160px", null, "300px"]}>
          <Image src={redStar} />
          <Text className="faktum" pos={"absolute"} top="64px" transform={"rotate(-20deg)"}>Here's the text. It's cool</Text>
        </Box>
      </Flex>
      <Image src={puppet} boxSize={"340px"} objectFit={"contain"} />
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
      <Flex w={["70%", null, "100%"]}>
        {logos.map((logo) => {
          return <Image src={logo} w={1 / 3} />
        })}
      </Flex>
    </Flex >
  )
}

export default Landing
