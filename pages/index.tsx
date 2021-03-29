import { Box, Button, Text, Flex, Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import QR from "../components/QR";
import { useRouter } from "next/router";
import Link from "next/link";
import { HomeIcon } from '../styles/icons/home'
import Image from 'next/image'


export default function QRscanner() {
  const navigator = useRouter();

  const handleScan = (data) => {
    if (data) {
      // console.log(data);
      navigator.push(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Box h="100vh" display="flex" justifyContent="center">
      <Stack direction="column"  align="center" width="100%" height="100%" spacing={6} mt={8}>
        <Heading> Find my Car <Image src="/titleIcon.svg" alt="Icon Title" width={24} height={24}  /></Heading>
        <Box bg="black" height="1px" width="70%" mb={6}/>
        <Link href="/scanner" passHref>
          <Button as="a" colorScheme="green">
            Abrir scanner
          </Button>
        </Link> 
        <Image src="/home.svg" alt="Picture of the author" width={500} height={450}/>
        
      </Stack>
    </Box>
  );
}
