import { Box, Flex } from "@chakra-ui/react";

export function RightSideBar(props) {
    return (
        <Flex display={props.display}>
        <Box w={24} h='100%' bg='brand.red' />
        </Flex>
    )
}

export function LeftSideBar(props) {
    return (
        <Flex display={props.display}>
        <Box w={24} h='100%' bg='brand.grey' />
        </Flex>
    )
}

export function UnifiedSideBar(props) {
    return (
        <Flex>
            <Box w={32} h='100%' bg={`${props.bg}`} />
        </Flex>
    )
}

export function Footer() {
    return (
        <Flex h={32} w="100%" bg="black" />
    )
}