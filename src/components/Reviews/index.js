"use client";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ReviewsSection = styled.section`
  background: #fffdf8;
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

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 20px;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ReviewCard = styled.div`
  background: #fffaf2;
  border-radius: 20px;
  padding: 35px 30px;
  text-align: left;
  color: #333;
  position: relative;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  scroll-snap-align: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(255, 136, 0, 0.35);
  }

  &::before {
    content: "“";
    font-size: 3rem;
    font-weight: bold;
    color: #ff8800;
    position: absolute;
    top: 15px;
    left: 20px;
  }

  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: var(--delay);

  @media (max-width: 768px) {
    min-width: 80%;
    padding: 25px 20px;

    &::before {
      font-size: 2.5rem;
      top: 10px;
      left: 15px;
    }
  }
`;

const Reviewer = styled.p`
  font-weight: 700;
  margin-top: 20px;
  color: #d16b00;
  font-style: normal;
  font-size: 1rem;
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
          <ReviewCard key={i} style={{ "--delay": `${i * 0.1}s` }}>
            {r.text}
            <Reviewer>{r.author}</Reviewer>
          </ReviewCard>
        ))}
      </ReviewsGrid>
    </ReviewsSection>
  );
}
