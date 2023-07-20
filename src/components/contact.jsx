import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

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

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [validInput, setValidInput] = useState(false)

  function handleInput(target, event) {
    target(event.target.value);
  }

  function handleSubmit() {
    setLoading(true);

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
          setLoading(false);
        },
        (error) => {
          console.log(error.status, error.text);
          setLoading(false);
        }
      );

    setEmail("");
    setMessage("");
  }

  useEffect(() => {
    if (validateEmail(email) && message.length > 0) { setValidInput(true) }
    if (message.length < 1) { setValidInput(false) }
  }, [email, message])

  return (
    <Flex
      w={"full"}
      minH={"100vh"}
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
        w={["90%", "90%", "55%"]}
      >
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          bg="brand.blue"
          placeholder="From..."
          w="66%"
          size={"lg"}
          fontSize={"3xl"}
          fontWeight={"bold"}
          _placeholder={{ color: "white" }}
          value={email}
          onInput={(e) => handleInput(setEmail, e)}
        />
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          bg="brand.blue"
          placeholder="Type message here..."
          h={64}
          resize={"vertical"}
          fontSize={"3xl"}
          fontWeight={"bold"}
          _placeholder={{ color: "white" }}
          value={message}
          onInput={(e) => handleInput(setMessage, e)}
          mb={6}
        />
        <Button onClick={handleSubmit} isLoading={loading}>
          Submit!
        </Button>
      </FormControl>
    </Flex>
  );
}

function validate(email) {
  if (email.length < 1) {
    return false
  }

  if (validateEmail(email) === false) {
    return false
  }
  if (validateEmail(email) === null) {
    return false
  }
  return true
}

function validateEmail(email) {
  const validReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return String(email).toLowerCase().match(validReg)
}


export default ContactForm;
