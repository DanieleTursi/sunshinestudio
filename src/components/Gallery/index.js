"use client";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const GallerySection = styled.section`
  background: #fffaf3;
  padding: 100px 8%;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 6%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff8800;
  font-weight: 800;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 25px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 20px;
  }
`;

const GalleryItem = styled(motion.div)`
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.07);
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const EnlargedImage = styled(motion.img)`
  max-width: 90%;
  max-height: 80vh;
  border-radius: 20px;
  object-fit: contain;
  box-shadow: 0 0 40px rgba(255, 136, 0, 0.4);
`;

const CloseButton = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 12px 16px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  transition: background 0.3s ease, transform 0.2s ease;
  z-index: 10000;

  &:hover {
    background: rgba(255, 136, 0, 0.9);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const images = [
    "/images/tanning1.jpg",
    "/images/tanning2.jpg",
    "/images/tanning3.jpg",
    "/images/tanning4.jpg",
  ];

  return (
    <GallerySection id="gallery">
      <Title>Our Gallery</Title>
      <GalleryGrid>
        {images.map((src, index) => (
          <GalleryItem
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(src)}
          >
            <img src={src} alt={`Gallery image ${index + 1}`} />
          </GalleryItem>
        ))}
      </GalleryGrid>

      <AnimatePresence>
        {selected && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <EnlargedImage
              src={selected}
              alt="Enlarged view"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <CloseButton onClick={() => setSelected(null)}>×</CloseButton>
          </Overlay>
        )}
      </AnimatePresence>
    </GallerySection>
  );
}
