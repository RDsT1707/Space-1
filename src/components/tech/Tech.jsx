import { useState } from 'react';
import techData from '../../../public/data/destination.json'; // tu peux garder ce JSON pour titre, desc, etc.
import './Tech.css';

// Importe les images localement (adapté au chemin depuis components/technology)
import launchVehicleImg from '../../assets/img/assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleImg from '../../assets/img/assets/technology/image-space-capsule-portrait.jpg';
import spacePortImg from '../../assets/img/assets/technology/image-spaceport-portrait.jpg';

const Technology = () => {
  const [selectedTech, setSelectedTech] = useState(0);

  // Associer ici les images aux données correspondantes
  const technologies = techData.technology.map((tech, index) => {
    let img;
    switch (tech.id) {
      case 1:
        img = launchVehicleImg;
        break;
      case 2:
        img = spaceCapsuleImg;
        break;
      case 3:
        img = spacePortImg;
        break;
      default:
        img = null;
    }
    return {
      ...tech,
      image: img,
    };
  });

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
                className={`${selectedTech === index ? 'active' : ''}`}
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
