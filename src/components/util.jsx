import { Box, Flex } from "@chakra-ui/react";

export function RightSideBar() {
    return (
        <Flex>
        <Box w={32} h='100%' bg='brand.red' />
        </Flex>
    )
}

export function LeftSideBar() {
    return (
        <Flex>
        <Box w={32} h='100%' bg='#b3b3b3' />
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