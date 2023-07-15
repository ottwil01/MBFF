import { Box } from "@chakra-ui/react"
import NavBar from "./components/navbar"
import Landing from "./components/landing"
import Program from "./components/program"
import Timetable from "./components/timetable"

function App() {
  return (
    <Box>
      <NavBar />
      <div as='main' mt='50'>
      <Landing />
      <Program />
      <Timetable />
      </div>
    </Box>
  )
}

export default App