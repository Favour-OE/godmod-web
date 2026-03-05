import { useEffect } from 'react';

export const Mission = () => {
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
    <section className="mission-section" id="mission">
      <div className="mission-bg"></div>
      <div className="mission-content reveal">
        <p className="mission-quote">
          "Thy kingdom come, Thy will be done<br />
          <span>on earth as it is in heaven."</span>
        </p>
        <p className="mission-ref">- Matthew 6:10 -</p>
      </div>
    </section>
  );
};
