"use client";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---
const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 120px 8% 60px;
  background: linear-gradient(135deg, #ffe9b8, #ffd6a5, #fff1c1);
  overflow: hidden;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 120px 6% 80px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease forwards;

  h1 {
    font-size: 3rem;
    color: #ff8800;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #444;
    max-width: 500px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin: 0 auto 25px;
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

const ImageArea = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    max-width: 500px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 4px solid white;
  }

  @media (max-width: 900px) {
    img {
      width: 70%;
      max-width: 350px;
    }
  }
`;

// --- Component ---
export default function Hero() {
  return (
    <HeroSection id="home">
      <TextContent>
        <h1>Shine with Confidence ✨</h1>
        <p>
          Welcome to <strong>Sunshine Studio</strong> — where your hair glows as
          bright as your personality. Discover expert stylists, vibrant colors,
          and care that makes you shine inside and out.
        </p>
        <CTAButton href="#contact">Book Now</CTAButton>
      </TextContent>

      <ImageArea
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1605733160314-4ee3b4e9ef92?q=80&w=800"
          alt="Sunshine Studio Hair Model"
        />
      </ImageArea>
    </HeroSection>
  );
}
