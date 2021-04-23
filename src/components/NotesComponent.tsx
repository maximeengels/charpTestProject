import React from 'react';
import { 
  Box, Text, Link, VStack,
  Editable, EditableInput, EditablePreview,
} from "@chakra-ui/react"

let text = "Woensdag 10 februari, tussen 14u en 16u, werden sensoren voor temperatuur, relatieve vochtigheid, en CO2 losgekoppeld voor de finale montage ervan. De sensoren en het montagestuk staan nu ter hoogte van de horizontale T-profielen die onder- en bovenpanelen op hun plaats";
// type Props = {title:string}

function NotesComponent() {

  return (
    /*==============================TEXTSTYLES===============================*/
    
    <Box textAlign="left" justifyContent="left" pl={["20px","20px","3vw"]} pr={["20px","20px","0"]} userSelect="none">
      <VStack alignItems="left" spacing={8} textAlign="left">
        <Link textStyle="h2"
          href="https://chakra-ui.com"
          target="_blank"
          rel="noopener noreferrer"
          width="fit-content !important">
          Notes
        </Link>
        {/* insert type for title in 'defaultvalue' */}
        <Editable textStyle="h1" defaultValue="Zie Sensor 3, malfunctie">
          <EditablePreview textStyle="h1" />
          <EditableInput textStyle="h1" borderColor="gray.100 !important" />
        </Editable>
        <Text textStyle="h3">
          Note #1
        </Text>
        <Text textStyle="h4">
          alert
        </Text>
        <Text textStyle="p">
          {text}
        </Text>
      </VStack>
    </Box>
  )
}

export default NotesComponent;