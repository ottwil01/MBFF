import { Flex, Text, Image, IconButton } from "@chakra-ui/react"
import redStar from "/red-star.png"
import puppet from "/puppet-crop-new.png"
import { SideBar } from "./util"
import { motion } from "framer-motion"

const things = ["Theatre", "Music", "Story Telling", "Workshops", "Installations", "VR"]

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
    <Flex px={8} w={["100%", "100%", "60%"]} maxH="100%" bg="black" alignItems={"center"} justifyContent={"space-between"}>
      <Flex py={6} flexDir={"column"} color="white">
        <Flex w="100%" flexDirection={"column"} mb={["0", "0px", "50px", "40px"]} justifyContent={"space-between"}>
        {things.map((thing, index) => {
            return <Text key={index} className="stretchpro" fontSize={['4.6vw', "5vw", "2.7vw", "2.6vw"]} color="brand.yellow">{thing}</Text>
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
      <Flex boxSize="100%">
      <Image alignSelf={"flex-end"} src={puppet} h={["86vw", "87vw", "57vw", "100%"]} objectFit={"contain"}/>
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
    <Flex w={["100%", "100%", "40%"]} bg='brand.green' color="white" px={8} pt={14} pb={8} fontSize={["4vw","4vw", "2vw"]}>
      <Text verticalAlign={"top"} className="faktum-bold" w="100%">
        High quality art for the whole family, and either low-cost or free!
        <br/><br/>
        Running from the Brunswick Library, Brunswick Town Hall and Counihan Gallery from September 18th - 24th.
        <br/><br/>
        World class arts. Right in your backyard. School holidays are officially sorted.
      </Text>
    </Flex>
  )
}

export default Landing