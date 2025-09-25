import { useEffect, useState } from "react";
// Custom hook to determine how many gallery images to show
function useGalleryCount() {
  const [count, setCount] = useState(3); // Default to desktop
  useEffect(() => {
    function updateCount() {
      setCount(window.innerWidth <= 768 ? 4 : 3);
    }
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);
  return count;
}
import Head from "next/head";
import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

// ----- Styled Components -----
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background: #fffdf8;
  color: #333;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  background: rgba(255, 215, 125, 0.9);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

const NavLink = styled.a`
  cursor: pointer;
  font-weight: 600;
  color: #333;
  transition: 0.3s;
  &:hover {
    color: #ff8800;
  }
`;

const Hero = styled.section`
  height: 80vh;
  background: url("/images/tanning-hero.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

const HeroContent = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 30px 50px;
  border-radius: 12px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
`;

const Section = styled.section`
  max-width: 1100px;
  margin: 80px auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  color: #ff8800;
  margin-bottom: 40px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

const ServiceCard = styled.div`
  background: #fffaf2;
  border: 1px solid #ffe5b4;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(255, 170, 60, 0.15);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #d16b00;
`;

const ServicePrice = styled.p`
  font-weight: 600;
  color: #444;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  height: auto;
  max-height: 320px;
  border-radius: 12px;
  object-fit: cover;
  background: #eee;
`;

const ReviewsGrid = styled.div`
  display: grid;
  gap: 20px;
`;

const ReviewCard = styled.div`
  background: #fffaf2;
  padding: 20px;
  border-left: 4px solid #ff8800;
  border-radius: 8px;
  font-style: italic;
  line-height: 1.6;
`;

// --- Footer ---
const Footer = styled.footer`
  background: linear-gradient(135deg, #ffaf60, #ff8800);
  color: #fff;
  padding: 60px 20px;
  margin-top: 80px;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 250px;
`;

const FooterTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

const FooterItem = styled.p`
  margin: 6px 0;
`;

const Socials = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  a {
    color: #fff;
    font-size: 1.6rem;
    transition: 0.3s;
  }
  a:hover {
    color: #333;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 0.85rem;
  color: #f8f8f8;
`;

// ----- Data -----
const services = [
  { name: "Standard Tanning Bed", price: "£20 / 15 min" },
  { name: "Premium Sunbed", price: "£30 / 20 min" },
  { name: "Spray Tan - Natural Glow", price: "£40 / session" },
  { name: "Custom Airbrush Tan", price: "£55 / session" },
  { name: "Monthly Unlimited Pass", price: "£150 / month" },
  { name: "Weekend Glow Package", price: "£70 / 3 sessions" },
  { name: "Red Light Therapy", price: "£35 / session" },
  { name: "Express Tan (Rapid Development)", price: "£45 / session" },
  { name: "Hydration Station Spa", price: "£25 / 20 min" },
  { name: "Teeth Whitening Add-On", price: "£30 / session" },
  { name: "Aftercare Moisturizing Treatment", price: "£15 / session" },
  { name: "Bridal & Event Tanning Package", price: "£120 / 4 sessions" },
];

const gallery = [
  "/images/tanning1.jpg",
  "/images/tanning2.jpg",
  "/images/tanning3.jpg",
  "/images/tanning4.jpg",
];

const reviews = [
  "I absolutely love Sunshine Studio! The staff took the time to explain the different tanning options, which made me feel really comfortable as it was my first time. My tan came out even and natural, and I’ve had so many compliments. I can’t wait to book my next session! – Emily R.",
  "The premium sunbeds are amazing. I usually burn in the sun, but here I got a gorgeous golden glow without the stress. The studio is spotless, and the atmosphere is relaxing, almost like being on a mini vacation. Highly recommend to anyone wanting a confidence boost. – Sarah K.",
  "I’ve tried spray tans before, but Sunshine Studio completely changed the game. The results were streak-free, natural-looking, and lasted far longer than I expected. Plus, the airbrush artist was so professional and made the whole experience enjoyable. – Jasmine M.",
  "From the moment I walked in, I felt welcomed and cared for. The front desk team was super helpful, and the place smelled amazing. My tan turned out flawless, and I left feeling like I’d just come back from a tropical holiday. Five stars! – Laura T.",
];

// ----- Page -----
export default function Home() {
  return (
    <Container>
      <Head>
        <title>Sunshine Studio | Tanning & Glow</title>
      </Head>

      {/* Navbar */}
      <Navbar>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#gallery">Gallery</NavLink>
        <NavLink href="#reviews">Reviews</NavLink>
      </Navbar>

      {/* Hero */}
      <Hero>
        <HeroContent>
          <HeroTitle>Sunshine Studio</HeroTitle>
          <HeroSubtitle>
            Get your perfect sun-kissed glow all year round
          </HeroSubtitle>
        </HeroContent>
      </Hero>

      {/* Services */}
      <Section id="services">
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid>
          {services.map((s) => (
            <ServiceCard key={s.name}>
              <ServiceName>{s.name}</ServiceName>
              <ServicePrice>{s.price}</ServicePrice>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>

      {/* Gallery */}
      <Section id="gallery">
        <SectionTitle>Gallery</SectionTitle>
        <GalleryGrid>
          {gallery.slice(0, useGalleryCount()).map((src, i) => (
            <GalleryImg key={i} src={src} alt="Tanning Studio" />
          ))}
        </GalleryGrid>
      </Section>

      {/* Reviews */}
      <Section id="reviews">
        <SectionTitle>What Our Clients Say</SectionTitle>
        <ReviewsGrid>
          {reviews.map((r, i) => (
            <ReviewCard key={i}>{r}</ReviewCard>
          ))}
        </ReviewsGrid>
      </Section>

      {/* Footer */}
      <Footer>
        <FooterContent>
          <FooterColumn>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterItem>150 Piccadilly,W1J 9BR, London, UK</FooterItem>
            <FooterItem>(+44) 020-7890345</FooterItem>
            <FooterItem>info@sunshinestudio.com</FooterItem>
          </FooterColumn>

          <FooterColumn style={{ textAlign: "right" }}>
            <FooterTitle>Follow Us</FooterTitle>
            <Socials style={{ justifyContent: "flex-end" }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </Socials>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          &copy; {new Date().getFullYear()} Sunshine Studio. All rights
          reserved.
        </FooterBottom>
      </Footer>
    </Container>
  );
}
