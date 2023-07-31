import React, { useState } from 'react'                           
import { Flex, Text, IconButton, Button, Image, Box, ButtonGroup } from "@chakra-ui/react"
import fblogo from "../assets/fblogo.png"
import iglogo from "../assets/iglogo.png"
import mbffLogo from "/src/assets/mbfflogo.png"
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useScrollLock } from '../hooks/ScrollLock'



    // function nav() {
    //     return (
    //         <Flex zIndex={1}>
    //             <NavBar />
    //         </Flex>
    //     )
    // }


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
            align="center"
            flexDirection={"row"}
            bg="brand.blue"
            w="100%"
            color="white"
            h={["70px", "70px", "140px"]}
            p="1rem"
            alignItems={"center"}
            justifyContent={"space-between"}
            >
                <Flex minW={["90px", "90px", "205px"]} w={["90px", "90px", "205px"]}>
                    <Image src={mbffLogo}/>
                </Flex>
                <Flex flexDirection={"column"} justifyContent={"center"}>
                    <Text align={[ "normal", "normal", "center" ]} className="stretchpro">
                        Merri-bek Family Festival
                    </Text>
                    <Flex display={[ "none", "none", "flex", "flex" ]} justifyContent={'space-between'} className="faktum">
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
                <Flex justifyContent={"center"} w="130px" justify="space-between" display={['none', 'none', 'flex', 'flex']}>
                    <ButtonGroup gap="10px"variant="unstyled" boxSize={["none", "none", "40px", "60px", "90px"]}>
                        <Button>
                            <Image src={fblogo}/>
                        </Button>
                        <Button>
                            <Image src={iglogo}/>
                        </Button>
                    </ButtonGroup>
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
                overflowY="auto"
                display={display}
                flexDirection={"column"}
                >
                <Flex flexDir={"row"} justifyContent={"space-between"}>
                    <Box w={"10rem"}>
                        <Image src={mbffLogo}/>
                    </Box>
                    <Flex>
                    <IconButton
                        aria-label='Close Menu'
                        icon={<FaTimes size={50} />}
                        color="white"
                        variant="unstyled"
                        onClick={handleCloseMenu}
                        gap="10"
                    />
                    </Flex>
                </Flex>
                    <Flex mb="70px">
                        <Text className="stretchpro" fontSize={"x-large"}>
                            Merri-bek<br/>Family Festival
                        </Text>
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