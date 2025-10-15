"use client";
import styled, { keyframes } from "styled-components";

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---
const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("/images/tanning-hero.jpg") center/cover no-repeat;
    z-index: 0; /* behind content */
  }
`;

const HeroContent = styled.div`
  position: relative; /* ensures content is above the ::before */
  z-index: 1;
  animation: ${fadeIn} 1s ease forwards;
  color: #fff;
  max-width: 800px;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #ff8800;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 14px 34px;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 6px 20px rgba(255, 136, 0, 0.4);
  transition: 0.3s;

  &:hover {
    background: #e46f00;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 136, 0, 0.6);
  }
`;

// --- Component ---
export default function Hero() {
  return (
    <HeroSection id="home">
      <HeroContent>
        <h1>Shine with Confidence</h1>
        <p>
          Welcome to <strong>Sunshine Studio</strong> — where your hair glows as
          bright as your personality. Discover expert stylists, vibrant colors,
          and care that makes you shine inside and out.
        </p>
        <CTAButton href="#contact">Book Now</CTAButton>
      </HeroContent>
    </HeroSection>
  );
}
