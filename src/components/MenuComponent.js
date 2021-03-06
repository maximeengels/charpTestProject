import React, { useState } from 'react';
import MenuLinksComponent from './MenuLinksComponent';
import OutsideAlerter from "./OutsideAlerter";
import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon, ChevronRightIcon} from '@chakra-ui/icons'

function MenuComponent() {

  const pinIconWidth = 40;
  const menuWidth = 400;
  

  //===================MENU TOGGLE=========================
  const [ isOpen, setToggle ] = useState(false);
  const toggleOpenClose = () => setToggle(!isOpen);

  
  //====================PIN TOGGLE=========================
  const [ isPinned, setPin ] = useState(false);
  const togglePin = () => {
    setPin(!isPinned);
    checkPinnedToClose();
  }
  
  function checkPinnedToClose() { 
    if(isPinned && isOpen){ 
      toggleOpenClose();
    } else {
      void(0);
    }
  }

  //====================MEDIA QUERIES=========================
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");

  return (
    /*==============================MENU===============================*/
      <Box>
        <OutsideAlerter isOpen={isOpen} isPinned={isPinned} setToggle={setToggle}>
          <HamburgerIcon onClick={toggleOpenClose} zIndex="20" display={[!isOpen ? "block" : "none", !isOpen ? "block" : "none", "none"]} opacity={[1, 1, 0]} position="absolute" right="40px" top="30px" w={6} h={6} color="white" />
          <Box zIndex="20" position="absolute" left="40px" top="32px" transform="scale(1.3)" opacity={[!isOpen ? 1 : 0, !isOpen ? 1 : 0, 0]}>
                <svg width="19.367" height="19.505" viewBox="0 0 19.367 19.505">
                  <g id="Group_13" data-name="Group 13" transform="translate(0)">
                    <path id="Path_13" data-name="Path 13" d="M-579.018-5430.805l-2.129,4.326a1.956,1.956,0,0,1-1.717,1.1h-3.159l4.876-9.752Z" transform="translate(586.023 5444.885)" fill="#fff"/>
                    <path id="Path_14" data-name="Path 14" d="M-574.977-5446.511l-1.785,3.5a1.889,1.889,0,0,0,0,1.717l1.717,3.5h0l4.82,9.7a1.945,1.945,0,0,0,1.743,1.081h3.12Z" transform="translate(584.729 5446.511)" fill="#fff"/>
                  </g>
                </svg>
          </Box>
          <CloseIcon onClick={toggleOpenClose} zIndex="20" display={isOpen ? "block" : "none"} opacity={[1, 1, 0]} position="absolute" right="40px" top="90px" w={5} h={5} color="white" />

          <Box style={!isPinned && isLargerThan800 && !isOpen ? {transform:"translateX(-310px)"} : (!isPinned && !isOpen && isSmallerThan850 ? { transform:"translateY(-90vh)" } : {} )} transition="all 0.35s" cursor={!isPinned && !isOpen ? "pointer" : "auto"} _hover={{width:["100vw", "100vw", !isPinned && !isOpen ? menuWidth + 15 : menuWidth]}} textAlign="left" justifyContent="left" bgGradient="linear(to-b, #3146CF, #329DEF)" w={["100vw", "100vw", "400px"]} h="100vh" boxShadow={["2xl", "2xl", !isPinned ? "dark-lg" : "none"]} transform={!isPinned ? menuWidth + "px" : ""} position={!isPinned ? "absolute" : "relative"}>

            <Box position="absolute" right="35px" top="100px" transform={"scale(1.4)"} transition="all .25s" opacity={[0, 0, !isPinned && isLargerThan800 && !isOpen ? 1 : 0]}>
              <svg width="19.367" height="19.505" viewBox="0 0 19.367 19.505">
                <g id="Group_13" data-name="Group 13" transform="translate(0)">
                  <path id="Path_13" data-name="Path 13" d="M-579.018-5430.805l-2.129,4.326a1.956,1.956,0,0,1-1.717,1.1h-3.159l4.876-9.752Z" transform="translate(586.023 5444.885)" fill="#fff"/>
                  <path id="Path_14" data-name="Path 14" d="M-574.977-5446.511l-1.785,3.5a1.889,1.889,0,0,0,0,1.717l1.717,3.5h0l4.82,9.7a1.945,1.945,0,0,0,1.743,1.081h3.12Z" transform="translate(584.729 5446.511)" fill="#fff"/>
                </g>
              </svg>
            </Box>

            <Box display={["none", "none", "flex"]} cursor="pointer" zIndex="2" onClick={togglePin} transition="all .25s" opacity={isOpen || isPinned ? "1" : "0"} top="20vh" left={menuWidth - (pinIconWidth/2) + "px"} position="absolute" textAlign="center" justifyContent="center" alignItems="center" borderRadius="50%" p="8px 5px 5px" bgColor={!isPinned ? "white" : "black"} w={pinIconWidth+"px"} h={pinIconWidth+"px"}>
              <svg display="block" transform={"scale(.45)"} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbtack" role="img" viewBox="0 0 384 512">
                <path fill={!isPinned ? "#A3ADB5" : "white"} d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"></path>
              </svg>
            </Box>
            
            <Box onClick={ !isPinned && !isOpen ? toggleOpenClose : void(0)} w={["100vw", "100vw", "400px"]} h="100vh" overflow="hidden">
              
              {/* LOGO */}
              <Box opacity={[0, 0, 1]} display="flex" justifyContent="center" alignItems="center" w="100%" h="18%">
                  <svg width="91" height="43.701" viewBox="0 0 91 43.701">
                    <g id="Group_636" data-name="Group 636" transform="translate(628.411 5446.511)">
                      <g id="Group_14" data-name="Group 14" transform="translate(-628.411 -5446.511)">
                        <path id="Path_10" data-name="Path 10" d="M-618.728-5430.911a5.8,5.8,0,0,1-5.768-6.525,5.755,5.755,0,0,1,4.808-5.014,5.617,5.617,0,0,1,3.983.755,1.885,1.885,0,0,0,2.336-.343l1.58-1.58a9.632,9.632,0,0,0-8.173-2.748,9.7,9.7,0,0,0-8.379,8.517A9.7,9.7,0,0,0-618.659-5427a9.541,9.541,0,0,0,6.868-2.884l-1.58-1.58a1.98,1.98,0,0,0-2.336-.343A5.769,5.769,0,0,1-618.728-5430.911Z" transform="translate(628.411 5446.502)" fill="#fff"/>
                        <path id="Path_11" data-name="Path 11" d="M-594.941-5446.511v9.752H-602.7v-9.752h-3.915v19.437h3.915v-5.838h7.761v5.838h3.915v-19.437Z" transform="translate(625.297 5446.511)" fill="#fff"/>
                        <path id="Path_12" data-name="Path 12" d="M-556.375-5436.334" transform="translate(618.118 5445.057)" fill="#fff"/>
                        <g id="Group_13" data-name="Group 13" transform="translate(36.331)">
                          <path id="Path_13" data-name="Path 13" d="M-579.018-5430.805l-2.129,4.326a1.956,1.956,0,0,1-1.717,1.1h-3.159l4.876-9.752Z" transform="translate(586.023 5444.885)" fill="#fff"/>
                          <path id="Path_14" data-name="Path 14" d="M-574.977-5446.511l-1.785,3.5a1.889,1.889,0,0,0,0,1.717l1.717,3.5h0l4.82,9.7a1.945,1.945,0,0,0,1.743,1.081h3.12Z" transform="translate(584.729 5446.511)" fill="#fff"/>
                        </g>
                        <path id="Path_15" data-name="Path 15" d="M-531.639-5446.511h-8.791v19.437h3.915v-5.838h4.876a6.771,6.771,0,0,0,6.8-6.8A6.772,6.772,0,0,0-531.639-5446.511Zm0,9.753h-4.876v-5.838h4.876a2.975,2.975,0,0,1,2.954,2.953A2.918,2.918,0,0,1-531.639-5436.758Z" transform="translate(615.839 5446.511)" fill="#fff"/>
                        <path id="Path_16" data-name="Path 16" d="M-561.023-5446.511h0v19.437h3.915v-5.838h4.4l2.413,4.77a1.947,1.947,0,0,0,1.737,1.068h3.13l-3.366-6.731a6.837,6.837,0,0,0,3.365-5.859,7,7,0,0,0-7.027-6.847Zm3.915,3.916h4.876a2.974,2.974,0,0,1,2.953,2.953,2.975,2.975,0,0,1-2.953,2.954h-4.876Z" transform="translate(618.782 5446.511)" fill="#fff"/>
                      </g>
                      <path id="Path_486" data-name="Path 486" d="M-31.064-8.536l-.924,2.706h5.148l-.924-2.706q-.44-1.3-.836-2.486t-.77-2.53h-.088q-.374,1.342-.77,2.53T-31.064-8.536ZM-35.024,0l5.1-14.5h1.012L-23.8,0H-24.86l-1.694-4.972H-32.3L-34.012,0ZM-21.6,0V-10.56h.836L-20.68-8.6h.066a5.159,5.159,0,0,1,1.287-1.606,2.636,2.636,0,0,1,1.7-.616,3.1,3.1,0,0,1,.55.044,1.9,1.9,0,0,1,.506.176l-.22.88a2.154,2.154,0,0,0-.462-.143,3.176,3.176,0,0,0-.506-.033,2.467,2.467,0,0,0-1.485.605,5.044,5.044,0,0,0-1.4,2.1V0Zm9.856.264A3.078,3.078,0,0,1-13.024.033a2.043,2.043,0,0,1-.814-.649,2.534,2.534,0,0,1-.429-1.012,6.509,6.509,0,0,1-.121-1.3v-6.8h-1.65v-.748l1.672-.088.132-3.058h.836v3.058h3.058v.836H-13.4v6.886a4.934,4.934,0,0,0,.077.913,1.886,1.886,0,0,0,.275.7,1.328,1.328,0,0,0,.539.462,2.056,2.056,0,0,0,.891.165,2.563,2.563,0,0,0,.671-.1A4.168,4.168,0,0,0-10.3-.924l.264.792a7.427,7.427,0,0,1-.924.286A3.5,3.5,0,0,1-11.748.264Zm13.64,0A5.714,5.714,0,0,1-.572-.264,5.485,5.485,0,0,1-2.5-1.771,7.03,7.03,0,0,1-3.74-4.147a10.413,10.413,0,0,1-.44-3.135,9.994,9.994,0,0,1,.451-3.1,7.08,7.08,0,0,1,1.265-2.365,5.446,5.446,0,0,1,1.947-1.5A6,6,0,0,1,2-14.762a4.612,4.612,0,0,1,2.244.528,5.274,5.274,0,0,1,1.54,1.21l-.594.682a4.631,4.631,0,0,0-1.386-1.089,3.842,3.842,0,0,0-1.782-.407,4.87,4.87,0,0,0-2.145.462,4.613,4.613,0,0,0-1.628,1.309A5.947,5.947,0,0,0-2.772-10.01a9.764,9.764,0,0,0-.352,2.728,9.882,9.882,0,0,0,.352,2.739A6.178,6.178,0,0,0-1.76-2.464a4.632,4.632,0,0,0,1.6,1.331,4.588,4.588,0,0,0,2.1.473,4.327,4.327,0,0,0,2-.451A5.885,5.885,0,0,0,5.61-2.442L6.2-1.8A6.508,6.508,0,0,1,4.334-.286,5.129,5.129,0,0,1,1.892.264Zm9.46,0A3.877,3.877,0,0,1,10.164.088,2.819,2.819,0,0,1,9.2-.44a2.443,2.443,0,0,1-.66-.9,3.2,3.2,0,0,1-.242-1.3A2.9,2.9,0,0,1,9.933-5.313a14.505,14.505,0,0,1,5.181-1.309,8.321,8.321,0,0,0-.088-1.2A2.853,2.853,0,0,0,14.652-8.9a2.275,2.275,0,0,0-.77-.77,2.417,2.417,0,0,0-1.276-.3,4.454,4.454,0,0,0-1.936.418,9.334,9.334,0,0,0-1.43.814L8.8-9.46q.286-.2.693-.44a6.22,6.22,0,0,1,.913-.44,8.441,8.441,0,0,1,1.1-.341,5.246,5.246,0,0,1,1.232-.143,3.468,3.468,0,0,1,1.562.319,2.784,2.784,0,0,1,1.034.869,3.612,3.612,0,0,1,.572,1.287,6.858,6.858,0,0,1,.176,1.6V0h-.836l-.088-1.364h-.066A11.709,11.709,0,0,1,13.343-.231,4.194,4.194,0,0,1,11.352.264Zm.176-.836a3.727,3.727,0,0,0,1.76-.44,10.46,10.46,0,0,0,1.826-1.276V-5.874a22.211,22.211,0,0,0-2.75.484,7.161,7.161,0,0,0-1.8.682,2.62,2.62,0,0,0-.979.9,2.176,2.176,0,0,0-.3,1.122,2.379,2.379,0,0,0,.176.968,1.736,1.736,0,0,0,.484.649,2.019,2.019,0,0,0,.715.374A3.035,3.035,0,0,0,11.528-.572ZM19.844,0V-10.56h.836L20.768-8.6h.066a5.159,5.159,0,0,1,1.287-1.606,2.636,2.636,0,0,1,1.7-.616,3.1,3.1,0,0,1,.55.044,1.9,1.9,0,0,1,.506.176l-.22.88a2.154,2.154,0,0,0-.462-.143,3.176,3.176,0,0,0-.506-.033,2.467,2.467,0,0,0-1.485.605,5.044,5.044,0,0,0-1.4,2.1V0ZM30.6.264A4.866,4.866,0,0,1,28.7-.11,4.412,4.412,0,0,1,27.148-1.2,5.259,5.259,0,0,1,26.1-2.937a6.556,6.556,0,0,1-.385-2.321A6.647,6.647,0,0,1,26.1-7.59a5.34,5.34,0,0,1,1.034-1.749,4.62,4.62,0,0,1,1.474-1.1,3.989,3.989,0,0,1,1.7-.385,3.68,3.68,0,0,1,2.97,1.276A5.433,5.433,0,0,1,34.364-5.94v.4a1.821,1.821,0,0,1-.044.4H26.708a6.139,6.139,0,0,0,.308,1.837,4.348,4.348,0,0,0,.8,1.452,3.666,3.666,0,0,0,1.243.946,3.783,3.783,0,0,0,1.628.341,4.5,4.5,0,0,0,1.551-.253,5.076,5.076,0,0,0,1.287-.693l.4.748a13.054,13.054,0,0,1-1.4.7A4.853,4.853,0,0,1,30.6.264Zm-3.894-6.2H33.44A4.678,4.678,0,0,0,32.6-8.987a2.8,2.8,0,0,0-2.266-1,3.149,3.149,0,0,0-1.3.275,3.439,3.439,0,0,0-1.111.8,4.324,4.324,0,0,0-.814,1.276A5.628,5.628,0,0,0,26.708-5.94Z" transform="translate(-584.768 -5403.074)" fill="#fff"/>
                    </g>
                  </svg>
              </Box>
                
              <MenuLinksComponent isOpen={isOpen} isPinned={isPinned} setToggle={setToggle}></MenuLinksComponent>

            </Box>
          </Box>
        </OutsideAlerter>
      </Box>
  )
}

export default MenuComponent;