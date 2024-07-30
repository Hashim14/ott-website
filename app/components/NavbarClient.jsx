"use client";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";

const NavbarClient = () => {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{
        background: "rgba(0, 0, 0, 0.8)",
        transition: "background 0.3s ease",
      }}
      className="py-3"
    >
      <Link href={`/home`}>
        <Navbar.Brand className="mx-10  text-white">Home</Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default NavbarClient;
