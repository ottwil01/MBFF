import { Flex, Text, Image } from "@chakra-ui/react";
import { UnifiedSideBar } from "./util";

function Landing() {
    return (
        <Flex h='calc(100vh)' w="100%" pt={40}>
            <LeftBox />
            <RightBox />
            <UnifiedSideBar bg="red" />
        </Flex>
    )
}

function LeftBox() {
    return (
        <Flex direction={'column'} w={3/5} pt={16} bg={"green.900"} color="white" p={4} alignItems={'center'} justifyContent={'center'}>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                <br/>Neque, eaque facilis omnis perferendis harum consequuntur maxime quis libero, blanditiis ab, in eveniet sit similique pariatur maiores magni totam vero mollitia alias ex porro dicta architecto.
            </Text>
            <Flex direction={'row'} alignItems={'center'} mt='10'>
                <Image src='../assets/Merri-bek-Logo' alt='mb-logo'/>
                <Image src='../assets/Victoria-Logo' alt='vic-logo'/>
                <Image src='https://placekeanu.com/50' alt='bunk-logo'/>
            </Flex>
        </Flex>
    )
}

function RightBox() {
    return (
        <Flex bg='black' w={2/3} pt={16}>
            <Text color='yellow' fontSize={'3xl'} fontWeight={'bold'} ml={''}>
                Theatre <br/>
                Music <br/>
                Dance <br/>
                Workshops <br/>
                Installations <br/>
                VR <br/>
            </Text>
        </Flex>
    )
}


export default Landing