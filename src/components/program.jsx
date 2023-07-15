import { Flex, Spacer, Image, Text, Box, Center } from "@chakra-ui/react"

const programInfo = [
    {
        "name": "First thing",
        "venue": "Cool venue",
        "description": "this sid safldk;sfj erwtkljasdl;kfjasdl;kfj asdl;fkja;kerjh ;fjdghadkfj ;akdsjhf k;jsdahf ;kajsdhf ;kasjdhfjldhfghl;aksdjf k;asdjhf sdkjhf ;kasjdfj ;aksdjhfksdgfh;adfjkgsh "
    },
    {
        "name": "Second thing",
        "venue": "Cool venue",
        "description": "this sid safldk;sfj erwtkljasdl;kfjasdl;kfj asdl;fkja;kerjh ;fjdghadkfj ;akdsjhf k;jsdahf ;kajsdhf ;kasjdhfjldhfghl;aksdjf k;asdjhf sdkjhf ;kasjdfj ;aksdjhfksdgfh;adfjkgsh "
    },
    {
        "name": "Third thing",
        "venue": "Cool venue",
        "description": "this sid safldk;sfj erwtkljasdl;kfjasdl;kfj asdl;fkja;kerjh ;fjdghadkfj ;akdsjhf k;jsdahf ;kajsdhf ;kasjdhfjldhfghl;aksdjf k;asdjhf sdkjhf ;kasjdfj ;aksdjhfksdgfh;adfjkgsh "
    },
    {
        "name": "Fourth thing",
        "venue": "Cool venue",
        "description": "this sid safldk;sfj erwtkljasdl;kfjasdl;kfj asdl;fkja;kerjh ;fjdghadkfj ;akdsjhf k;jsdahf ;kajsdhf ;kasjdhfjldhfghl;aksdjf k;asdjhf sdkjhf ;kasjdfj ;aksdjhfksdgfh;adfjkgsh "
    },
];

function Program() {
    return (
        <Flex flexDirection="column" bg='yellow' alignItems={'Center'} justifyContent={'Center'}>
            <Text fontSize={'6xl'} fontWeight={'bold'}>Program</Text>
            <Flex flexDirection="column" gap={8} alignItems={'Center'} justifyContent={'Center'}>
                {programInfo.map((item) => <ProgramComponent name={item.name} venue={item.venue} description={item.description} />)}
            </Flex>
        </Flex>
    )
}

function ProgramComponent(props) {
    return (
        <Flex flexDirection="row" columnGap={8} maxWidth='60%'>
            <Flex flexDirection="column" maxWidth="60%" fontSize={'3xl'}>
                <Text fontWeight={'bold'}>{props.name}</Text>
                <Text fontWeight={'bold'}>{props.venue}</Text>
                <Text fontWeight={'semibold'}>{props.description}</Text>
            </Flex>
            <Spacer />
            <Image src='https://placekeanu.com/200/200' alt='keanu'/>
        </Flex>
    )
}

export default Program