import { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"
import { Footer } from "./util"
import { Flex, FormControl, Input, Textarea, Text, Button, Box } from "@chakra-ui/react"

function ContactForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [validInput, setValidInput] = useState(false)

  function handleInput(target, event) {
    target(event.target.value)
  }

  function handleSubmit() {
    setLoading(true)

    const params = {
      to_name: "MBFF",
      from_name: email,
      message: message,
    }

    emailjs
      .send("service_ogz3xso", "template_7xe2quf", params, "_kmggaxJsHKTLK7qj")
      .then(
        (result) => {
          console.log(result.status, result.text)
          setSuccess(true)
          setLoading(false)
        },
        (error) => {
          console.log(error.status, error.text)
          setLoading(false)
        }
      )

    setEmail("")
    setMessage("")
  }

  useEffect(() => {
    if (validateEmail(email) && message.length > 0) { setValidInput(true) }
    if (message.length < 1) { setValidInput(false) }
  }, [email, message])

  return (
    <Flex
      id="Contact"
      zIndex={1}
      w="100%"
      alignItems="center"
      justifyContent="start"
      flexDir="column"
      gap={4}
    >
      <Text textAlign="center" w="100%" mt="15px" className="stretchpro" fontSize={["12vw", "12vw", "10vw", "8xl"]} fontWeight="extrabold">
        Contact
      </Text>
      <FormControl
        color="white"
        display="flex"
        flexDirection="column"
        w={["90%", "90%", "55%"]}
        isRequired={true}
      >
        <Input
          type="email"
          bg="brand.blue"
          placeholder="Your email address:"
          w="66%"
          size="lg"
          fontSize={["3.9vw", "3.7vw", "3.3vw", "3xl"]}
          fontWeight="bold"
          _placeholder={{ color: "white" }}
          value={email}
          onInput={(e) => handleInput(setEmail, e)}
        />
        <Box h={8}/>
        <Textarea
          type="text"
          bg="brand.blue"
          placeholder="Type message here...."
          h={64}
          isRequired
          resize="vertical"
          fontSize={["3.9vw", "3.7vw", "3.3vw", "3xl"]}
          fontWeight="bold"
          _placeholder={{ color: "white" }}
          value={message}
          onInput={(e) => handleInput(setMessage, e)}
          mb={5}
        />
        <Flex gap={3} flexDir={"column"}>
        <Button type="submit" ml="3.5" alignSelf="baseline" textColor="brand.blue" border={"4px"} borderColor={"brand.blue"} borderRadius={"full"} maxWidth={"max-content"} whiteSpace={"nowrap"} px={3} fontSize={["3.9vw", "3.7vw", "3.3vw", "3xl"]} fontWeight="bold" onClick={handleSubmit} isLoading={loading} loadingText="Submitting" isDisabled={!validInput}>
          Submit!
        </Button>
        {/* <Box w="100%" h={["30px", "50px", "70px", "80px", "100px"]} my="10px">
        <Text display="none" fontStyle={"italic"} ml="3.5" fontSize={["3.5vw", "3vw", "17", "21", "21"]} color={"black"}>
          Email successfully submitted to<br/>merribekfamilyfestival@gmail.com!
        </Text>
        </Box> */}
        </Flex>
      </FormControl>
      <Footer />
    </Flex>
  )
}

function validateEmail(email) {
  const validReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return String(email).toLowerCase().match(validReg)
}

// function validate(email) {
//   if (email.length < 1) {
//     return false
//   }

//   if (validateEmail(email) === false) {
//     return false
//   }
//   if (validateEmail(email) === null) {
//     return false
//   }
//   return true
// }

export default ContactForm
