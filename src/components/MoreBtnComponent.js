import React, {useState} from 'react';
import {Box, Text, VStack, Input, Button, useMediaQuery, HStack} from "@chakra-ui/react"
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react"
import {
Drawer,
DrawerBody,
DrawerFooter,
DrawerHeader,
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
} from "@chakra-ui/react"
import OutsideAlerter from "./OutsideAlerter";

function MoreBtnComponent() {

const pinIconWidth = 50;
const textIconWidth = 170;

// MOREBTN
const [ isOpen, setToggle ] = useState(false);
const toggleOpenClose = () => setToggle(!isOpen);
//OVERLAY
const [ menuOpen, setMenuToggle ] = useState(false);
const toggleMenu = () => setMenuToggle(!menuOpen);
//DELETE
const [ deleteOpen, setDeleteToggle ] = useState(false);
const toggleDelete = () => setDeleteToggle(!deleteOpen);
const cancelRef = React.useRef();


//====================MEDIA QUERIES=========================
const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");

const boxStyle = {
width: pinIconWidth + 'px',
height: pinIconWidth + 'px',
cursor: 'pointer',
zIndex: '2',
textAlign: 'center',
justifyContent: 'center',
alignItems: 'center',
borderRadius: '50px',
backgroundColor: 'black',
p: '5px',
transition: 'all .3s',
opacity: '1',
boxShadow: 'md',
userSelect: 'none',
_hover:{
boxShadow: 'lg'
}
// opacity: isOpen ? '1' : '0',
};

return (
<Box>
  <Box textAlign="right" justifyContent="right" alignItems="right" position="absolute" bottom="0" right="0">
    <Box w="300px">
      <OutsideAlerter isOpen={isOpen} isPinned={""} setToggle={setToggle}>
        <VStack spacing={3} alignItems="flex-end" overflowX="hidden" padding="0 3vw 5vh 0">
          <VStack spacing={2}>
            <HStack spacing={"-" + (textIconWidth - pinIconWidth)} transform={!isOpen ? "scale(.9) translateX(300px)"
              : "scale(.9) translateX(0px)" } opacity={!isOpen ? '0' : '1' } transition="opacity .5s, transform .37s">
              <Box __css={boxStyle} display="flex" backgroundColor="gray.500">
                <svg transform={"scale(.55)"} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share"
                  viewBox="0 0 512 512">
                  <path fill="white"
                    d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z">
                  </path>
                </svg>
              </Box>
              <Box __css={boxStyle} w={textIconWidth} position="absolute" zIndex="0" display="flex"
                backgroundColor="gray.100">
                <Text color="gray.500" fontWeight="medium" pr="30px">Share</Text>
              </Box>
            </HStack>
            <HStack spacing={"-" + (textIconWidth - pinIconWidth)} transform={!isOpen ? "scale(.9) translateX(300px)"
              : "scale(.9) translateX(0px)" } opacity={!isOpen ? '0' : '1' } transition="opacity .4s, transform .31s">
              <Box __css={boxStyle} display="flex" backgroundColor="gray.500">
                <svg transform={"scale(.55)"} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen"
                  viewBox="0 0 512 512">
                  <path fill="white"
                    d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z">
                  </path>
                </svg>
              </Box>
              <Box __css={boxStyle} w={textIconWidth} position="absolute" zIndex="0" display="flex"
                backgroundColor="gray.100">
                <Text color="gray.500" fontWeight="medium" pr="30px">Edit</Text>
              </Box>
            </HStack>
            <HStack onClick={toggleMenu} spacing={"-" + (textIconWidth - pinIconWidth)} transform={!isOpen
              ? "scale(.9) translateX(300px)" : "scale(.9) translateX(0px)" } opacity={!isOpen ? '0' : '1' }
              transition="opacity .35s, transform .25s">
              <Box __css={boxStyle} display="flex" backgroundColor="gray.500">
                <svg transform={"scale(.65)"} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog"
                  viewBox="0 0 512 512">
                  <path fill="white"
                    d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z">
                  </path>
                </svg>
              </Box>
              <Box __css={boxStyle} w={textIconWidth} position="absolute" zIndex="0" display="flex"
                backgroundColor="gray.100">
                <Text color="gray.500" fontWeight="medium" pr="30px">Settings</Text>
              </Box>
            </HStack>
          </VStack>

          {/* OPEN-CLOSE BUTTON */}
          <Box __css={boxStyle} display={isSmallerThan850 ? "none" : "flex"} onClick={toggleOpenClose} transition="all .2s">
            <svg width={!isOpen ? "100%" : "0" } transform={"scale(.45)"} focusable="false" data-prefix="fas"
              data-icon="ellipsis-h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill={"white"}
                d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z">
              </path>
            </svg>
            <svg opacity={!isOpen ? '0' : '1' } width={isOpen ? "18.132" : "0" } height="17.896"
              viewBox="0 0 18.132 17.896">
              <g id="Group_572" data-name="Group 572" transform="translate(-318.727 -86.842)">
                <line id="Line_70" data-name="Line 70" x2="14.458" y2="14.211" transform="translate(320.495 88.609)"
                  fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2.5" />
                <line id="Line_71" data-name="Line 71" x1="14.458" y2="14.211" transform="translate(320.634 88.759)"
                  fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2.5" />
              </g>
            </svg>
          </Box>
        </VStack>
      </OutsideAlerter>
    </Box>
  </Box>

  {/*====================================== SETTINGS MENU =========================================*/}
  <Drawer isOpen={menuOpen} placement="right" size="lg" onClose={toggleMenu}>
    <DrawerOverlay>
      <DrawerContent padding="4%">
        <DrawerCloseButton top="5vh" right="3vw" />
        <DrawerHeader textStyle="h1" mt="10vh" padding="0">Settings</DrawerHeader>

        <DrawerBody mt="7vh" padding="0">
          <VStack spacing={3} alignItems="flex-start">
            <Box w="70%">
              <Text textStyle="h3" color="gray.600" mb="15px">Sampling Time</Text>
              <Input placeholder="Type here..." />
            </Box>
            <Box w="70%">
              <Text textStyle="h3" color="gray.600" mb="15px">Start Time</Text>
              <Input placeholder="Type here..." />
            </Box>
            <Box w="70%">
              <Text textStyle="h3" color="gray.600" mb="15px">End Time</Text>
              <Input placeholder="Type here..." />
            </Box>
          </VStack>
        </DrawerBody>

        <DrawerFooter display="flex" justifyContent="space-between" padding="0">
          <Button bgColor="red" opacity="1" color="white" _hover={{opacity:".8"}} onClick={()=> setDeleteToggle(true)}>
            Delete Project
          </Button>
          <Box>
            <Button variant="outline" mr={3} onClick={toggleMenu}>
              Cancel
            </Button>
            <Button>Save</Button>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </DrawerOverlay>

  </Drawer>


  <AlertDialog isOpen={deleteOpen} leastDestructiveRef={cancelRef} onClose={toggleDelete}>
    <AlertDialogOverlay>
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Delete Customer
        </AlertDialogHeader>

        <AlertDialogBody>
          Are you sure? You can't undo this action afterwards.
        </AlertDialogBody>

        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={toggleDelete}>
            Cancel
          </Button>
          <Button bgColor="red" opacity="1" color="white" _hover={{opacity:".8"}} onClick={toggleDelete} ml={3}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>
</Box>

)
}

export default MoreBtnComponent;