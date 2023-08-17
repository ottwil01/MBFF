import { Flex, Image, Text, Box } from "@chakra-ui/react"
import ProgramData from "../program-data.json"
import { SideBar } from "./util"
import sg from "/strange-garden.png"
import bvp from "/brunswick-village-publisher.png"
import eaa from "/everyones-absurd-adventure.png"
import fritz from "/fritz.png"
import ssbb from "/ssbb.png"
import beasties from "/beasties.png"





function Program() {
  return (
    <Flex zIndex={1} flexDir={"row"}>
      <Combined />
      <SideBar bg="brand.red" display={["none", "none", "none", "flex", "flex"]} />
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
            key={i}
            image={images[item.name]}
            name={item.name}
            type={item.type}
            date={item.date}
            venue={item.venue}
            description={item.description}
            age={item.age}
            presenter={item.presenter}
            website={item.website}
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
      whiteSpace={"pre-wrap"}
    >
      <Flex gap={4} flexDirection="column" w={["100%", "100%", "50%", "50%"]}>
        <Text className="stretchpro" fontSize={["6.7vw", "6.7vw", "3.3vw", "30"]}>
          {props.name}
        </Text>
        <Text fontSize={["4vw", "5vw", "2vw", "2xl"]} className="faktum">
          {props.type}
        </Text>
        <Text  className="faktum-bold" fontWeight={"ex"} fontSize={["4.2vw", "5vw", "2.6vw", "23"]}>
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
          <Text fontSize={["4vw", "5vw", "2vw", "2xl"]} className="faktum">
            {props.description}
          </Text>
          <Text fontStyle="italic" fontSize={["4vw", "5vw", "2vw", "2xl"]} className="faktum">
          {props.age}
        </Text>
        <Text fontSize={["4vw", "5vw", "2vw", "2xl"]} className="faktum">
          {props.presenter}
        </Text>
        <Text fontSize={["4vw", "5vw", "2vw", "2xl"]} className="faktum">
          {props.website}
        </Text>
      </Flex>
      <Box w={["100%", "100%", "35%"]} shadow="sm">
        <Image
          src={props.image}
          alt="thumbnail"
          w="100%"
          objectFit={"cover"}
        />
      </Box>
    </Flex>
  )
}

export default Program