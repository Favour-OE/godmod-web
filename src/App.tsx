import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Divider } from './components/Divider';
import { Mission } from './components/Mission';
import { Pillars } from './components/Pillars';
import { Ministry } from './components/Ministry';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Divider />
      <Mission />
      <Divider padding="0 2rem" />
      <Pillars />
      <Divider />
      <Ministry />
      <Footer />
    </>
  );
}

export default App;
