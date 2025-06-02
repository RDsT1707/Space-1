import { useState } from 'react';
import './Destination.css';

// Import des images
import marsImg from "../../assets/img/assets/destination/image-mars.webp";
import moonImg from "../../assets/img/assets/destination/image-moon.webp";
import europaImg from "../../assets/img/assets/destination/image-europa.webp";
import titanImg from "../../assets/img/assets/destination/image-titan.webp";


const planetsData = [
  {
    id: 'mars',
    description: "Don’t forget to pack your hiking boots...",
    travelTime: '9 months',
    image: marsImg
  },
  {
    id: 'moon',
    description: "See our planet as you’ve never seen it before...",
    travelTime: '3 days',
    image: moonImg
  },
  {
    id: 'titan',
    description: "The only moon known to have a dense atmosphere...",
    travelTime: '7 years',
    image: titanImg
  },
  {
    id: 'europa',
    description: "The smallest of the four Galilean moons...",
    travelTime: '3 years',
    image: europaImg
  }
];

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(0);

  const currentPlanet = planetsData[selectedPlanet];

  return (
    <section className="destination grid container">
      <h2 className="numbered-title"><span>01</span> Pick your destination</h2>

      <div className="destination-content grid">
        <picture className="destination-image">
          <img src={currentPlanet.image} alt={currentPlanet.id} />
        </picture>

        <div className="destination-info flow">
          <div className="destination-tabs flex underline-indicators">
            {planetsData.map((planet, index) => (
              <button
                key={planet.id}
                className={`uppercase ff-sans-cond text-accent letter-spacing-2 ${
                  selectedPlanet === index ? 'active' : ''
                }`}
                onClick={() => setSelectedPlanet(index)}
                aria-selected={selectedPlanet === index}
              >
                {planet.id.toUpperCase()}
              </button>
            ))}
          </div>

          <article className="destination-details flow">
            <h2 className="destination-title fs-800 uppercase ff-serif">
              {currentPlanet.id.toUpperCase()}
            </h2>
            <p className="destination-description">
              {currentPlanet.description}
            </p>

            <div className="destination-stats flex">
              <div>
                <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                <p className="ff-serif uppercase">{currentPlanet.travelTime}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Destination;
