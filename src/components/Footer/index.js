"use client";
import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #ffaf60, #ff8800);
  color: #fff;
  padding: 80px 20px 40px;
  text-align: left;
  border-top: 2px solid rgba(255, 255, 255, 0.25);
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 35px;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 260px;
`;

const FooterTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 18px;
  font-weight: 800;
  letter-spacing: 0.5px;
`;

const FooterItem = styled.p`
  margin: 8px 0;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Socials = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 10px;

  a {
    color: #fff;
    font-size: 1.8rem;
    padding: 10px;
    border-radius: 50%;

    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    color: #ff8800;
    transform: scale(1.2);
    background: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 800px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 60px;
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
