import React, {useState} from 'react';
import { Box, Text, Link, VStack, useMediaQuery } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Link as NavLink } from 'react-router-dom';

function MenuLinksComponent({setToggle, isOpen, isPinned}) {

  const [ sensorsOpen, setSensors ] = useState(false);
  const toggleOpenClose = () => setSensors(!sensorsOpen);

  //====================PROFILE TOGGLE=========================
  const [ profileOpen, setProfile ] = useState(false);
  const toggleProfile = () => setProfile(!profileOpen);
  const toggleMenu = () => setToggle(false);
  
  const backBtnStyle = {
    userSelect: 'none',
    cursor: 'pointer',
    zIndex: '2',
    transition: 'all .3s',
    position: 'relative',
    left: '-20px',
    color: 'white',
    };
  
  return (
    <Box>
      <Box position="relative" display="flex" justifyContent="left" alignItems="center" h="65vh" pl="20%" overflow="hidden">
        
        {/* MAIN NAV */}
        <VStack alignItems="left" spacing={8} textAlign="left" transition="all .5s" transform={!sensorsOpen && !profileOpen ? "" : ["translateX(-100vw)", "translateX(-100vw)", "translateX(-700px)"]}>
          <Link textStyle="menu" as={NavLink} to="/" onClick={toggleMenu}>Projects</Link>
          <Link textStyle="menu" as={NavLink} to="/notes" onClick={toggleMenu}>Notes</Link>
          <Text textStyle="menu" onClick={ setSensors }>Sensors</Text>
          <Link textStyle="menu" as={NavLink} to="/notifications" onClick={toggleMenu}>Notifications</Link>
        </VStack>

        {/* SENSORS */}
        <VStack position="absolute" alignItems="left" spacing={10} textAlign="left" transition="all .4s" transform={!sensorsOpen || profileOpen ? ["translateX(100vw)", "translateX(100vw)", "translateX(500px)"] : ""}>
          <Text 
            opacity=".7" 
            width="fit-content !important" 
            style={backBtnStyle} 
            onClick={ toggleOpenClose }
            _hover= {{ transition: "all 0.25s", opacity: "1 !important" }}><ChevronLeftIcon pb="2px" transform="scale(1.3)"></ChevronLeftIcon>Back</Text>
          <VStack alignItems="left" spacing={8} textAlign="left" borderLeft="2px" borderColor="whiteAlpha.400" pl="20px">
            <Text textStyle="menu" pointerEvents="none" mt="5px">Sensors</Text>
            <Link textStyle="submenu">Conversions</Link>
            <Link textStyle="submenu">Manual Uploads</Link>
            <Link textStyle="submenu">Data Streams</Link> 
          </VStack>
        </VStack>

        {/* PROFILE */}
        <VStack position="absolute" alignItems="left" spacing={10} textAlign="left" transition="all .4s" transform={!profileOpen ? ["translateX(100vw)", "translateX(100vw)", "translateX(500px)"] : ""}>
          <Text 
            opacity=".7" 
            width="fit-content !important" 
            style={backBtnStyle} 
            onClick={ toggleProfile }
            _hover= {{ transition: "all 0.25s", opacity: "1 !important" }}><ChevronLeftIcon pb="2px" transform="scale(1.3)"></ChevronLeftIcon>Back</Text>
          <VStack alignItems="left" spacing={8} textAlign="left" borderLeft="2px" borderColor="whiteAlpha.400" pl="20px">
            <Link textStyle="menu" pointerEvents="none" mt="5px">Profile</Link>
            <Link textStyle="submenu">Organisation</Link>
            <Link textStyle="submenu">Feedback</Link>
            <Link textStyle="submenu">Logout</Link>
          </VStack>
        </VStack>

      </Box>

      {/* PROFILE BTN */}
      <Box onClick={toggleProfile} display={isOpen || isPinned ? "flex" : "none"} justifyContent="left" alignItems="center" float="right" h="15%" pr={isOpen || isPinned ? "15%" : "30%"}>
        <Text 
          textStyle="menu" 
          display={isOpen || isPinned ? "flex" : "none"} 
          alignContent="center" justifyContent="center" 
          opacity="0.65" 
          fontSize={["22px", "22px", "22px"]} 
          _hover={{ 
            cursor: "pointer",
            transition: "all 0.25s",
            opacity: "1",
        }}>User <ChevronRightIcon pb="2px" transform="scale(1.3)"></ChevronRightIcon></Text>
      </Box>
    </Box>

  )
}

export default MenuLinksComponent;