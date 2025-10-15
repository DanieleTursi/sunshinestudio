"use client";
import styled from "styled-components";

const ServicesSection = styled.section`
  padding: 100px 8%;
  background: #fffaf3;
  text-align: center;

  @media (max-width: 900px) {
    padding: 60px 6%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff8800;
  margin-bottom: 60px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
    height: 400px; /* adjust as needed */
    overflow-y: auto;
    padding-right: 10px;
    scroll-behavior: smooth;

    /* Optional: hide default scrollbar on mobile */
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 136, 0, 0.5);
      border-radius: 3px;
    }
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(255, 136, 0, 0.15);
  padding: 20px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(255, 136, 0, 0.3);
  }

  h3 {
    color: #ff8800;
    margin-bottom: 12px;
    font-size: 1.3rem;
    font-weight: 700;
  }

  p {
    color: #555;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

export default function Services() {
  const services = [
    {
      title: "Balayage Glow",
      desc: "Natural highlights for radiant shine and warmth.",
    },
    {
      title: "Haircut & Styling",
      desc: "Personalized cuts that suit your unique look.",
    },
    {
      title: "Color Correction",
      desc: "Fix tones and achieve your perfect color balance.",
    },
    {
      title: "Keratin Treatment",
      desc: "Smooth, silky hair with long-lasting results.",
    },
    {
      title: "Bridal Styling",
      desc: "Elegant looks for your unforgettable day.",
    },
    {
      title: "Scalp Therapy",
      desc: "Revitalize your roots for healthier hair growth.",
    },
    {
      title: "Gloss & Toner",
      desc: "Add shine and depth to your existing color.",
    },
    { title: "Men’s Grooming", desc: "Clean, sharp cuts and styling for men." },
    {
      title: "Extensions",
      desc: "Seamless length and volume with premium extensions.",
    },
  ];

  return (
    <ServicesSection id="services">
      <Title>Our Services</Title>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
}
