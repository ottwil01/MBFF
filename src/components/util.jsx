import { Box, Flex } from "@chakra-ui/react";

export function RightSideBar(props) {
    return (
        <Flex display={props.display}>
        <Box w={24} minH='100%' bg='brand.red' />
        </Flex>
    )
}

export function LeftSideBar(props) {
    return (
        <Flex display={props.display}>
        <Box w={24} minH='100%' bg='brand.grey' />
        </Flex>
    )
}

export function UnifiedSideBar(props) {
    return (
        <Box w={32} h='100%' bg={`${props.bg}`} />
    )
}

export function Footer() {
    return (
        <Box color="brand.yellow" w="100%" />
    )
}