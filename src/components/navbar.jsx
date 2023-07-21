import React, { useState } from 'react'                           
import { Box, Flex, Heading, Spacer, IconButton, useDisclosure, Collapse, Drawer, DrawerContent, DrawerOverlay, DrawerBody, DrawerHeader, DrawerCloseButton, Button, Image, VStack, DrawerFooter, Link } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import fblogo from "../assets/fblogo.png"
import iglogo from "../assets/iglogo.png"
import mbffLogo from "../assets/MBFFLogo.png"

    // const Navbar = () => {
    //     const { isOpen, onToggle } = useDisclosure();
    //     const [navLinks] = useState([
    //       { label: 'Home', href: '#' },
    //       { label: 'Program', href: '#' },
    //       { label: 'Timetable', href: '#' },
    //       { label: 'Tickets', href: '#' },
    //       { label: 'Contact', href: '#' },
    //     ]);
    //     const socialMediaLinks = [
    //       { label: 'Facebook', href: 'https://www.facebook.com/' },
    //       { label: 'Instagram', href: 'https://www.instagram.com/' },
    //     ];
    //     return (
    //       <Box 
    //       bg="blue"
    //       pt={30}
    //       pos='fixed'
    //       w='100%'
    //       zIndex='9999'
    //       boxShadow='md'
    //       flexDirection={'row'}
    //       >
    //         <Image src={mbffLogo} alt='mbfflogo' boxSize='40px' objectFit='contain'/>
    //         <Flex h={16} flexDirection='row' alignItems="center" justifyContent="space-between">
    //             <Heading color='white' font='StretchPro'>
    //                 Merry-Bek Family Festival
    //             </Heading>
    //             <IconButton
    //                 size="md"
    //                 icon={<HamburgerIcon color="white" />}
    //                 aria-label="Open Menu"
    //                 variant="unstyled"
    //                 display={{ base: 'flex', md: 'none' }}
    //                 onClick={onToggle}
    //                 key='full'
    //             />
    //             <Spacer />
    //             <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
    //                 {navLinks.map((link) => (
    //                 <Box key={link.label} mr={8}>
    //                     <a href={link.href} style={{ color: 'white' }}>
    //                     {link.label}
    //                     </a>
    //                 </Box>
    //                 ))}
    //             </Box>
    //         </Flex>
    //         <Collapse in={isOpen} animateOpacity>
    //           <Box pb={4} display={{ md: 'none' }}>
    //             {navLinks.map((link) => (
    //               <Box key={link.label} mb={2}>
    //                 <a href={link.href} style={{ color: 'white' }}>
    //                   {link.label}
    //                 </a>
    //               </Box>
    //             ))}
    //           </Box>
    //         </Collapse>
      
    //         {/* Full-screen menu */}
    //             <Drawer placement="right" onClose={onToggle} isOpen={isOpen}>
    //             <DrawerOverlay />
    //                 <DrawerContent bg="blue" color="white">
    //                     <DrawerCloseButton />
    //                     <DrawerHeader>Your Logo</DrawerHeader>
    //                     <Flex flexDirection={'row'}>
    //                         <DrawerBody>
    //                             <VStack>
    //                             {navLinks.map((link) => (
    //                                 <Button
    //                                 key={link.label}
    //                                 color="white"
    //                                 variant="unstyled"
    //                                 _hover={{ textDecoration: 'underline' }}
    //                                 mb={2}
    //                                 onClick={onToggle}
    //                                 >
    //                                 {link.label}
    //                                 </Button>
    //                             ))}
    //                             </VStack>
    //                         </DrawerBody>
    //                     </Flex>
    //                 </DrawerContent>
    //             </Drawer>
    //         </Box>
    //     );
    // };



    const NavBar = () => {
        const { isOpen, onOpen, onClose } = useDisclosure();
        const [navItems] = useState([

        ]);
      
        return (
            <Flex
            pos="fixed"
            align="center"
            flexDirection={"row"}
            bg="blue"
            w="100%"
            color="white"
            height={40}
            p={5}
            >
                <Image boxSize="12vw" src={mbffLogo}/>
                <Flex flexDirection={"column"} justifyContent={"center"}>
                    <Heading>
                        Merri-bek Family Festival
                    </Heading> 
                    <Flex display={["none", "none", "flex", "flex"]} justify={'space-between'}>
                        <Link href="/">
                            <Button variant="unstyled" >
                            hello
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="unstyled" >
                            hello
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="unstyled" >
                            hello
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="unstyled" >
                            hello
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="unstyled" >
                            hello
                            </Button>
                        </Link>
                    </Flex>
                    <IconButton
                    aria-label="open menu"
                    size="lg"
                    icon={<HamburgerIcon />}
                    display={["flex", "flex", "none", "none"]}
                    variant="unstyled"
                    />
                </Flex>
                <Flex flexDirection={"column"} display={["none", "none", "flex", "flex"]} justify={'space-between'}>
                        <Link href="/">
                            <Button variant="unstyled" >
                            hello
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="unstyled" >
                            hello
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="unstyled" >
                            hello
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="unstyled" >
                            hello
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="unstyled" >
                            hello
                            </Button>
                        </Link>
                    </Flex>
            <Button>
                fb
            </Button>
            <Button>
                ig
            </Button>
            </Flex>
        );
    };
      
      export default NavBar;