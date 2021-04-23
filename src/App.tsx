import * as React from "react"
import {
  ChakraProvider, Box, Flex, extendTheme,
} from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MenuComponent from './components/MenuComponent';
import BadgeComponent from './components/BadgeComponent';
import ProjectComponent from './components/ProjectComponent';
import NotesComponent from './components/NotesComponent';
import NotificationsComponent from './components/NotificationsComponent';
import MoreBtnComponent from "./components/MoreBtnComponent";

  // Use this theme throughout whole webapp for consistent design
  // It includes colors, typography, border radius values and responsive breakpoints
const theme = extendTheme({ 
  colors: {
    black: "#283640",
    white: "#FFFFFF",
    gray: { 
      100: "#EFF2F5",
      200: "#A3ADB5",
      300: "#8D959B",
      400: "#757e85",    
    },
    blue: "#318BCF",
    green: "#0BD949",
    red: "#B22F14",
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontFamily: "Hind",
      fontSize: ["24px", "32px"],
      fontWeight: "bold",
      lineHeight: "100%",
      textTransform: "uppercase",
      color: "black",
      mt: ".8rem !important"
    },
    h2: {
      fontFamily: "Hind",
      fontSize: ["18px", "20px"],
      fontWeight: "medium",
      lineHeight: "100%",
      textTransform: "capitalize",
      color: "gray.200",
      mt: "2rem !important"
    },
    h3: {
      fontFamily: "Source Sans Pro",
      fontSize: ["18px", "20px"],
      fontWeight: "bold",
      lineHeight: "100%",
      textTransform: "capitalize",
      color: "black",
      mt: "2rem !important"
    },
    h4: {
      fontFamily: "Hind",
      fontSize: ["15px", "16px"],
      // textAlign: ["center", "left"],
      fontWeight: "medium",
      lineHeight: "100%",
      textTransform: "capitalize",
      color: "black",
      mt: ".5rem !important",
      mb: ".5rem !important"
    },
    p: {
      fontFamily: "Hind",
      fontSize: ["14px", "15px"],
      fontWeight: "regular",
      lineHeight: "130%",
      textTransform: "initial",
      width: ["100%", "50vw" , "25vw"],
      color: "black",
      mt: ".5rem !important",
      mb: ".5rem !important"
    },
    menu: {
      userSelect:"none",
      fontFamily: "Hind",
      fontSize: ["24px", "26px", "24px"],
      fontWeight: "bold",
      lineHeight: "100%",
      textTransform: "initial",
      color: "white",
      mt: "1rem !important",
      mb: "1rem !important",
      width: "fit-content !important",
      transition: "all 0.2s",
      textDecoration: "none !important",
      _hover:{ 
        transform: "scale(1.1)",
        cursor: "pointer",
        opacity: "1"
     },
    },
    submenu: {
      userSelect:"none",
      fontFamily: "Hind",
      fontSize: ["22px", "22px", "22px"],
      fontWeight: "light",
      lineHeight: "100%",
      textTransform: "initial",
      color: "white",
      mt: "1rem !important",
      mb: "1rem !important",
      width: "fit-content !important",
      transition: "all 0.2s",
      textDecoration: "none !important",
      _hover:{ 
        transform: "scale(1.05)",
        fontWeight: "medium",
        cursor: "pointer",
        opacity: "1"
     },
    },
  },
 })

export const App: React.FC = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <Switch>
          <Box fontSize="xl" overflowX="hidden">
            <Flex>
              {/*==============================MENU===============================*/}
              <MenuComponent />

              {/*==============================PAGE===============================*/}
              <Flex pl={["0","0","110px"]} minH="100vh" w="100vw" flexDir="column" justifyContent="center">
                <MoreBtnComponent></MoreBtnComponent>
                
                <Route exact path="/">
                  <ProjectComponent />
                </Route>
                <Route path="/notes">
                  <NotesComponent />
                </Route>
                <Route path="/notifications">
                  <NotificationsComponent />
                </Route>

                {/*==============================BADGES===============================*/}
                {/* <BadgeComponent /> */}

              </Flex>
            </Flex>
          </Box>
        </Switch>
    </ChakraProvider>
  </Router>
)