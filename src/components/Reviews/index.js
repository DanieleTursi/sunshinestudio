"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const ReviewsSection = styled.section`
  background: #fffdf8;
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

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 15px;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ReviewCard = styled(motion.div)`
  background: #fffaf2;
  border-left: 4px solid #ff8800;
  border-radius: 12px;
  padding: 25px;
  text-align: left;
  font-style: italic;
  color: #333;
  box-shadow: 0 6px 18px rgba(255, 136, 0, 0.1);
  transition: transform 0.3s ease;
  scroll-snap-align: center;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    min-width: 80%;
  }
`;

const Reviewer = styled.p`
  font-weight: 600;
  margin-top: 15px;
  color: #d16b00;
  font-style: normal;
`;

export default function Reviews() {
  const reviews = [
    {
      text: "Absolutely love Curly Girl! My lashes have never looked so natural and full. The team is professional, and the studio feels luxurious.",
      author: "– Emily R.",
    },
    {
      text: "The best lash lift I’ve ever had. They listened carefully to what I wanted and nailed it. I walked out feeling stunning!",
      author: "– Sarah K.",
    },
    {
      text: "The place smells amazing, the vibe is calm, and the results are flawless. I got compliments for days after my appointment.",
      author: "– Laura T.",
    },
    {
      text: "Friendly staff, relaxing atmosphere, and top-quality products. My lashes stayed perfect for over a month!",
      author: "– Jasmine M.",
    },
  ];

  return (
    <ReviewsSection id="reviews">
      <Title>What Our Clients Say</Title>
      <ReviewsGrid>
        {reviews.map((r, i) => (
          <ReviewCard
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {r.text}
            <Reviewer>{r.author}</Reviewer>
          </ReviewCard>
        ))}
      </ReviewsGrid>
    </ReviewsSection>
  );
}
