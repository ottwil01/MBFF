import { Flex, Image, Text, Box, Link, Button, IconButton } from "@chakra-ui/react"
import ProgramData from "../program-data.json"
import { SideBar } from "./util"
import sg from "/program/strange-garden.png"
import bp from "/program/bunk-puppets.png"
import lip from "/program/lip-to-lung.png"
import bvp from "/program/brunswick-village-publisher.png"
import ce from "/program/choral-edge.png"
import sh from "/program/scavenger-hunt.png"
import eaa from "/program/everyones-absurd-adventure.png"
import fritz from "/program/fritz.png"
import ssbb from "/program/ssbb.png"
import space from "/program/spacescape.png"
import vr from "/program/vr.png"
import ms from "/program/musical-storytime.png"
import { useState } from "react"
import { motion } from "framer-motion"



function Program() {
  return (
    <Flex id="Program" zIndex={1} flexDir={"row"}>
      <Combined />
      <SideBar bg="brand.red" />
      </Flex>
  )
}

function Combined() {
  const images = {
    "Strange Garden": sg,
    "Shadow Puppets": bp,
    "Lip to Lung, Larynx and Tongue, Beatbox and Beyond.": lip,
    "Brunswick Village Publisher": bvp,
    "Festival Opening feat. Choral Edge": ce,
    "Scavenger Hunt": sh,
    "Everyone's Absurd Adventure": eaa,
    "FRITZ": fritz,
    "Sticks Stones Broken Bones": ssbb,
    "Spacescape!": space,
    "VR Cinema Clowns": vr,
    "Musical Storytime": ms
  }
  return (
    <Flex
      flexDirection="column"
      bg="brand.yellow"
      alignItems={"Center"}
      justifyContent={"Center"}
      w="full"
      pb={12}
      gap={4}
      borderStyle={"solid"}
    >
      <Text textAlign="center" w="100%" mt="15px" className={"stretchpro"} fontSize={["12vw", "12vw", "10vw", "8xl"]} fontWeight={"extrabold"}>
        Program
      </Text>
      {ProgramData.data.map((item, i) => (
        <ProgramComponent
          key={i}
          image={images[item.name]}
          name={item.name}
          type={item.type}
          date={item.date}
          venue={item.venue}
          tickets={item.tickets}
          notickets={item.notickets}
          descriptionShort={item.descriptionShort}
          description={item.description}
          age={item.age}
          presenter={item.presenter}
          website={item.website}
          extrainfo={item.extrainfo}
        />
        ))}
    </Flex>
  )
}

function ProgramComponent(props) {
  const [isShowMore, setIsShowMore] = useState(false)

  return (
    <Flex w="100%" className="faktum" justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
      <Flex
        flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
        w={"90%"}
        h={"full"}
        p={4}
        whiteSpace={"pre-wrap"}
        justifyContent={"space-between"}
        border={"solid"}
        borderWidth={"4px"}
        borderRadius={"0.3rem"}
        >
          <Flex
            gap={4}
            flexDirection="column"
            w={["100%", "100%", "100%", "50%"]}
          >
            <Text mt="10px" className="stretchpro" fontSize={["5vw", "6.7vw", "3.3vw", "30"]}>
              {props.name}
            </Text>
            <Text className="faktum-bold" fontSize={["4.8vw", "5vw", "2.6vw", "23"]}>
              {props.type}
            </Text>
            <Box
              border={"4px"}
              borderColor={"black"}
              borderRadius={"full"}
              maxW={"max-content"}
              whiteSpace={"nowrap"}
              px={3}
            >
              <Text className="stretchpro" fontSize={["4vw", "4vw", "2.5vw", "18"]}>
                {props.venue}
              </Text>
            </Box>
            <Text  className="faktum-bold" fontWeight={"ex"} fontSize={["4.4vw", "4.6vw", "2.6vw", "23"]}>
              {props.date}
            </Text>
            <Text fontStyle="italic" fontSize={["4vw", "5vw", "2vw", "2xl"]}>
              {props.age}
            </Text>
            <Box justifyItems={"center"}>
              { props.tickets &&
                <Flex>
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                    <IconButton
                      as="a"
                      aria-label="tickets"
                      icon={<Button
                              border={"4px"}
                              borderRadius={"full"}
                              whiteSpace={"nowrap"}
                              px={3}
                              color={"black"}
                              maxW={"max-content"}
                            >
                              <Text className={"stretchpro"} fontSize={["4vw", "4vw", "2.5vw", "18"]} mt="4px">
                                {props.tickets}
                              </Text>
                            </Button>}
                      target="_blank"
                      variant="unstlyed"
                      href="https://events.humanitix.com/mbff/tickets"
                    />
                  </motion.div>
                </Flex>
              }
              { props.notickets &&
                <Box px={3} className="arrow_box">
                  <Text className={"stretchpro"} textAlign={"justify"} fontSize={["4vw", "4vw", "2.5vw", "18"]}>
                    {props.notickets}
                  </Text>
                </Box>
              }
            </Box>
            <Text fontSize={["4vw", "5vw", "2vw", "2xl"]}>
              {!isShowMore ? props.descriptionShort : props.description}
            </Text>
            {isShowMore &&
            <>
              <Text fontSize={["4vw", "5vw", "2vw", "2xl"]}>
                {props.presenter}
              </Text>
              {/* <Text textDecor={"underline"} fontSize={["4vw", "5vw", "2vw", "2xl"]}>
                <Link href={`https://${props.websiteCustom}`} isExternal>
                  Bunk Puppets
                </Link>
              </Text> */}
              {props.website.map((weblink, i) => {
                return (
                  <Text textDecor={"underline"} key={i} fontSize={["4vw", "5vw", "2vw", "2xl"]}>
                    <Link href={`https://${weblink}`} isExternal>
                      {weblink}
                    </Link>
                  </Text>
                )
              })}
              {props.extrainfo &&
                <Text fontSize={["4vw", "5vw", "2vw", "2xl"]}>
                {props.extrainfo}
                </Text>
              }
            </>
            }
            <Flex w="100%" justifyContent={"center"}>
              <Button color="brand.blue" fontSize={["4vw", "5vw", "2vw", "2xl"]} variant="unstlyed" onClick={() => setIsShowMore(!isShowMore)}>
                {!isShowMore ? "Read More" : "Read Less" }
              </Button>
            </Flex>
          </Flex>
          <Flex w={["100%", "100%", "100%", "45%"]} justifyContent={["center", "center", "center", "end"]}>
            <Image
              src={props.image}
              alt="thumbnail"
              objectFit={"cover"}
              boxSize={["100%", "100%", "90vw", "35vw"]}
              maxH={["200px", "300px", "400px", "500px"]}
              maxW={["200px", "300px", "400px", "500px"]}
              borderRadius={"0.3rem"}
            />
          </Flex>
      </Flex>
    </Flex>
  )
}

export default Program