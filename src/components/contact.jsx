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
  const [loading, setLoading] = useState(false);

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
        color="form.color"
        display={"flex"}
        flexDirection={"column"}
        w={["90%", "90%", "55%"]}
      >
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          bg="form.blue"
          placeholder="From..."
          w="66%"
          size={"lg"}
          fontSize={"3xl"}
          fontWeight={"bold"}
          _placeholder={{ color: "form.placeholder" }}
          value={email}
          onInput={(e) => handleInput(setEmail, e)}
        />
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          bg="form.blue"
          placeholder="Type message here..."
          h={64}
          resize={"vertical"}
          fontSize={"3xl"}
          fontWeight={"bold"}
          _placeholder={{ color: "form.placeholder" }}
          value={message}
          onInput={(e) => handleInput(setMessage, e)}
          mb={6}
        />
        <Button
          onClick={handleSubmit}
          w="max-content"
          fontSize={"3xl"}
          padding={8}
          isLoading={loading}
        >
          Submit!
        </Button>
      </FormControl>
    </Flex>
  );
}

export default ContactForm;
