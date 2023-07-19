import { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Text,
  Button,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleInput(target, event) {
    target(event.target.value);
  }

  function handleSubmit() {
    const params = {
      to_name: "mbffcontact@gmail.com",
      from_name: email,
      message: message,
    };

    emailjs
      .send("service_p2limpf", "template_mlrsiqa", params, "iwfGwdYk2mJ1c1ns0")
      .then(
        (result) => {
          console.log(result.status, result.text);
        },
        (error) => {
          console.log(error.status, error.text);
        }
      );

    setEmail("");
    setMessage("");
  }

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
      gap={4}
    >
      <Text fontSize={"6xl"} fontWeight={"extrabold"}>
        Contact
      </Text>
      <FormControl
        color="white"
        display={"flex"}
        flexDirection={"column"}
        w="55%"
      >
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          bg="blue.600"
          placeholder="From..."
          w="66%"
          size={"lg"}
          fontSize={"3xl"}
          fontWeight={"bold"}
          _placeholder={{ color: "gray.400" }}
          value={email}
          onInput={(e) => handleInput(setEmail, e)}
        />
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          bg="blue.600"
          placeholder="Type message here..."
          h={64}
          resize={"vertical"}
          fontSize={"3xl"}
          fontWeight={"bold"}
          _placeholder={{ color: "gray.400" }}
          value={message}
          onInput={(e) => handleInput(setMessage, e)}
          mb={6}
        />
        <Button
          onClick={handleSubmit}
          w="max-content"
          fontSize={"3xl"}
          padding={8}
        >
          Submit!
        </Button>
      </FormControl>
    </Flex>
  );
}

export default ContactForm;
