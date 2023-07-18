import { Flex, Spacer, Image, Text, Box, Center } from "@chakra-ui/react";
import ProgramData from "../assets/program-data.json";

function Program() {
  return (
    <Flex
      flexDirection="column"
      bg="yellow"
      alignItems={"Center"}
      justifyContent={"Center"}
      w="full"
    >
      <Text fontSize={"6xl"} fontWeight={"bold"}>
        Program
      </Text>
      <Flex
        flexDirection="column"
        gap={8}
        alignItems={"Center"}
        justifyContent={"Center"}
      >
        {ProgramData.data.map((item) => (
          <ProgramComponent
            name={item.name}
            venue={item.venue}
            description={item.description}
          />
        ))}
      </Flex>
    </Flex>
  );
}

function ProgramComponent(props) {
  return (
    <Flex flexDirection="row" columnGap={8} maxWidth={"70%"} h={"full"}>
      <Flex flexDirection="column" fontSize={"3xl"} w="65%">
        <Text fontWeight={"black"} fontSize={"5xl"}>
          {props.name}
        </Text>
        <Box
          border={"4px"}
          borderColor={"black"}
          borderRadius={"full"}
          maxWidth={"max-content"}
          whiteSpace={"nowrap"}
          px={4}
        >
          <Text fontWeight={"bold"}>{props.venue}</Text>
        </Box>
        <Text fontWeight={"semibold"} whiteSpace={"normal"}>
          {props.description}
        </Text>
      </Flex>
      <Spacer />
      <Box w={"35%"} shadow="sm">
        <Image
          src="https://placekeanu.com/400/400"
          alt="keanu"
          w={"100%"}
          height={"100%"}
          objectFit={"cover"}
          rounded={"sm"}
        />
      </Box>
    </Flex>
  );
}

export default Program;
