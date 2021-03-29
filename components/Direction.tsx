import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface DirectionsProps {
  icon: React.ReactNode;
  children: string;
  [key: string]: any;
}

const Directions = ({ icon, children, ...props }: DirectionsProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      w="100%"
      my={6}
      px={4}
      {...props}>
      {icon}
      <Text fontWeight="medium" fontSize="1.2rem">
        {children}
      </Text>
    </Box>
  );
};

export default Directions;
