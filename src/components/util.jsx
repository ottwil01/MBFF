import { Box, Flex, Text, Image } from "@chakra-ui/react"
import mbLogo from "/merri-bek.png"
import vicLogo from "/vic-gov.png"
import arts from "/arts-merri-bek.png"

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
        <Flex bottom="0" align={"center"} h={32} w="100%" bg="black" justifyContent={"space-between"} flexDir={"column"} alignItems={"center"}>
            <Flex w="100%" h="40%" justifyContent={"center"}>
                <Text textAlign="center" color="white" p="10px" w="60%" fontSize={"9"}>
                    This event has been proudly supported by Merri-bek City Council through the Flourish: Arts Recovery Grant Program. And through the State Government's Department of Jobs, Skills, Industry and Regions' SME Program.
                </Text>
            </Flex>
            <Flex w="100%" h="50%" justifyContent={"center"} alignItems={"center"}>
                <Flex w="60%" justifyContent="space-between" overflow={"hidden"}>
                    {logos.map((logo, index) => {
                    return <Image key={index} src={logo} boxSize={"30%"} />
                    })}
                </Flex>
            </Flex>
        </Flex>
        
    )
}