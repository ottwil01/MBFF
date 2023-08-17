import { Flex, Spacer, Image, Text, Box } from "@chakra-ui/react"
import ProgramData from "../program-data.json"
import { SideBar } from "./util"
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
      <SideBar bg="brand.red" display={["none", "none", "none", "flex", "flex"]} />
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
      pb={12}
    >
      <Text textAlign="center" w="100%" mt="15px" className={"stretchpro"} fontSize={["12vw", "12vw", "10vw", "8xl"]} fontWeight={"extrabold"}>
        Program
      </Text>
      <Flex
        flexDirection="column"
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
      maxWidth={"70%"}
      h={"full"}
      pt={4}
    >
      <Flex gap={4} flexDirection="column" w={["100%", "100%", "50%", "50%"]}>
        <Text className="stretchpro" fontSize={["6.7vw", "6.7vw", "3.3vw", "30"]}>
          {props.name}
        </Text>
        <Text className="faktum-bold" fontSize={["4.2vw", "5vw", "2.6vw", "23"]}>
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
            <Text fontSize={["3.3vw", "4vw", "2vw", "18"]} className="stretchpro">{props.venue}</Text>
          </Box>
          <Text fontSize={["4vw", "5vw", "2vw", "2xl"]} className="faktum" whiteSpace={"normal"}>
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