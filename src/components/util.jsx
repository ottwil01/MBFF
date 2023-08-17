import { Box, Flex, Text, Image } from "@chakra-ui/react"
import mbLogo from "/merri-bek.png"
import vicLogo from "/vic-gov1.png"
import arts from "/arts-merri-bek.svg"

const logos = [mbLogo, arts, vicLogo]

export function SideBar(props) {
    return (
        <Flex display={props.display}>
            <Box w={24} h='100%' bg={`${props.bg}`} />
        </Flex>
    )
}

export function Footer() {
    return (
        <Flex h={64} w="100%" bg="black" justifyContent={"space-between"} flexDir={"column"}>
            <Text textAlign="center" color="white" p="10px" fontSize={"12"}>
                This event has been proudly supported by Merri-bek City Council through the Flourish:<br/>Arts Recovery Grant Program. And through the State Government's Department of Jobs,<br/>Skills, Industry and Regions' SME Program.
            </Text>
            <Flex w="100%" boxSize="50%" alignSelf={"center"}>
                {logos.map((logo, index) => {
                return <Image key={index} src={logo} w={1 / 3} />
                })}
            </Flex>
        </Flex>
        
    )
}