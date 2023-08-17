import React, { useState } from 'react'                           
import { Flex, Text, IconButton, Button, Image, Box } from "@chakra-ui/react"
import Fblogo from "/fblogo.png"
import Iglogo from "/iglogo.png"
import Mbff from "/mbfflogo-fix.png"
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useScrollLock } from '../hooks/ScrollLock'

const links = ["Home", "Program", "Timetable", "Tickets", "Contact"]

    function NavBar() {
        const [display, changeDisplay] = useState('none')
        const { lockScroll, unlockScroll } = useScrollLock()

        function handleMenuChange() {
            if(display === "flex") {changeDisplay("none"); unlockScroll()} else {changeDisplay("flex"); lockScroll()}
        }
        function handleCloseMenu() {
            unlockScroll()
            handleMenuChange()
        }

        return (
            <Flex
            zIndex={2}
            pos="fixed"
            top="0"
            left="0"
            align="center"
            flexDirection="row"
            bg="brand.blue"
            w="100%"
            color="white"
            h={["70px", "70px", "140px"]}
            p={["1em", "1em", "1.5em"]}
            justifyContent={"space-between"}
            >
                <IconButton
                as="a"
                aria-label="logo"
                minW={["100px", "100px", "205px"]}
                w={["100px", "100px", "210px"]}
                display="flex"
                icon={<Image src={Mbff} alt="mbff logo"/>}
                variant="unstyled"
                href={"/"}
                />
                <Flex px="0.3em" flexDirection={"column"} justifyContent={"center"}>
                    <Text fontSize={["4.7vw", "23", "43", "3vw"]} textAlign="start" className="stretchpro">
                        Merri-bek Family Festival
                    </Text>
                    <Flex justifyContent={"space-between"} display={[ "none", "none", "none", "flex", "flex" ]}  className="faktum">
                        {links.map((link, index) => {
                            return <Button fontSize="1.7vw" key={index} variant="unstyled" >
                                        <Link to={link} spy={true} smooth={true} offset={-140} duration={500}>{link}</Link>
                                    </Button>
                        })}
                    </Flex>
                </Flex>
                <Flex display={["flex", "flex", "flex", "none", "none"]}>
                    <IconButton
                        aria-label="Open Menu"
                        icon={<FaBars size={40}/>}
                        variant="unstyled"
                        justify="flex-end"
                        onClick={handleMenuChange}
                    />
                </Flex>
                <Flex display={['none', 'none', "none", 'flex', 'flex']}>
                    <IconButton
                        as="a"
                        boxSize={"60px"}
                        aria-label="fb-logo"
                        icon={<Image boxSize="60px" src={Fblogo}/>}
                        isRound={true}
                        mr="5px"
                        variant="unstyled"
                        target="_blank"
                        href={"https://www.facebook.com/events/597900092510902"}
                    />
                    <IconButton
                        as="a"
                        boxSize={"60px"}
                        aria-label="ig-logo"
                        icon={<Image boxSize="60px" src={Iglogo}/>}
                        isRound={true}
                        ml="5px"
                        variant="unstyled"
                        target="_blank"
                        href={"https://www.instagram.com/mbff.au/"}
                    />
                </Flex>
                <Flex
                w="100%"
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                p="4"
                bg="brand.blue"
                zIndex={99}
                display={display}
                flexDirection={"column"}
                >
                <Flex flexDir={"row"} justifyContent={"space-between"}>
                    <Box w={["50vw", "40vw", "30vw"]}>
                    <IconButton
                        as="a"
                        aria-label="logo"
                        icon={<Image src={Mbff} alt="mbff logo"/>}
                        variant="unstyled"
                        href={"/"}
                    />
                    </Box>
                    <Flex mt={["-5px", "-5px", "30px"]} mr={["-5px", "-5px", "3px"]}>
                    <IconButton
                        aria-label='Close Menu'
                        icon={<FaTimes size={50} />}
                        color="white"
                        variant="unstyled"
                        onClick={handleCloseMenu}
                    />
                    </Flex>
                </Flex>
                    <Flex>
                        <Text className="stretchpro" fontSize={["xl", "3xl", "4xl"]}>
                            Merri-bek<br/>Family Festival
                        </Text>
                    </Flex>
                    <Flex my="10px" className="stretchpro" flexDirection={"column"} alignItems={"flex-end"} w="100%">
                    {links.map((link, index) => {
                            return <Button fontSize={["23", "23", "40"]} h={["50px", "50px", "80px"]} key={index} variant="unstyled" >
                            <Link to={link} spy={true} smooth={true} offset={-70} duration={500} onClick={handleCloseMenu}>{link}</Link>
                        </Button>
                        })}
                    </Flex>
                    <Flex w="100%">
                    <IconButton
                        as="a"
                        boxSize={"60px"}
                        aria-label="fb-logo"
                        icon={<Image boxSize="60px" src={Fblogo}/>}
                        isRound={true}
                        mr="5px"
                        variant="unstyled"
                        target="_blank"
                        href={"https://www.facebook.com/events/597900092510902"}
                    />
                    <IconButton
                        as="a"
                        boxSize={"60px"}
                        aria-label="ig-logo"
                        icon={<Image boxSize="60px" src={Iglogo}/>}
                        isRound={true}
                        ml="5px"
                        variant="unstyled"
                        target="_blank"
                        href={"https://www.instagram.com/mbff.au/"}
                    />
                    </Flex>
                </Flex>
            </Flex>
    )
}
export default NavBar