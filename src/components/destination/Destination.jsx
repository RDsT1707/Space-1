import { useState } from 'react';
import planetsData from '/public/data/destination.json';
import './Destination.css';

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  const planets = planetsData.planets;
  const currentPlanet = planets[selectedPlanet];

  return (
    <section className="destination grid container">
      <h2 class="numbered-title"><span>01</span> Pick your destination</h2>

      
      <div className="destination-content grid">
        <picture className="destination-image">
          <img src={currentPlanet.image} alt={currentPlanet.id} />
        </picture>

        <div className="destination-info flow">
          <div className="destination-tabs flex underline-indicators">
            {planets.map((planet, index) => (
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
