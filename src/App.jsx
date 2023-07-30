import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import Landing from "./components/landing";
import Program from "./components/program";
import Timetable from "./components/timetable";
import Tickets from "./components/tickets";
import ContactForm from "./components/contact";
import './fonts.css'

function App() {
  return (
    <Flex flexDir={"column"}>
      <NavBar />
      <Landing />
      <Program />
      <Timetable />
      <Tickets />
      <ContactForm />
    </Flex>
  );
}

export default App;
