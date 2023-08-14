// import { Flex, Text, Image, Box } from "@chakra-ui/react"
// import mbLogo from "/merri-bek1.png"
// import vicLogo from "/vic-gov1.png"
// import bunk from "/bunk-puppets1.png"
// import redStar from "/red-star.png"
// import puppet from "/puppet-crop.png"
// import { RightSideBar } from "./util"

// const logos = [mbLogo, vicLogo, bunk]
// const things = ["Theatre", "Music", "Dance", "Workshops", "Installations", "VR"]

// function Landing() {
//   return (
//     <Flex zIndex={1} flexDir={["column", null, "row-reverse"]} height="1px" minH="calc(100vh)" overflowX={"clip"} id="landing" mt={["70px", "70px", "140px"]}>
//       <RightSideBar display={["none", "none", "flex", "flex"]} />
//       <ImageBox />
//       <InfoBox />
//     </Flex>
//   )
// }

// function ImageBox() {
//   return (
//     <Flex w={["100%", null, "60%"]} h="100%" bg="black" px={8} py={6} alignItems={"center"} justifyContent={"space-between"}>
//       <Flex flexDir={"column"} color="white" alignItems={"start"} justifyContent={"center"}>
//         {things.map((thing, index) => {
//           return <Text key={index} className="stretchpro" fontSize={['xl', null, "2xl", "4xl", "5xl"]} color="brand.yellow">{thing}</Text>
//         })}
//         <Box pos={"relative"} boxSize={["160px", null, "300px"]} display="flex">
//           <Image src={redStar} />
//           <Text className="faktum" fontSize={"xl"} align="center" pos={"absolute"} mt="98px" ml="100px" transform={"rotate(-15deg)"} >You won't<br/>believe your<br/>eyes</Text>
//         </Box>
//       </Flex>
//       <Image src={puppet} boxSize={"750px"} objectFit={"contain"} mt="80px" />
//     </Flex>
//   )
// }

// function InfoBox() {
//   return (
//     <Flex w={["100%", null, "40%"]} h="100%" bg='brand.green' flexDir={"column"} color="white" px={8} py={16} alignItems={"center"} gap={4} fontSize={["xl", null, "1xl", "1.5vw"]}>
//       <Text verticalAlign={"top"} className="faktum-bold" maxW={'2xl'}>
//       High quality art for the whole family, and either low-cost or free!
//       <br/><br/>
//       Running from the Brunswick Library, Brunswick Town Hall and Counihan Gallery from September 18th - 24th.
//       <br/><br/>
//       The Merri-bek Family Festival is the latest endeavour from local theatre company Bunk Puppets, supported by Merri-bek City Council and the State Government.

//       </Text>
//       <Flex w={["90%", null, "100%"]}>
//         {logos.map((logo, index) => {
//           return <Image key={index} src={logo} w={1 / 3} />
//         })}
//       </Flex>
//     </Flex>
//   )
// }

// export default Landing

import { Flex, Text, Image, Box } from "@chakra-ui/react"
import mbLogo from "/merri-bek1.png"
import vicLogo from "/vic-gov1.png"
import bunk from "/bunk-puppets1.png"
import redStar from "/red-star.png"
import puppet from "/puppet-crop.png"
import { RightSideBar } from "./util"

const logos = [mbLogo, vicLogo, bunk]
const things = ["Theatre", "Music", "Dance", "Workshops", "Installations", "VR"]

function Landing() {
  return (
    <Flex zIndex={1} flexDir={["column", null, "row-reverse"]} height="1px" minH="calc(100vh)" overflowX={"clip"} id="Home" mt={["70px", "70px", "140px"]}>
      <RightSideBar display={["none", "none", "flex", "flex"]} />
      <ImageBox />
      <InfoBox />
    </Flex>
  )
}

function ImageBox() {
  return (
    <Flex w={["100%", null, "60%"]} h="100%" bg="black" px={8} py={6} alignItems={"center"} justifyContent={"space-between"}>
      <Flex flexDir={"column"} color="white" alignItems={"start"} justifyContent={"center"}>
        {things.map((thing, index) => {
          return <Text key={index} className="stretchpro" fontSize={['xl', null, "2xl", "4xl", "5xl"]} color="brand.yellow">{thing}</Text>
        })}
        <Box pos={"relative"} boxSize={["160px", null, "300px"]} display="flex">
          <Image src={redStar} />
          <Text className="faktum" fontSize={"xl"} align="center" pos={"absolute"} mt="98px" ml="100px" transform={"rotate(-15deg)"} >You won't<br/>believe your<br/>eyes</Text>
        </Box>
      </Flex>
      <Image src={puppet} boxSize={"750px"} objectFit={"contain"} mt="80px" />
    </Flex>
  )
}

function InfoBox() {
  return (
    <Flex w={["100%", null, "40%"]} h="100%" bg='brand.green' flexDir={"column"} color="white" px={8} py={16} alignItems={"center"} gap={4} fontSize={["xl", null, "1xl", "1.5vw"]}>
      <Text verticalAlign={"top"} className="faktum-bold" maxW={'2xl'}>
      High quality art for the whole family, and either low-cost or free!
      <br/><br/>
      Running from the Brunswick Library, Brunswick Town Hall and Counihan Gallery from September 18th - 24th.
      <br/><br/>
      The Merri-bek Family Festival is the latest endeavour from local theatre company Bunk Puppets, supported by Merri-bek City Council and the State Government.

      </Text>
      <Flex w={["90%", null, "100%"]}>
        {logos.map((logo, index) => {
          return <Image key={index} src={logo} w={1 / 3} />
        })}
      </Flex>
    </Flex>
  )
}

export default Landing