import { Box, Flex, Spacer, Text } from "@chakra-ui/react"

function NavBar() {
    return (
        <Flex as='header' w='100%' bg='blue' p='4' position='fixed'> 
            <Box bg='red' w={100} h={100}/>
            <Spacer />
            <NavText />
            <Spacer />
            <NavSocials />
        </Flex>
    )
}

function NavText() {
    return (
        <Box color='white'>
            <Text fontSize='7xl'>Merri-bek Family Festival</Text>
            <Flex fontSize='2xl' alignItems='center' justify='space-between'>
                <Text>Home</Text>
                <Text>Program</Text>
                <Text>Timetable</Text>
                <Text>Tickets</Text>
                <Text>Contact</Text>
            </Flex>
        </Box>
    )
}

function NavSocials() {
    return (
        <Flex>
            <p>fb</p>
            <p>ig</p>
            <p>fuck tim</p>
        </Flex>
    )
}

export default NavBar