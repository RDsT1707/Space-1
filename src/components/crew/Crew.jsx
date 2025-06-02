import { useState } from 'react';
import data from '/public/data/destination.json'; // tu peux garder le JSON pour le texte
import './Crew.css';

// Import des images localement
import douglasImg from '../../assets/img/assets/crew/image-douglas-hurley.png';
import anoushehImg from '../../assets/img/assets/crew/image-anousheh-ansari.png';
import victorImg from '../../assets/img/assets/crew/image-victor-glover.png';
import markImg from '../../assets/img/assets/crew/image-mark-shuttleworth.png';

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(0);

  // On crée un tableau avec les images associées au crew
  const crewMembers = data.crew.map((member, i) => {
    let img;
    switch (i) {
      case 0:
        img = douglasImg;
        break;
      case 1:
        img = anoushehImg;
        break;
      case 2:
        img = victorImg;
        break;
      case 3:
        img = markImg;
        break;
      default:
        img = null;
    }
    return {
      ...member,
      image: img,
    };
  });

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
  );
};

export default Crew;
