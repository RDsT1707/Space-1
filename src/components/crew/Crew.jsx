import data from '/public/data/destination.json';
import { useState } from 'react';
import './Crew.css';

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(0);
  const crewMembers = data.crew;  // Récupère la liste des membres d'équipage

  const currentCrew = crewMembers[selectedCrew];

  return (
   <section className="crew">
  <div className="crew-content">
    <div>
      <h1>02 Meet your crew</h1>
      <h2>{currentCrew.role}</h2>
      <p className="crew-name">{currentCrew.name}</p>
      <p className="crew-bio">{currentCrew.bio}</p>

      <div className="crew-nav">
        {crewMembers.map((_, i) => (
          <button
            key={i}
            aria-selected={selectedCrew === i}
            className={selectedCrew === i ? 'active' : ''}
            onClick={() => setSelectedCrew(i)}
          >
            <span className="sr-only">Crew member {i + 1}</span>
          </button>
        ))}
      </div>
    </div>

    <div>
      <img src={currentCrew.image} alt={currentCrew.name} />
    </div>
  </div>
</section>
);};

export default Crew;
