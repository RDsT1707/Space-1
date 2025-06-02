import { useState } from 'react';
import techData from '../../assets/data/technology.json'; // chemin corrigé
import './Tech.css';

// Import des images locales
import launchVehicleImg from '../../assets/img/assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleImg from '../../assets/img/assets/technology/image-space-capsule-portrait.jpg';
import spacePortImg from '../../assets/img/assets/technology/image-spaceport-portrait.jpg';

const Technology = () => {
  const [selectedTech, setSelectedTech] = useState(0);

  // Associer les images aux données selon leur ID ou nom
  const imageMap = {
    1: launchVehicleImg,
    2: spaceCapsuleImg,
    3: spacePortImg,
  };

  const technologies = techData.technology.map((tech) => ({
    ...tech,
    image: imageMap[tech.id] || null,
  }));

  const currentTech = technologies[selectedTech];

  return (
    <section className="technology grid container">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>

      <div className="technology-content grid">
        <div className="technology-main">
          <div className="technology-tabs flex">
            {technologies.map((_, index) => (
              <button
                key={index}
                className={selectedTech === index ? 'active' : ''}
                onClick={() => setSelectedTech(index)}
                aria-selected={selectedTech === index}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="technology-info flow">
            <header className="flow flow--space-small">
              <p className="technology-subtitle text-accent">{currentTech.subtitle}</p>
              <h2 className="technology-title fs-700 ff-serif uppercase">
                {currentTech.title}
              </h2>
            </header>
            <p className="technology-description text-accent">
              {currentTech.description}
            </p>
          </div>
        </div>

        <picture className="technology-image">
          <img src={currentTech.image} alt={currentTech.title} />
        </picture>
      </div>
    </section>
  );
};

export default Technology;
