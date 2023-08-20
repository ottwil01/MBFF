import { Flex, Image, Text, Box, Link, Button } from "@chakra-ui/react"
import ProgramData from "../program-data.json"
import { SideBar } from "./util"
import sg from "/strange-garden.png"
import bvp from "/brunswick-village-publisher.png"
import eaa from "/everyones-absurd-adventure.png"
import fritz from "/fritz.png"
import ssbb from "/ssbb.png"
import beasties from "/beasties.png"
import { useState } from "react"



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
    "Brunswick Village Publisher": bvp,
    "Everyones Absurd Adventure": eaa,
    "FRITZ": fritz,
    "Sticks Stones Broken Bones": ssbb,
    "Beasties": beasties
  }
  return (
    <Flex
      flexDirection="column"
      bg="brand.yellow"
      alignItems={"Center"}
      justifyContent={"Center"}
      w="full"
      pb={12}
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
          descriptionShort={item.descriptionShort}
          description={item.description}
          age={item.age}
          presenter={item.presenter}
          website={<Link href={`https://${item.website}`} isExternal>{item.website}</Link>}
          website1={<Link href={`https://${item.website1}`} isExternal>{item.website1}</Link>}
        />
        ))}
    </Flex>
  )
}

function ProgramComponent(props) {
  const [isShowMore, setIsShowMore] = useState(false)

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore)
  }
  return (
    <Flex className="faktum" justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
      <Flex
        flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
        maxWidth={"80%"}
        h={"full"}
        pt={4}
        whiteSpace={"pre-wrap"}
        justifyContent={"space-between"}
        >
          <Flex
            gap={4}
            flexDirection="column"
            w={["100%", "100%", "100%", "50%"]}
          >
            <Text className="stretchpro" fontSize={["6.6vw", "6.7vw", "3.3vw", "30"]}>
              {props.name}
            </Text>
            <Text fontSize={["5vw", "5vw", "2.6vw", "23"]}>
              {props.type}
            </Text>
            <Text  className="faktum-bold" fontWeight={"ex"} fontSize={["4.4vw", "4.6vw", "2.6vw", "23"]}>
              {props.date}
            </Text>
            <Text fontStyle="italic" fontSize={["4vw", "5vw", "2vw", "2xl"]} >
              {props.age}
            </Text>
            <Box
              border={"4px"}
              borderColor={"black"}
              borderRadius={"full"}
              maxWidth={"max-content"}
              whiteSpace={"nowrap"}
              px={3}
            >
              <Text className="stretchpro" fontSize={["4vw", "4vw", "2.5vw", "18"]} >
                {props.venue}
              </Text>
            </Box>
                <Text fontSize={["4vw", "5vw", "2vw", "2xl"]}>
                  {!isShowMore ? props.descriptionShort : props.description}
                </Text>
                {isShowMore &&
                <Box>
                  <Text fontSize={["4vw", "5vw", "2vw", "2xl"]}>
                    {props.presenter}
                  </Text>
                  <Text fontSize={["4vw", "5vw", "2vw", "2xl"]}>
                    {props.website}
                  </Text>
                  <Text fontSize={["4vw", "5vw", "2vw", "2xl"]}>
                    {props.website1}
                  </Text>
                </Box>
                }
              <Flex w="100%" justifyContent={"center"}>
                <Button className="faktum" variant="unstlyed" onClick={toggleReadMoreLess}>
                  {!isShowMore ? "Read More" : "Read Less" }
                </Button>
              </Flex>
          </Flex>
          <Flex w={["100%", "100%", "100%", "45%"]} shadow="sm">
            <Image
              src={props.image}
              alt="thumbnail"
              objectFit={"cover"}
              boxSize={"fit-content"}

            />
          </Flex>
      </Flex>
    </Flex>
  )
}

export default Program