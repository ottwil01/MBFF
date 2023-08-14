import React, { useState } from 'react'                           
import { Flex, Text, IconButton, Button, Image, Box, ButtonGroup } from "@chakra-ui/react"
import Fblogo from "/fblogo.png"
import Iglogo from "/iglogo.png"
import Mbfflogo from "/mbfflogo.png"
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useScrollLock } from '../hooks/ScrollLock'

const links = ["Home", "Program", "Timetable", "Tickets", "Contact"]
const socials = [{Fblogo}, {Iglogo}]

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
            flexDirection={"row"}
            bg="brand.blue"
            w="100%"
            color="white"
            h={["70px", "70px", "140px"]}
            p="0.6em"
            justifyContent={"space-between"}
            overflow="hidden"
            >
                <Flex minW={["100px", "100px", "205px"]} w={["100px", "100px", "205px"]}>
                    <Image src={Mbfflogo} href="#"/>
                </Flex>
                <Flex px="0.3em" flexDirection={"column"} justifyContent={"center"}>
                    <Text fontSize={["4.7vw", "24", "45", "3vw"]} textAlign="start" className="stretchpro">
                        Merri-bek Family Festival
                    </Text>
                    <Flex justifyContent={"space-between"} display={[ "none", "none", "none", "flex", "flex" ]}  className="faktum">
                        {links.map((link, index) => {
                            return <Button fontSize="20" key={index} variant="unstyled" >
                                        <Link to={link} spy={true} smooth={true} offset={-160} duration={500}>{link}</Link>
                                    </Button>
                        })}
                    </Flex>
                </Flex>
                <Flex mr="12px" display={["flex", "flex", "flex", "none", "none"]}>
                    <IconButton
                        aria-label="Open Menu"
                        icon={<FaBars size={40}/>}
                        variant="unstyled"
                        justify="flex-end"
                        onClick={handleMenuChange}
                    />
                </Flex>
                <Flex  display={['none', 'none', "none", 'flex', 'flex']}>
                    <IconButton 
                    aria-label="fb-logo"
                    icon={<Image boxSize="60px" src={Fblogo} href="/"/>}
                    isRound={true}
                    > 
                    </IconButton>
                    <IconButton
                    aria-label="ig-logo"
                    icon={<Image boxSize="60px" src={Iglogo} href="/"/>}
                    isRound={true}
                    >
                    </IconButton>
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
                    <Box w={"10rem"}>
                        <Image src={Mbfflogo}/>
                    </Box>
                    <Flex>
                    <IconButton
                        aria-label='Close Menu'
                        icon={<FaTimes size={50} />}
                        color="white"
                        variant="unstyled"
                        onClick={handleCloseMenu}
                    />
                    </Flex>
                </Flex>
                    <Flex mb="70px">
                        <Text className="stretchpro" fontSize={"x-large"}>
                            Merri-bek<br/>Family Festival
                        </Text>
                    </Flex>
                    <Flex className="stretchpro" flexDirection={"column"} alignItems={"flex-end"} w="100%">
                    {links.map((link, index) => {
                            return <Button key={index} variant="unstyled" >
                            <Link to={link} spy={true} smooth={true} offset={-160} duration={500} onClick={handleCloseMenu}>{link}</Link>
                        </Button>
                        })}
                    </Flex>
                    <Flex w="100%" mt="50px">
                        <IconButton aria-label="fb-logo">
                            <Image boxSize="60px" src={Fblogo} href="/"/>
                        </IconButton>
                        <IconButton href="/" aria-label="ig-logo">
                            <Image boxSize="60px" src={Iglogo} href="/"/>
                        </IconButton>
                    </Flex>

                </Flex>
            </Flex>
    )
}
export default NavBar