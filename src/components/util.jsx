import { Box, Flex, Text, Image } from "@chakra-ui/react"
import mbLogo from "/footer/merri-bek.png"
import vicLogo from "/footer/vic-gov.png"
import arts from "/footer/arts-merri-bek.png"

const logos = [mbLogo, arts, vicLogo]

export function SideBar(props) {
    return (
        <Flex display={["none", "none", "none", "flex", "flex"]}>
            <Box w={24} h='100%' bg={`${props.bg}`} />
        </Flex>
    )
}

export function Footer() {
    return (
        <Flex bottom="0" align={"center"} boxSize="100%" bg="black" justifyContent={"space-between"} flexDir={"column"} alignItems={"center"}>
            <Flex w="100%" h="40%" justifyContent={"center"}>
                <Text textAlign="center" color="white" p="10px" w={["90%", "90%", "90%", "70%"]} fontSize={["10", "11", "15", "16"]}>
                    The Merri-bek Family Festival acknowledge the Wurundjeri Woi Wurrung people as the traditional custodians of the lands and waterways now known as Brunswick. We pay our respects to Elders past and present, and to all First Nations Communities.<br /><br />
                    This event has been proudly supported by Merri-bek City Council through the Flourish: Arts Recovery Grant Program. And through the State Government's Department of Jobs, Skills, Industry and Regions' SME Program.
                </Text>
            </Flex>
            <Flex w="100%" h="50%" justifyContent={"center"} alignItems={"center"}>
                <Flex w={["90%", "90%", "90%", "70%", "1100px"]} justifyContent="space-evenly" overflow={"hidden"}>
                    {logos.map((logo, index) => {
                    return <Image key={index} src={logo} maxW={"20%"} />
                    })}
                </Flex>
            </Flex>
        </Flex>
        
    )
}