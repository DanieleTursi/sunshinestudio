"use client";
import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #ffaf60, #ff8800);
  color: #fff;
  padding: 70px 20px 40px;
  text-align: left;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 260px;
`;

const FooterTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 18px;
  font-weight: 700;
`;

const FooterItem = styled.p`
  margin: 6px 0;
  font-size: 0.95rem;
`;

const Socials = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 10px;

  a {
    color: #fff;
    font-size: 1.7rem;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  a:hover {
    color: #333;
    transform: scale(1.15);
  }

  @media (max-width: 800px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 0.85rem;
  color: #f8f8f8;
  opacity: 0.9;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterItem>150 Piccadilly, W1J 9BR, London, UK</FooterItem>
          <FooterItem>(+44) 020-7890345</FooterItem>
          <FooterItem>info@sunshinestudio.com</FooterItem>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Follow Us</FooterTitle>
          <Socials>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </Socials>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        © {new Date().getFullYear()} Sunshine Studio. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
}
