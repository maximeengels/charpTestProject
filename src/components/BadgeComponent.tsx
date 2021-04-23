import React from 'react';
import {
Box, Text, Link, VStack,
Stack, Badge
} from "@chakra-ui/react"

function BadgeComponent() {

return (
/*==============================TEXTSTYLES===============================*/

  <Box textAlign="left" justifyContent="left" w="100%" p="3%">
    <Stack display="flex" flexWrap="wrap" flexDir="row">
      <Badge textColor="white" bgColor="blue" w="min-content" m="8px 8px 0 0">
        Vitrine Lam Gods
      </Badge>
      <Badge textColor="white" bgColor="green" w="min-content" m="8px 8px 0 0">
        Temperatuur
      </Badge>
      <Badge textColor="white" bgColor="red" w="min-content" m="8px 8px 0 0">
        [LG]T
      </Badge>
    </Stack>
  </Box>
  )
}

export default BadgeComponent;