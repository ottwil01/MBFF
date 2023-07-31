import { Flex, Spacer, Image, Text, Box } from "@chakra-ui/react"
import ProgramData from "../program-data.json"
import { RightSideBar } from "./util"

function Program() {
  return (
    <Flex zIndex={1} flexDir={"row"}>
      <Combined />
      <RightSideBar display={["none", "none", "flex", "flex"]} />
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
      id="program"
    >
      <Text className={"stretchpro"} fontSize={"6xl"} fontWeight={"extrabold"}>
        Program
      </Text>
      <Flex
        flexDirection="column"
        gap={8}
        alignItems="Center"
        justifyContent="Center"
      >
        {ProgramData.data.map((item, index) => (
          <ProgramComponent
            key={index}
            name={item.name}
            venue={item.venue}
            description={item.description}
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
      <Flex flexDirection="column" fontSize={"3xl"} w={["100%", "100%", "65%"]}>
        <Text fontWeight={"black"} fontSize={"5xl"}>
          {props.name}
        </Text>
        <Box
          border={"4px"}
          borderColor={"black"}
          borderRadius={"full"}
          maxWidth={"max-content"}
          whiteSpace={"nowrap"}
          px={3}
        >
          <Text fontWeight={"bold"}>{props.venue}</Text>
        </Box>
        <Text fontWeight={"semibold"} whiteSpace={"normal"}>
          {props.description}
        </Text>
      </Flex>
      <Spacer />
      <Box w={["100%", "100%", "35%"]} shadow="sm">
        <Image
          src="https://placekeanu.com/400/400"
          alt="keanu"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </Box>
    </Flex>
  )
}

export default Program