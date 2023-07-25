import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Textarea,
    Text,
    Button,
  } from "@chakra-ui/react";
  
  const Timetable = () => {
    return (
      <Flex
            w={"full"}
            minH={"100vh"}
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
            gap={4}
            id="timetable"
            bg="red"
          >
          <Text fontSize={"7xl"} fontWeight={"extrabold"} color={"white"}>
          Timetable
        </Text>
        <Flex>

        </Flex>
      </Flex>
    );
  }

export default Timetable