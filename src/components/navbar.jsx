import React, { useState } from 'react'                           
import { Flex, Heading, IconButton, Button, Image } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import fblogo from "../assets/fblogo.png"
import iglogo from "../assets/iglogo.png"
import mbffLogo from "../assets/MBFFLogo.png"
import { Link, closeMenu } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'


    // const NavBar = () => {
        // const [display, changeDisplay] = useState("none")
        // const [programY, setProgramY] = useState(0)
        // const [contactY, setContactY] = useState(0)
        // const [landingY, setLandingY] = useState(0)

        // useEffect(() => {
        //     const programId = document.getElementById("program")
        //     const programY = programId.getBoundingClientRect()
        //     setProgramY(programY.top)
        //     const 
        // }, [])

        // function scrollToProgram() {
        //     animateScroll.scrollTo(yPosition, {duration: 5000, smooth: true})

        // }
//         return (
//             <Flex
//             pos="fixed"
//             align="center"
//             flexDirection={"row"}
//             bg="blue"
//             w="100%"
//             color="white"
//             height="10rem"
//             p="1rem"
//             alignItems={"center"}
//             justifyContent={"space-between"}
//             >
//                 <Image boxSize="130px" src={mbffLogo}/>
//                 <Flex flexDirection={"column"} justifyContent={"center"}>
//                     <Heading>
//                         Merri-bek Family Festival
//                     </Heading> 
//                     <Flex display={["none", "none", "flex", "flex"]}>
//                         <Button onClick={scrollToProgram} variant="unstyled" >
//                         Home
//                         </Button>
//                             <Button variant="unstyled" >
//                             Program
//                             </Button>
//                             <Button variant="unstyled" >
//                             Timetable
//                             </Button>
//                             <Button variant="unstyled" >
//                             Tickets
//                             </Button>
//                             <Button variant="unstyled" >
//                             Contact
//                             </Button>
//                     </Flex>
//                 </Flex>
//                 <Flex>
//                     <IconButton
//                         aria-label="Open Menu"
//                         icon={<HamburgerIcon />}
//                         display={["flex", "flex", "none", "none"]}
//                         variant="unstyled"
//                         justify="flex-end"
//                         onClick={() => changeDisplay("flex")}
//                     />
//                 </Flex>
//                 <Button variant="unstyled" display={['none', 'none', 'flex', 'flex']}>
//                     <Image src={fblogo} boxSize="40px"/>
//                 </Button>
//                 <Button variant="unstyled" display={['none', 'none', 'flex', 'flex']}>
//                     <Image src={iglogo} boxSize="40px"/>
//                 </Button>
//                 <Flex
//                 w="100%"
//                 h="100%"
//                 bgColor="blue"
//                 zIndex={20}
//                 pos="fixed"
//                 top="0"
//                 left="0"
//                 overflowY="auto"
//                 display={display}
//                 >
//                 <Flex flexDirection={"row"}>
//                     <Flex flexDirection={"column"} align="flex-start">
//                         <Link href="/">
//                             <Button variant="unstyled" >
//                             Home
//                             </Button>
//                         </Link>
//                         <Link href="/">
//                             <Button variant="unstyled" >
//                             Program
//                             </Button>
//                         </Link>
//                         <Link href="/">
//                             <Button variant="unstyled" >
//                             Timetable
//                             </Button>
//                         </Link>
//                         <Link href="/">
//                             <Button variant="unstyled" >
//                             Tickets
//                             </Button>
//                         </Link>
//                         <Link href="/">
//                             <Button variant="unstyled" >
//                             Contact
//                             </Button>
//                         </Link>
//                     </Flex>
//                         <IconButton
//                         aria-label='Close Menu'
//                         mt={2}
//                         mr={2}
//                         color="white"
//                         variant="unstyled"
//                         icon={<CloseIcon />}
//                         onClick={() => changeDisplay("none")}
//                         />
//                 </Flex>
//             </Flex>
//         </Flex>
//     )
// }
// export default NavBar;

    const NavBar = () => {
        const [click, setClick] = useState(false)
        const handleClick = () => setClick(!click)
        const [display, changeDisplay] = useState('none')

        return (
            <Flex
            pos="fixed"
            align="center"
            flexDirection={"row"}
            bg="blue"
            w="100%"
            color="white"
            height="10rem"
            p="1rem"
            alignItems={"center"}
            justifyContent={"space-between"}
            >
                <Image boxSize="130px" src={mbffLogo}/>
                <Flex flexDirection={"column"} justifyContent={"center"}>
                    <Heading>
                        Merri-bek Family Festival
                    </Heading> 
                    <Flex display={["none", "none", "flex", "flex"]}>
                        <Button variant="unstyled" >
                            <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="program" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Program</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="timetable" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Timetable</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="tickets" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Tickets</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="contact" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Contact</Link>
                        </Button>
                    </Flex>
                </Flex>
                <Flex>
                    <IconButton
                        aria-label="Open Menu"
                        icon={<HamburgerIcon />}
                        variant="unstyled"
                        justify="flex-end"
                        onClick={() => changeDisplay("flex")}
                        display={["flex", "flex", "none", "none"]}
                    />
                </Flex>
                <Button variant="unstyled" display={['none', 'none', 'flex', 'flex']}>
                    <Image src={fblogo} boxSize="40px"/>
                </Button>
                <Button variant="unstyled" display={['none', 'none', 'flex', 'flex']}>
                    <Image src={iglogo} boxSize="40px"/>
                </Button>

                <Flex
                w="100%"
                h="100%"
                bgColor="blue"
                zIndex={20}
                top="0"
                left="0"
                overflowY="auto"
                display={display}
                >
                    <Flex>
                        <IconButton
                            aria-label='Close Menu'
                            icon={<CloseIcon />}
                            mt={2}
                            mr={2}
                            color="white"
                            variant="unstyled"
                            onClick={() => changeDisplay('none')}
                        />
                    </Flex>
                    <Flex flexDirection={"column"}>
                        <Button variant="unstyled" >
                            <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="program" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Program</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="timetable" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Timetable</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="tickets" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Tickets</Link>
                        </Button>
                        <Button variant="unstyled" >
                            <Link to="contact" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Contact</Link>
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
    )
}
export default NavBar;