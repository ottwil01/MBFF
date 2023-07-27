import { Box } from "@chakra-ui/react";

export function RightSideBar() {
    return (
        <Box w={32} h='100%' bg='red' />
    )
}

export function LeftSideBar() {
    return (
        <Box w={32} h='100%' bg='blue' />
    )
}

export function UnifiedSideBar(props) {
    return (
        <Box w={32} h='100%' bg={`${props.bg}`} />
    )
}