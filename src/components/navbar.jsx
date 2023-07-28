import React, { useState } from 'react'                           
import { Flex, Text, IconButton, Button, Image, Box } from "@chakra-ui/react"
import fblogo from "../assets/fblogo.png"
import iglogo from "../assets/iglogo.png"
import mbffLogo from "../assets/mbfflogo.png"
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useScrollLock } from '../hooks/ScrollLock'


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
            pos="fixed"
            top="0"
            align="center"
            flexDirection={"row"}
            bg="#082499"
            w="100%"
            color="white"
            height="10rem"
            p="1rem"
            alignItems={"center"}
            justifyCo ntent={"space-between"}
            >
            <Flex>
                <Box boxSize={"20rem"}>
                    <Image src={mbffLogo}/>
                </Box>
            </Flex>

                <Flex flexDirection={"column"} justifyContent={"center"}>
                    <Text className="stretchpro" fontSize="4xl">
                        Merri-bek Family Festival
                    </Text>
                    <Flex display={["none", "none", "flex", "flex"]} justifyContent={'space-between'} className="faktum">
                        <Button variant="unstyled" >
                            <Link to="landing" spy={true} smooth={true} offset={-160} duration={500}>Home</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="program" spy={true} smooth={true} offset={-160} duration={500}>Program</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="timetable" spy={true} smooth={true} offset={-160} duration={500}>Timetable</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="tickets" spy={true} smooth={true} offset={-160} duration={500}>Tickets</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="contact" spy={true} smooth={true} offset={-160} duration={500}>Contact</Link>
                        </Button>
                    </Flex>
                </Flex>
                <Flex>
                    <IconButton
                        aria-label="Open Menu"
                        icon={<FaBars size={40}/>}
                        variant="unstyled"
                        justify="flex-end"
                        onClick={handleMenuChange}
                        display={["flex", "flex", "none", "none"]}
                    />
                </Flex>
                <Flex display={['none', 'none', 'flex', 'flex']}>
                    <Button variant="unstyled">
                        <Image src={fblogo} boxSize="40px"/>
                    </Button>
                    <Button variant="unstyled">
                        <Image src={iglogo} boxSize="40px"/>
                    </Button>
                </Flex>
                <Flex
                w="100%"
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                bgColor="brand.blue"
                zIndex={99}
                overflowY="auto"
                display={display}
                flexDirection={"column"}
                >
                    <Flex flexDirection={"flex"}>
                        <IconButton
                            aria-label='Close Menu'
                            icon={<FaTimes size={50} />}
                            mt={2}
                            mr={2}
                            color="white"
                            variant="unstyled"
                            onClick={handleCloseMenu}
                            justify="flex-end"
                        />
                    </Flex>
                    <Flex className="stretchpro" flexDirection={"column"} alignItems={"flex-end"} w="100%">
                        <Button variant="unstyled" >
                            <Link to="landing" spy={true} smooth={true} offset={-160} duration={500} onClick={handleCloseMenu}>Home</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="program" spy={true} smooth={true} offset={-160} duration={500} onClick={handleCloseMenu}>Program</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="timetable" spy={true} smooth={true} offset={-160} duration={500} onClick={handleCloseMenu}>Timetable</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="tickets" spy={true} smooth={true} offset={-160} duration={500} onClick={handleCloseMenu}>Tickets</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="contact" spy={true} smooth={true} offset={-160} duration={500} onClick={handleCloseMenu}>Contact</Link>
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
    )
}
export default NavBar