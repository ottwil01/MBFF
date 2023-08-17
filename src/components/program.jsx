import { Flex, Spacer, Image, Text, Box } from "@chakra-ui/react"
import ProgramData from "../program-data.json"
import { RightSideBar } from "./util"
import ssbb from "/ssbb.png"
import fritz from "/ssbb.png"


const image = [
  {
    alt: "ssbb",
    src: ssbb
  },
  {
    alt: "fritz",
    src: fritz
  }
]

function Program() {
  return (
    <Flex zIndex={1} flexDir={"row"}>
      <Combined />
      <RightSideBar display={["none", "none", "none", "flex", "flex"]} />
      </Flex>
  )
}

function Combined() {
  return (
    <Flex
      flexDirection="column"
      bg="brand.yellow"
      alignItems={"Center"}
      justifyContent={"Center"}
      w="full"
      id="Program"
    >
      <Text textAlign="center" w="100%" mt="15px" className={"stretchpro"} fontSize={["12vw", "12vw", "10vw", "8xl"]} fontWeight={"extrabold"}>
        Program
      </Text>
      <Flex
        flexDirection="column"
        gap={8}
        alignItems="Center"
        justifyContent="Center"
      >

        {ProgramData.data.map((item, i) => (
          <ProgramComponent
            image={image.map((imageItem) => 
              <ImageComponent
              {...imageItem.src}
              />
            )}
            key={i}
            name={item.name}
            date={item.date}
            venue={item.venue}
            description={<Text whiteSpace="pre-wrap">{item.description}</Text>}
          />
        ))}
      </Flex>
    </Flex>
  )
}

function ProgramComponent(props) {
  return (
    <Flex
      flexDirection={["column-reverse", "column-reverse", "row"]}
      columnGap={8}
      maxWidth={"70%"}
      h={"full"}
    >
      <Flex gap={4} flexDirection="column" w={["100%", "100%", "50%", "50%"]}>
        <Text fontWeight={"black"} fontSize={["9vw", "9vw", "4vw", "44"]}>
          {props.name}
        </Text>
        <Text fontWeight={"black"} fontSize={"xl"}>
          {props.date}
        </Text>
          <Box
            border={"4px"}
            borderColor={"black"}
            borderRadius={"full"}
            maxWidth={"max-content"}
            whiteSpace={"nowrap"}
            px={3}
          >
            <Text fontSize={"xl"} fontWeight={"bold"}>{props.venue}</Text>
          </Box>
          <Text fontSize={["5vw", "5vw", "2vw", "2vw"]} fontWeight={"semibold"} whiteSpace={"normal"}>
            {props.description}
          </Text>
      </Flex>
      <Spacer />
    </Flex>
  )
}

function ImageComponent(props) {
  return (
    <Flex w={["100%", "35%", "35%"]} shadow="sm">
    <Image
      src={props.src}
      alt={props.alt}
      w={["100%", "100%", "50%", "100%"]}
    />
    </Flex>
  )
}

export default Program