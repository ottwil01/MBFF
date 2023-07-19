import { Box } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import Landing from "./components/landing";
import Program from "./components/program";
import Timetable from "./components/timetable";
import ContactForm from "./components/contact";
import './fonts.css'

function App() {
  return (
    <Box>
      <NavBar />
      <Landing />
      <Program />
      <ContactForm />
    </Box>
  );
}

export default App;
