import { Flex, Text, Image, IconButton } from "@chakra-ui/react"
import redStar from "/red-star.png"
import puppet from "/puppet-crop.png"
import { SideBar } from "./util"
import { motion } from "framer-motion"

const things = ["Theatre", "Music", "Storytelling", "Workshops", "Installations", "VR"]

function Landing() {
  return (
    <Flex id="Home" zIndex={1} justifyContent="space-between" flexDir={["column", "column", "row-reverse", "row-reverse"]} overflowX={"clip"} mt={["70px", "70px", "140px"]}>
      <SideBar bg="brand.red" />
      <ImageBox />
      <InfoBox />
    </Flex>
  )
}

function ImageBox() {
  return (
    <Flex flexDir="row" pl={8} pr={4} w={["100%", "100%", "60%"]} maxH="100%" bg="black" alignItems={"center"} justifyContent={"space-between"}>
      <Flex w="100%%" py={6} flexDir={"column"} color="white">
        <Flex w="100%" flexDirection={"column"} justifyContent={"space-between"}>
        {things.map((thing, index) => {
            return (
              <Text w="100%" key={index} className="stretchpro" fontSize={["4.9vw", "5.6vw", "3.3vw", "2.8vw", "40"]} color="brand.yellow">
                {thing}
              </Text>
            )
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
              href="https://events.humanitix.com/mbff/tickets"
            />
          </motion.div>
        </Flex>
      </Flex>
      <Flex zIndex={1} alignSelf="flex-end" justifyContent="flex-end">
      <Image alignSelf={"flex-end"} src={puppet} maxH={["none", "none", "max-content", "max-content", "700px"]} h={["none", "none", "none", "max-content", "-moz-max-content"]} objectFit={"contain"}/>
      </Flex>
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
    <Flex w={["100%", "100%", "40%"]} bg='brand.green' color="white" px={8} pt={8} pb={8} fontSize={["4vw", "4vw", "2.5vw", "2.4vw", "29.5"]} alignItems={["none", "none", "none", "center"]}>
      <Text className="faktum-bold" w="100%">
        High quality art for the whole family, and either low-cost or free!
        <br/><br/>
        Running in the Brunswick Library, Brunswick Town Hall and Counihan Gallery from September 18th - 24th.
        <br/><br/>
        World class arts. Right in your backyard. School holidays are officially sorted.
      </Text>
    </Flex>
  )
}

export default Landing