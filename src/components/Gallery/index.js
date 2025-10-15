"use client";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GallerySection = styled.section`
  background: #fffaf3;
  padding: 100px 8%;
  text-align: center;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  background: rgba(0, 0, 0, 0.8);
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
  box-shadow: 0 0 30px rgba(255, 136, 0, 0.3);
`;

const CloseButton = styled.button`
  position: fixed;
  top: 40px;
  right: 40px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 8px 14px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease;
  z-index: 10000;

  &:hover {
    background: rgba(255, 136, 0, 0.8);
  }

  @media (max-width: 768px) {
    top: 25px;
    right: 25px;
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
            <CloseButton onClick={() => setSelected(null)}>
              <X size={26} />
            </CloseButton>
          </Overlay>
        )}
      </AnimatePresence>
    </GallerySection>
  );
}
