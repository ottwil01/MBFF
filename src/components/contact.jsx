import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Flex, FormControl, FormLabel, Input, Textarea, Text, Button } from "@chakra-ui/react"

function ContactForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

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
          console.log(result.status, result.text)
          setLoading(false)
        },
        (error) => {
          console.log(error.status, error.text)
          setLoading(false)
        }
      );

    setEmail("")
    setMessage("")
  }

  return (
    <Flex
      zIndex={1}
      w={"full"}
      minH={"80vh"}
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
      gap={4}
      id="contact"
    >
      <Text className={"stretchpro"} fontSize={"6xl"} fontWeight={"extrabold"}>
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
          placeholder="From:"
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
          placeholder="Type message here...."
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

export default ContactForm;
