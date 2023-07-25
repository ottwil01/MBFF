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

const Tickets = () => {
  return (
    <Flex
          w={"full"}
          minH={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          gap={4}
          id="tickets"
          bg="green"
        >
        <Text fontSize={"7xl"} fontWeight={"extrabold"} color={"white"}>
        Tickets
      </Text>
        <Box
          border={"4px"}
          // borderColor={"white"}
          borderRadius={"full"}
          maxWidth={"max-content"}
          whiteSpace={"nowrap"}
          px={3}
          color={"white"}
        >
        Tickets
        </Box>
      </Flex>
  );
}

export default Tickets