import { Flex, Text, Image, IconButton } from "@chakra-ui/react"
import mbLogo from "/merri-bek1.png"
import vicLogo from "/vic-gov1.png"
import bunk from "/bunk-puppets1.png"
import redStar from "/red-star.png"
import puppet from "/puppet-crop.png"
import { SideBar } from "./util"
import { motion } from "framer-motion"

const logos = [mbLogo, vicLogo, bunk]
const things = ["Theatre", "Music", "Dance", "Workshops", "Installations", "VR"]

function Landing() {
  return (
    <Flex zIndex={1} justifyContent="space-between" flexDir={["column", "column", "row-reverse", "row-reverse"]} overflowX={"clip"} id="Home" mt={["70px", "70px", "140px"]}>
      <SideBar bg="brand.red" display={["none", "none", "none", "flex", "flex"]} />
      <ImageBox />
      <InfoBox />
    </Flex>
  )
}

function ImageBox() {
  return (
    <Flex w={["100%", "100%", "60%"]} maxH="100%" bg="black" px={8} py={6} alignItems={"center"} justifyContent={"space-between"}>
      <Flex flexDir={"column"} color="white">
        <Flex w="100%" flexDirection={"column"} justifyContent={"space-between"}>
        {things.map((thing, index) => {
            return <Text key={index} className="stretchpro" fontSize={['5vw', "5.4vw", "3vw", "3vw"]} color="brand.yellow">{thing}</Text>
          })}
        </Flex>
        <Flex justifyContent={"center"}>
          <motion.div animate={{ rotate: [-5, 5, -5], scale: [1, 1.2, 1] }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, }}>
            <IconButton
              as="a"
              boxSize={"auto"}
              aria-label="get-tickets"
              icon={<RedStar boxSize={"fitcontent"} />}
              isRound={true}
              target="_blank"
              variant="unstlyed"
              href="https://events.humanitix.com/mbff"
            />
          </motion.div>
        </Flex>
      </Flex>
      <Image src={puppet} h={["88vw", "90vw", "60vw", "55vw"]} objectFit={"contain"}/>
    </Flex>
  )
}

function RedStar() {
  return (
    <Flex pos={"relative"} alignSelf="center" boxSize={["160px", "230px", "200px", "250px"]}>
    <Image src={redStar} />
    <Text className="faktum" fontSize={["20", "27", "25", "30"]} align="center" pos={"fixed"} mt={["53px", "80px", "66px", "85px"]} ml={["37px", "57px", "45px", "60px"]} transform={"rotate(-15deg)"} >Get<br/>Tickets</Text>
    </Flex> 
  )
}


function InfoBox() {
  return (
    <Flex w={["100%", "100%", "40%"]} maxH="100%" bg='brand.green' flexDir={"column"} color="white" px={8} pt={14} justifyContent={"space-between"} gap={4} fontSize={["4vw","4vw", "2vw"]}>
      <Text verticalAlign={"top"} className="faktum-bold" w="100%">
        High quality art for the whole family, and either low-cost or free!
        <br/><br/>
        Running from the Brunswick Library, Brunswick Town Hall and Counihan Gallery from September 18th - 24th.
        <br/><br/>
        The Merri-bek Family Festival is the latest endeavour from local theatre company Bunk Puppets, supported by Merri-bek City Council and the State Government.
      </Text>
      <Flex w="100%" ml="1.1em" alignSelf={"center"}>
        {logos.map((logo, index) => {
          return <Image key={index} src={logo} w={1 / 3} />
        })}
      </Flex>
    </Flex>
  )
}

export default Landing