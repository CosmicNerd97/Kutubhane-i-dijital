/** @format */

import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import { Finger_Paint } from "next/font/google";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

const fingerPaint = Finger_Paint({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <Box
      width="100%"
      height="69px"
      style={{
        backgroundColor: "var(--brown)",
        padding: 10,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Heading size="8" className={fingerPaint.className}>
        <Link href={"/"}>Kutubhane-i Dijital</Link>
      </Heading>
      <AuthButtons />
    </Box>
  );
};

export default Navbar;
