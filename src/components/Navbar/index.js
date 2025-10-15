"use client";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";

// --- Styled Components ---
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 215, 125, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ff8800;
  cursor: pointer;
  letter-spacing: 1px;

  &:hover {
    color: #d16b00;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #333;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.95rem;
  transition: color 0.2s;

  &:hover {
    color: #d16b00;
  }
`;

// --- Hamburger Button ---
const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 26px;
    height: 3px;
    margin: 5px 0;
    background: #ff8800;
    border-radius: 2px;
    transition: 0.3s;
  }

  ${({ open }) =>
    open &&
    css`
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    `}
`;

// --- Sidebar (mobile) ---
const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 250px;
  height: 100vh;
  background: #fffdf8;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
  padding: 60px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: right 0.3s ease;
  z-index: 1000;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 1.5rem;
  color: #ff8800;
  cursor: pointer;

  &:hover {
    color: #d16b00;
  }
`;

const SidebarLink = styled.a`
  margin: 20px 0;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
  text-transform: uppercase;
  transition: color 0.2s;

  &:hover {
    color: #ff8800;
  }
`;

// --- Component ---
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <Logo onClick={scrollToTop}>Sunshine Studio</Logo>

        <NavLinks>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#reviews">Reviews</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>

        <Hamburger open={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Hamburger>
      </NavbarContainer>

      {/* Sidebar for mobile */}
      <Sidebar open={open}>
        <CloseIcon onClick={() => setOpen(false)} />
        <SidebarLink href="#services" onClick={() => setOpen(false)}>
          Services
        </SidebarLink>
        <SidebarLink href="#gallery" onClick={() => setOpen(false)}>
          Gallery
        </SidebarLink>
        <SidebarLink href="#reviews" onClick={() => setOpen(false)}>
          Reviews
        </SidebarLink>
        <SidebarLink href="#contact" onClick={() => setOpen(false)}>
          Contact
        </SidebarLink>
      </Sidebar>
    </>
  );
}
