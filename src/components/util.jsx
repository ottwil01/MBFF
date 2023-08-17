import { Box, Flex } from "@chakra-ui/react";

export function SideBar(props) {
    return (
        <Flex display={props.display}>
            <Box w={24} h='100%' bg={`${props.bg}`} />
        </Flex>
    )
}

export function Footer() {
    return (
        <Flex h={32} w="100%" bg="black" />
    )
}